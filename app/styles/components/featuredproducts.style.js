import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.small,
    marginTop: SIZES.medium,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: COLORS.blue,
    fontFamily: FONT.regular,
    fontSize: SIZES.xLarge,
  },
  headerButton: {
    color: COLORS.gray,
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
  },
  cardsContainer: {
    gap: SIZES.xSmall,
    marginTop: SIZES.medium,
  },
});

export default styles;
