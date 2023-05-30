import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.small,
    marginTop: SIZES.xSmall,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: SIZES.medium,
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
    marginBottom: SIZES.medium,
    marginTop: SIZES.medium,
  },
});

export default styles;
