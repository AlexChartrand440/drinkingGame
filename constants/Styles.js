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
    textAlign: "center",
    color: Colors.primaryTextColor,
    fontFamily: "mainFont"
  },
  contentContainer: {
    backgroundColor: Colors.primaryColor
  }
});
