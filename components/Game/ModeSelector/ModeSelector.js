import React from "react";

import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Styles from "../../../constants/Styles";
import GameModes from "../../../ressources/gameModes";

export default class ModeSelector extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View>
        <View style={Styles.headerContainer}>
          <Text style={Styles.headerText}>Choississez votre mode de jeu :</Text>
        </View>
        <ScrollView>
          {GameModes.map(mode => {
            return (
              <View key={mode.id}>
                <Text>{mode.name}</Text>
                <Text>{mode.description}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
