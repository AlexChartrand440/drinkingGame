import React from "react";

import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Styles from "../../../constants/Styles";
import Colors from "../../../constants/Colors";
import GameModes from "../../../ressources/gameModes";

export default class ModeSelector extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { onSelectGamemode } = this.props;
    return (
      <View style={Styles.container}>
        <View style={Styles.headerContainer}>
          <Text style={Styles.headerText}>Choississez votre mode de jeu :</Text>
        </View>
        <ScrollView contentContainerStyle={styles.gameModesContentContainer}>
          {GameModes.map(mode => {
            return (
              <TouchableHighlight
                key={mode.id}
                style={styles.gameModeContainer}
                underlayColor="white"
                onPress={() => {
                  onSelectGamemode(mode.id);
                }}
              >
                <>
                  <Text style={styles.gameModeNameText}>{mode.name}</Text>
                  <Text style={styles.gameModeDescText}>
                    {mode.description}
                  </Text>
                </>
              </TouchableHighlight>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gameModesContentContainer: {
    alignItems: "center"
  },
  gameModeContainer: {
    width: 300,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#dfe6e9",
    borderRadius: 8,
    backgroundColor: "#dfe6e9",
    padding: 7
  },
  gameModeNameText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  gameModeDescText: {
    fontSize: 14,
    color: "grey"
  }
});
