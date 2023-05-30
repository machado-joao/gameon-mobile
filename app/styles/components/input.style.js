import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    borderColor: "#e8e8e8",
    borderRadius: SIZES.xSmall,
    height: SIZES.xLarge * 2,
    marginVertical: SIZES.xSmall,
    paddingHorizontal: SIZES.small,
    width: "100%",
  },
  inputFocused: {
    backgroundColor: "#fff",
    borderColor: COLORS.lightBlue,
    borderWidth: 2,
    height: SIZES.xLarge * 2,
    marginVertical: SIZES.xSmall,
    paddingHorizontal: SIZES.small,
    width: "100%",
  },
});

export default styles;
