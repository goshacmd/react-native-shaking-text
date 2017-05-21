import React, { Component } from 'react';
import {
  Text,
  Animated,
} from 'react-native';

export default class ShakingText extends Component {
  componentWillMount() {
    this._shake = new Animated.Value(0);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.children !== nextProps.children) {
      this.shake();
    }
  }

  shake = () => {
    this._shake.setValue(0);
    Animated.spring(this._shake, {
      toValue: 1,
      friction: 3,
      tension: 10,
    }).start(() => {
      this._shake.setValue(0);
    });
  };

  render() {
    const animatedStyle = {
      transform: [
        {
          translateY: this._shake.interpolate({
            inputRange: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            outputRange: [0, 10, -15, 12, -9, 18, -7, 10, -11, 5, 0],
          }),
        },
        {
          translateX: this._shake.interpolate({
            inputRange: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            outputRange: [0, 2, -3, 4, -4, 3, -3, 4, -5, 2, 0],
          }),
        },
      ],
    };

    return (
      <Animated.Text
        {...this.props}
        style={[animatedStyle, this.props.style]}
      />
    );
  }
}
