import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

import PlayerSelectionContainer from "../screens/PlayerSelection/PlayerSelectionContainer";
import GameContainer from "../screens/Game/GameContainer";

export default createAppContainer(
  createStackNavigator(
    {
      PlayerSelection: PlayerSelectionContainer,
      Game: GameContainer
    },
    {
      initialRouteName: "PlayerSelection"
    }
  )
);
