import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "../styles/components/button.style";

const CustomButton = ({
  onPress,
  text,
  type = "Primary",
  bgColor,
  fgColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        styles[`container${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
