import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  welcomeMessage: {
    color: COLORS.blue,
    fontFamily: FONT.regular,
    fontSize: SIZES.xLarge,
    margin: SIZES.small,
  },
  searchContainer: {
    alignItems: "center",
    flexDirection: "row",
    height: SIZES.xLarge * 2,
    justifyContent: "center",
    margin: SIZES.small,
    marginTop: SIZES.medium,
  },
  searchWrapper: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: SIZES.medium,
    flex: 1,
    height: "100%",
    justifyContent: "center",
    marginRight: SIZES.small,
  },
  searchInput: {
    color: COLORS.black,
    fontFamily: FONT.regular,
    height: "100%",
    paddingHorizontal: SIZES.medium,
    width: "100%",
  },
  searchButton: {
    alignItems: "center",
    backgroundColor: COLORS.lightBlue,
    borderRadius: SIZES.medium,
    height: "100%",
    justifyContent: "center",
    width: SIZES.xLarge * 2,
  },
  searchButtonImage: {
    height: "50%",
    tintColor: "#fff",
    width: "50%",
  },
  tabsContainer: {
    margin: SIZES.small,
    marginTop: SIZES.xSmall,
    width: "100%",
  },
  tab: (activePlatform, item) => ({
    borderColor: activePlatform === item ? COLORS.lightBlue : COLORS.gray,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    paddingHorizontal: SIZES.small,
    paddingVertical: SIZES.small / 2,
  }),
  tabText: (activePlatform, item) => ({
    color: activePlatform === item ? COLORS.lightBlue : COLORS.gray,
    fontFamily: FONT.regular,
  }),
});

export default styles;
