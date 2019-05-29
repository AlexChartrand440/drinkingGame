import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

import PlayerSelectionScreen from "../screens/PlayerSelection/PlayerSelectionScreen";
import ModeSelectionScreen from "../screens/ModeSelection/ModeSelectionScreen";
import GameScreen from "../screens/Game/GameScreen";

export default createAppContainer(
  createStackNavigator(
    {
      PlayerSelection: PlayerSelectionScreen,
      ModeSelection: ModeSelectionScreen,
      Game: GameScreen
    },
    {
      initialRouteName: "PlayerSelection"
    }
  )
);
