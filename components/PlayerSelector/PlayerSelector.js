import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Icon } from "expo";
import Styles from "../../constants/Styles";
import Colors from "../../constants/Colors";

export default class PlayerSelector extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const {
      players,
      gameMode,
      onClickAddPlayer,
      onClickDeletePlayer,
      onChangeSetPlayerName,
      onResumeGame,
      onGoToModeSelection,
      arePlayersNameCorrect,
      hasPlayer
    } = this.props;

    let isPlayerListCorrect = hasPlayer && arePlayersNameCorrect;
    return (
      <View style={{ ...Styles.contentContainer, ...Styles.container }}>
        <View style={Styles.headerContainer}>
          <Text style={{ ...Styles.headerText, fontSize: 65 }}>Alcolol</Text>
        </View>
        <ScrollView
          ref={ref => (this.scrollView = ref)}
          style={styles.playersScrollBox}
          contentContainerStyle={styles.playersContainerContent}
          onContentSizeChange={() => {
            this.scrollView.scrollToEnd({ animated: true });
          }}
        >
          {players.map((user, index) => {
            let placeholder = "Joueur " + (index + 1);
            return (
              <View key={index} style={styles.playerContainer}>
                <View style={styles.playerInputContainer}>
                  <TextInput
                    style={styles.playerNameInput}
                    value={user.name}
                    onChange={event =>
                      onChangeSetPlayerName(index, event.nativeEvent.text)
                    }
                    multiline={true}
                    placeholder={placeholder}
                  />
                  <TouchableOpacity
                    style={styles.playerDeleteIcon}
                    onPress={() => onClickDeletePlayer(index)}
                    underlayColor="rgba(0,0,0,0.2)"
                  >
                    <Icon.Ionicons
                      key={index + ".rmIcon"}
                      name={"md-trash"}
                      size={30}
                      color={Colors.primaryTextColor}
                      alt="Delete player Icon"
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.playerErrorsContainer}>
                  {user.errors &&
                    user.errors.map((err, index) => (
                      <Text style={styles.errorText} key={index}>
                        {err}
                      </Text>
                    ))}
                </View>
              </View>
            );
          })}
        </ScrollView>
        <TouchableOpacity
          style={styles.addNewPlayer}
          onPress={() => onClickAddPlayer()}
        >
          <Icon.Ionicons
            name={"md-add"}
            size={30}
            color={Colors.secondaryTextColor}
            alt="Add player Icon"
          />
        </TouchableOpacity>

        <View style={styles.buttons}>
          {isPlayerListCorrect && gameMode && (
            <TouchableOpacity
              onPress={() => onResumeGame()}
              underlayColor="rgba(0,0,0,0.2)"
              style={{ marginBottom: 5, ...styles.button }}
            >
              <Text style={styles.buttonText}>Reprendre la partie</Text>
            </TouchableOpacity>
          )}
          {isPlayerListCorrect && (
            <TouchableOpacity
              onPress={() => onGoToModeSelection()}
              underlayColor="rgba(0,0,0,0.2)"
              style={styles.button}
            >
              <Text style={styles.buttonText}>Selectionner un mode de jeu</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  playersContainerContent: {
    alignItems: "center",
    flexGrow: 1,
    padding: 10
  },
  playersScrollBox: {
    flexGrow: 0,
    height: 250
  },
  playerContainer: {
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: 20
  },
  playerInputContainer: {
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "row"
  },
  playerNameInput: {
    fontSize: 20,
    width: 200,
    marginRight: 12,
    paddingBottom: 3,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.primarySeparatorColor,
    color: Colors.primaryTextColor,
    textAlign: "center"
  },
  playerDeleteIcon: {
    alignSelf: "center"
  },
  playerErrorContainer: {
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "row"
  },

  errorText: {
    textAlign: "center",
    fontSize: 14,
    marginRight: 12,
    color: Colors.errorColor,
    fontWeight: "bold"
  },

  addNewPlayer: {
    marginTop: 5,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: Colors.secondaryColor,
    padding: 10,
    width: 200,
    borderRadius: 2
  },
  buttons: {
    flex: 1,
    justifyContent: "flex-end"
  },
  button: {
    backgroundColor: Colors.secondaryColor,
    padding: 8
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.secondaryTextColor
  }
});
