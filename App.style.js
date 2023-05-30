import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "./app/styles/constants/theme";

const styles = StyleSheet.create({
  logoutButton: {
    alignItems: "center",
    backgroundColor: COLORS.lightBlue,
    borderRadius: SIZES.xSmall,
    elevation: 3,
    justifyContent: "center",
    paddingHorizontal: SIZES.xLarge,
    paddingVertical: SIZES.xSmall,
  },
  logoutButtonText: {
    color: "#fff",
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    fontWeight: "500",
    letterSpacing: 0.25,
    lineHeight: SIZES.medium,
  },
});

export default styles;
