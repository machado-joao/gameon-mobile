import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  container: (selectedProduct, product) => ({
    backgroundColor: selectedProduct === product._id ? COLORS.darkBlue : "#fff",
    borderRadius: SIZES.xLarge,
    marginBottom: SIZES.medium,
    padding: SIZES.xLarge,
    shadowColor: COLORS.white,
    ...SHADOWS.medium,
    width: 250,
  }),
  imageContainer: (selectedProduct, product) => ({
    alignItems: "center",
    backgroundColor: selectedProduct === product._id ? "#fff" : COLORS.white,
    borderRadius: SIZES.medium,
    height: 100,
    justifyContent: "center",
    width: 100,
  }),
  productImage: {
    borderRadius: SIZES.medium,
    height: "95%",
    width: "95%",
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  productName: (selectedProduct, product) => ({
    color: selectedProduct === product._id ? COLORS.white : COLORS.blue,
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
  }),
  infoWrapper: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: SIZES.xSmall,
  },
  publisher: {
    color: "#b3aec6",
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    marginTop: SIZES.small / 1.5,
  },
  edition: {
    color: "#b3aec6",
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
  },
});

export default styles;
