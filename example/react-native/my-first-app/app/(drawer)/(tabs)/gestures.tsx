import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';

export default function gestures() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const borderColor = useSharedValue('red');
  const scale = useSharedValue(1);
  const backgroundColor = useSharedValue('salmon');

  const panGestureHandler = Gesture.Pan().onUpdate((event) => {
    console.log({ x: event.translationX, y: event.translationY });
    translateX.value = event.translationX;
    translateY.value = event.translationY;
  });

  const tapGestureHandler = Gesture.Tap().onStart(() => {
    console.log('Tapped');
    borderColor.value = 'blue';
  });

  const doubleGestureHandler = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd(() => {
      console.log('Double Tapped');
      borderColor.value = 'red';
      scale.value = 1;
      translateX.value = 0;
      translateY.value = 0;
      backgroundColor.value = 'transparent';
    });

  const tapGestureHandlerOnEnd = Gesture.Tap().onEnd(() => {
    console.log('Tapped');
    borderColor.value = 'green';
  });

  const handleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: withRepeat(withSpring(scale.value), 2, true) },
      ],
      borderColor: borderColor.value,
      backgroundColor: backgroundColor.value,
    };
  });

  const handlePinch = Gesture.Pinch().onUpdate((event) => {
    scale.value = event.scale;
  });

  const combinedGestureHandler = Gesture.Simultaneous(
    panGestureHandler,
    tapGestureHandler,
    tapGestureHandlerOnEnd,
    handlePinch,
    doubleGestureHandler,
  );

  return (
    <View style={styles.container}>
      <GestureDetector gesture={combinedGestureHandler}>
        <Animated.View
          className={'bg-red-500'}
          style={[styles.animatedBox, handleStyle]}
        />
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedBox: {
    width: 100,
    height: 100,
    borderWidth: 1,
    backgroundColor: 'salmon',
  },
});
