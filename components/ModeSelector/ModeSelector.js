import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Styles from "../../constants/Styles";
import GameModes from "../../ressources/gameModes";
import Colors from "../../constants/Colors";
import { Icon } from "expo";

export default class ModeSelector extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { onSelectGamemode } = this.props;
    return (
      <View style={Styles.container}>
        <View style={Styles.headerContainer}>
          <Text style={{ ...Styles.headerText, fontSize: 45 }}>
            Mode de jeu
          </Text>
        </View>
        <ScrollView contentContainerStyle={styles.gameModesContentContainer}>
          {GameModes.map(mode => {
            return (
              <TouchableOpacity
                key={mode.id}
                style={styles.gameModeContainer}
                onPress={() => {
                  onSelectGamemode(mode.id);
                }}
              >
                <>
                  <View style={styles.gameModeIcon}>
                    <Icon.Ionicons
                      name={mode.icon ? mode.icon : "md-help"}
                      size={30}
                      color={Colors.secondaryTextColor}
                      alt="Add player Icon"
                    />
                  </View>
                  <View style={styles.gameModeTexts}>
                    <Text style={styles.gameModeNameText}>{mode.name}</Text>
                    <Text style={styles.gameModeDescText}>
                      {mode.description}
                    </Text>
                  </View>
                </>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gameModesContentContainer: {
    alignItems: "center",
    flexGrow: 1
  },
  gameModeContainer: {
    alignSelf: "stretch",
    borderRadius: 2,
    backgroundColor: Colors.secondaryColor,
    padding: 7,
    margin: 2,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1
  },
  gameModeIcon: {
    alignSelf: "center",
    padding: 15,
    borderRightWidth: 1,
    borderRightColor: Colors.secondaryTextColor,
    marginRight: 10
  },
  gameModeTexts: {
    flex: 1,
    flexWrap: "wrap"
  },
  gameModeNameText: {
    fontSize: 20,
    color: Colors.secondaryTextColor,
    alignSelf: "stretch"
  },
  gameModeDescText: {
    fontSize: 14,
    color: Colors.secondaryTextColor
  }
});
