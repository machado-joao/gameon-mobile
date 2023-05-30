import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: SIZES.xSmall,
    marginVertical: SIZES.xSmall,
    padding: SIZES.medium,
    width: "100%",
  },
  containerPrimary: {
    backgroundColor: COLORS.lightBlue,
  },
  containerSecondary: {},
  text: {
    color: "#fff",
    fontWeight: "500",
  },
  textSecondary: {
    color: COLORS.black,
  },
});

export default styles;
