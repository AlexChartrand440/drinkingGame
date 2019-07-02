import { StyleSheet } from "react-native";
import Colors from "./Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor
  },
  headerContainer: {
    padding: 40,
    backgroundColor: Colors.primaryColor
  },
  headerText: {
    alignSelf: "center",
    fontWeight: "900",
    textAlign: "center",
    color: Colors.primaryTextColor
  },
  contentContainer: {
    backgroundColor: Colors.primaryColor
  }
});
