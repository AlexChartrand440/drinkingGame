import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import PlayerSelectionContainer from "../screens/PlayerSelection/PlayerSelectionContainer";
import GameContainer from "../screens/Game/GameContainer";

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

const GameStack = createStackNavigator({ GameContainer });

GameStack.navigationOptions = {
  tabBarLabel: "Game",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-play-circle" : "md-play-circle"}
    />
  )
};

export default createBottomTabNavigator({
  PlayerSelectionStack,
  GameStack
});
