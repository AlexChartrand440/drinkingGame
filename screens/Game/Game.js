import React from "react";

import ModeSelector from "../../components/Game/ModeSelector/ModeSelector";
import { View, Text } from "react-native";

export default class Game extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { hasPlayer } = this.props;
    if (hasPlayer) {
      return <ModeSelector />;
    } else {
      return (
        <View>
          <Text>Vous devez selectionner des joueurs pour pouvoir jouer.</Text>
        </View>
      );
    }
  }
}
