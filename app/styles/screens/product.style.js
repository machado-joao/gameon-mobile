import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginTop: SIZES.small,
  },
  imageContainer: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: SIZES.large,
    height: 200,
    justifyContent: "center",
    width: 200,
  },
  productImage: {
    height: "95%",
    borderRadius: SIZES.medium,
    width: "95%",
  },
  productNameContainer: {
    marginTop: SIZES.small,
  },
  productName: {
    color: COLORS.blue,
    fontFamily: FONT.regular,
    fontSize: SIZES.xLarge,
    fontWeight: "500",
    textAlign: "center",
  },
  platformsContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 2,
    marginTop: SIZES.xSmall,
  },
  descriptionContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    margin: SIZES.medium,
  },
  productDescription: {
    color: COLORS.black,
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    textAlign: "justify",
  },
});

export default styles;
