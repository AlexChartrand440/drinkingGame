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
    const { onSelectGamemode, onResume, gameMode } = this.props;
    return (
      <View style={Styles.container}>
        <View style={Styles.headerContainer}>
          <Text style={{ ...Styles.headerText, fontSize: 40 }}>
            Modes de jeu
          </Text>
        </View>
        <ScrollView contentContainerStyle={styles.gameModesContentContainer}>
          {GameModes.map(mode => {
            let selected = gameMode === mode.id;
            //TODO ; Get rid of TouchableOpacity if selected true
            return (
              <GamemodeWrapper
                selected={selected}
                key={mode.id}
                style={styles.gameModeContainer}
                onPress={
                  selected
                    ? () => {
                        return false;
                      }
                    : () => {
                        onSelectGamemode(mode.id);
                      }
                }
              >
                <View style={styles.gameModeInfos}>
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
                </View>
                {selected && (
                  <View style={styles.gameModeActions}>
                    <TouchableOpacity
                      style={{
                        ...styles.gamemodeAction,
                        borderRightColor: Colors.secondaryDarkColor,
                        borderRightWidth: 1
                      }}
                      onPress={() => onResume()}
                    >
                      <Text style={styles.gamemodeActionText}>
                        {" "}
                        Reprendre la partie{" "}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.gamemodeAction}
                      onPress={() => onSelectGamemode(mode.id)}
                    >
                      <Text style={styles.gamemodeActionText}>
                        {" "}
                        Recommencer
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </GamemodeWrapper>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const GamemodeWrapper = ({ selected, children, onPress }) => {
  if (selected) {
    return <View style={styles.gameModeContainer}>{children}</View>;
  } else {
    return (
      <TouchableOpacity style={styles.gameModeContainer} onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  gameModesContentContainer: {
    alignItems: "center",
    flexGrow: 1
  },
  gameModeContainer: {
    alignSelf: "stretch",
    borderRadius: 2,
    backgroundColor: Colors.secondaryColor,
    margin: 2,
    flexWrap: "wrap",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1
  },
  gameModeInfos: {
    flexDirection: "row",
    padding: 7,
    borderBottomColor: Colors.secondaryDarkColor,
    borderBottomWidth: 1
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
  },
  gameModeActions: {
    flexDirection: "row",
    alignItems: "center"
  },
  gamemodeAction: {
    flex: 0.5,
    alignItems: "center",
    padding: 8
  },
  gamemodeActionText: {
    color: Colors.secondaryTextColor,
    fontSize: 18
  }
});
