import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import PlayerSelectionContainer from "../screens/PlayerSelection/PlayerSelectionContainer";

const PlayerSelectionStack = createStackNavigator({ PlayerSelectionContainer });

PlayerSelectionStack.navigationOptions = {
  tabBarLabel: "Players",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-people" : "md-people"}
    />
  )
};

export default createBottomTabNavigator({
  PlayerSelectionStack
});
