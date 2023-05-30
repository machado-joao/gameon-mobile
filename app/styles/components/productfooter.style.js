import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    bottom: 0,
    flexDirection: "row",
    height: SIZES.xLarge * 3.5,
    justifyContent: "space-between",
    left: 0,
    padding: SIZES.small,
    position: "absolute",
    right: 0,
  },
  priceText: {
    color: COLORS.black,
    fontFamily: FONT.regular,
    fontSize: SIZES.medium + 3,
    fontWeight: "500",
  },
  addToCartButton: {
    alignItems: "center",
    backgroundColor: COLORS.lightBlue,
    borderRadius: SIZES.large,
    flex: 1,
    height: "100%",
    justifyContent: "center",
    marginLeft: SIZES.large,
  },
  addToCartText: {
    color: "#fff",
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    fontWeight: "500",
  },
});

export default styles;
