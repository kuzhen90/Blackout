import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { TimerPickerModal } from 'react-native-timer-picker';
import { GradientColors } from '@/constants/theme';
import { s, vs, ms } from '@/utils/scaling';

// Helper function to format time
const formatTime = (totalSeconds: number): string => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

interface CountdownTimerProps {
  initialTime: number;
  onComplete?: () => void;
  onTick?: (timeRemaining: number) => void;
  isPaused: boolean;
}

const CountdownTimer = ({ initialTime, onComplete, onTick, isPaused }: CountdownTimerProps) => {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Handle timer countdown
  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Don't start interval if paused or timer is at 0
    if (isPaused || timeRemaining <= 0) {
      return;
    }

    // Start countdown interval
    intervalRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        const newTime = prev - 1;

        // Call onTick callback
        if (onTick) {
          onTick(newTime);
        }

        // Check if timer is complete
        if (newTime <= 0) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          if (onComplete) {
            onComplete();
          }
          return 0;
        }

        return newTime;
      });
    }, 1000);

    // Cleanup on unmount or when dependencies change
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPaused, timeRemaining, onComplete, onTick]);

  // Reset timer when initialTime changes
  useEffect(() => {
    setTimeRemaining(initialTime);
  }, [initialTime]);

  return (
    <Text style={styles.timerText}>{formatTime(timeRemaining)}</Text>
  );
};

/**
 * Renders the LockIn screen UI that displays a configurable countdown timer with start/pause, reset controls, and a duration picker.
 *
 * The component manages timer state (initial duration, pause/completion, selected duration) and coordinates a CountdownTimer and TimerPickerModal.
 * When the timer completes a completion banner is shown; selecting a new duration resets and pauses the timer.
 *
 * @returns The rendered React element for the LockIn screen.
 */
export default function LockInScreen() {
  const [initialTime, setInitialTime] = useState(25 * 60); // 25 minutes in seconds
  const [isPaused, setIsPaused] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState({ hours: 0, minutes: 25, seconds: 0 });

  const handleComplete = () => {
    setIsComplete(true);
    setIsPaused(true);
  };

  const handleTick = (_timeRemaining: number) => {
    // Optional: handle each tick
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
    setIsComplete(false);
  };

  const resetTimer = () => {
    const totalSeconds = selectedDuration.hours * 3600 + selectedDuration.minutes * 60 + selectedDuration.seconds;
    setInitialTime(totalSeconds);
    setIsPaused(true);
    setIsComplete(false);
  };

  const openTimerPicker = () => {
    setIsPaused(true);
    setShowPicker(true);
  };

  const handleTimerConfirm = (pickedDuration: { days: number; hours: number; minutes: number; seconds: number }) => {
    setSelectedDuration({ hours: pickedDuration.hours, minutes: pickedDuration.minutes, seconds: pickedDuration.seconds });
    const totalSeconds = (pickedDuration.days * 86400) + (pickedDuration.hours * 3600) + (pickedDuration.minutes * 60) + pickedDuration.seconds;
    setInitialTime(totalSeconds);
    setIsPaused(true);
    setIsComplete(false);
    setShowPicker(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <LinearGradient
          colors={[GradientColors.accent, GradientColors.lightAccent]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.timerCard}
        >
          <TouchableOpacity onPress={openTimerPicker} style={styles.timerDisplay} activeOpacity={0.7}>
            <CountdownTimer
              initialTime={initialTime}
              onComplete={handleComplete}
              onTick={handleTick}
              isPaused={isPaused}
            />
            <Text style={styles.timerLabel}>Tap to change duration</Text>
          </TouchableOpacity>

          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={togglePause} activeOpacity={0.8}>
              <LinearGradient
                colors={[GradientColors.start, GradientColors.middle]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.controlButton}
              >
                <Text style={styles.controlButtonText}>
                  {isPaused ? 'Start' : 'Pause'}
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={resetTimer} activeOpacity={0.8}>
              <LinearGradient
                colors={[GradientColors.middle, GradientColors.end]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.controlButton}
              >
                <Text style={styles.controlButtonText}>Reset</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {isComplete && (
          <LinearGradient
            colors={[GradientColors.lightAccent, GradientColors.accent]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.completionCard}
          >
            <Text style={styles.completionText}>Time's up! Great work!</Text>
          </LinearGradient>
        )}
      </View>

      <TimerPickerModal
        visible={showPicker}
        setIsVisible={setShowPicker}
        onConfirm={handleTimerConfirm}
        modalTitle="Set Timer Duration"
        onCancel={() => setShowPicker(false)}
        closeOnOverlayPress
        initialValue={{
          hours: selectedDuration.hours,
          minutes: selectedDuration.minutes,
          seconds: selectedDuration.seconds,
        }}
        hideSeconds={false}
        LinearGradient={LinearGradient}
        styles={{
          theme: 'dark',
          backgroundColor: GradientColors.start,
          pickerItem: {
            fontSize: ms(32),
          },
          pickerLabel: {
            fontSize: ms(16),
            marginTop: vs(10),
          },
          pickerContainer: {
            marginRight: s(6),
          },
          pickerItemContainer: {
            width: s(100),
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    flex: 1,
    padding: s(24),
    gap: vs(24),
    paddingTop: vs(40),
    justifyContent: 'center',
  },
  timerCard: {
    padding: s(24),
    borderRadius: ms(12),
    gap: vs(16),
  },
  timerDisplay: {
    alignItems: 'center',
    paddingVertical: vs(20),
  },
  timerText: {
    fontSize: ms(56),
    fontWeight: 'bold',
    color: '#E8F1F5',
    fontVariant: ['tabular-nums'],
  },
  timerLabel: {
    fontSize: ms(14),
    color: '#E8F1F5',
    opacity: 0.7,
    marginTop: vs(8),
  },
  buttonRow: {
    flexDirection: 'row',
    gap: s(12),
    justifyContent: 'center',
  },
  controlButton: {
    paddingVertical: vs(12),
    paddingHorizontal: s(32),
    borderRadius: ms(8),
    minWidth: s(100),
    alignItems: 'center',
  },
  controlButtonText: {
    fontSize: ms(16),
    fontWeight: '600',
    color: '#E8F1F5',
  },
  completionCard: {
    padding: s(20),
    borderRadius: ms(12),
    alignItems: 'center',
  },
  completionText: {
    fontSize: ms(18),
    fontWeight: '600',
    color: '#E8F1F5',
    textAlign: 'center',
  },
});