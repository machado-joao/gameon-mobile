import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: SIZES.xSmall,
    flex: 1,
    marginHorizontal: SIZES.xSmall,
    marginVertical: SIZES.xSmall,
    width: "22%",
  },
  cartContainer: {
    alignItems: "center",
    flexDirection: "row",
    height: SIZES.xLarge * 2,
    marginVertical: SIZES.xSmall,
  },
  cartButton: {
    alignItems: "center",
    backgroundColor: COLORS.lightBlue,
    borderRadius: SIZES.medium,
    height: "100%",
    justifyContent: "center",
    width: SIZES.xLarge * 2,
  },
  cartButtonImage: {
    height: "50%",
    tintColor: "#fff",
    width: "50%",
  },
});

export default styles;
