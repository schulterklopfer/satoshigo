/* based on react-native-animation-hooks */

import {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

export const useAnimatedValue = (initialValue) => {
  const ref = useRef(new Animated.Value(initialValue));
  return ref.current;
};
const getInitialValue = (config) => {
  if (typeof config.initialValue !== 'undefined') {
    return config.initialValue;
  } else {
    return config.toValue; // TODO deal with other types possibilities here
  }
};
const getAnimationType = (config) => config.type || 'timing';
export const useAnimation = (config) => {
  const animatedValue = useAnimatedValue(getInitialValue(config));
  const animate = () => {
    if (config.type === 'timing') {
      Animated.timing(animatedValue, config).start();
    } else if (config.type === 'spring') {
      Animated.spring(animatedValue, config).start();
    } else {
      // @ts-ignore
      throw new Error('unsupported animation type=' + config.type);
    }
  };
  // Currently useEffect is buggy, see https://github.com/facebook/react-native/issues/21967
  useEffect(animate, [config.toValue]);
  return animatedValue;
};
//# sourceMappingURL=AnimationHooks.js.map
