import React from "react";

import { View, Text, StyleSheet } from "react-native";
import { Icon } from "expo";
import ModeSelectorContainer from "../../components/Game/ModeSelector/ModeSelectorContainer";
import Cards from "../../components/Game/Cards/Cards";

export default class Game extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { hasPlayer, gamemode } = this.props;
    if (hasPlayer) {
      if (!gamemode) {
        return <ModeSelectorContainer />;
      } else {
        //TODO : Composant de gestion du jeu
        return <Cards />;
      }
    } else {
      //TODO : Component de warning ?
      return (
        <View style={styles.errorContainer}>
          <Icon.Ionicons
            name={"md-alert"}
            size={80}
            color="orange"
            alt="Alert"
          />
          <Text style={styles.errorText}>
            Vous devez selectionner des joueurs pour pouvoir jouer.
          </Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  errorText: {
    textAlign: "center",
    fontSize: 28
  }
});
