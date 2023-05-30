import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: SIZES.large,
  },
  logo: {
    alignSelf: "center",
    height: SIZES.large,
    tintColor: COLORS.blue,
    width: "70%",
  },
});

export default styles;
