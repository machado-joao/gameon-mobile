import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: SIZES.small,
    fontFamily: FONT.regular,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: SIZES.medium,
    shadowColor: COLORS.white,
    ...SHADOWS.medium,
  },
  imageContainer: {
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    height: 150,
    justifyContent: "center",
    width: 150,
  },
  image: {
    borderRadius: SIZES.medium,
    height: "95%",
    width: "95%",
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-start",
    marginHorizontal: SIZES.medium,
  },
  productName: {
    color: COLORS.blue,
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
  },
  discountContainer: {
    alignSelf: "flex-start",
    backgroundColor: COLORS.darkBlue,
    borderRadius: SIZES.xxSmall,
    marginTop: SIZES.xSmall,
    padding: SIZES.xxSmall,
  },
  discountText: {
    color: "#fff",
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    fontWeight: "500",
  },
  price: {
    color: COLORS.black,
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    fontWeight: "500",
    marginBottom: SIZES.xSmall,
    marginTop: SIZES.medium,
  },
  platformsContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 2,
  },
});

export default styles;
