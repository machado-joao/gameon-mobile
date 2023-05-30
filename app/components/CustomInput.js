import React, { useState } from "react";
import { TextInput } from "react-native";

import styles from "../styles/components/input.style";

const CustomInput = ({ placeholder, value, setValue, secureTextEntry }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const inputStyle = [styles.input, isFocused && styles.inputFocused];

  return (
    <TextInput
      onChangeText={setValue}
      onBlur={handleBlur}
      onFocus={handleFocus}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={inputStyle}
      value={value}
    />
  );
};

export default CustomInput;
