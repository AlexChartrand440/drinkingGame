import React from "react";

import { Button, View, Text, StyleSheet } from "react-native";
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
      <View style={Styles.container}>
        <View style={Styles.headerContainer}>
          <Text style={Styles.headerText}>Selection des joueurs : </Text>
        </View>
        <ScrollView
          ref={ref => (this.scrollView = ref)}
          style={Styles.container}
          contentContainerStyle={styles.playersContainerContent}
          onContentSizeChange={() => {
            this.scrollView.scrollToEnd({ animated: true });
          }}
        >
          {players.map((user, index) => (
            <View key={index}>
              <View style={styles.playerContainer}>
                <TextInput
                  key={index + ".textInput"}
                  style={styles.playerNameInput}
                  value={user.name}
                  onChange={event =>
                    onChangeSetPlayerName(index, event.nativeEvent.text)
                  }
                />
                <Icon.Ionicons
                  key={index + ".rmIcon"}
                  name={"md-remove-circle-outline"}
                  style={styles.playerDeleteIcon}
                  size={35}
                  color="black"
                  onPress={() => onClickDeletePlayer(index)}
                  alt="Delete player Icon"
                />
              </View>
              <View>
                {user.errors &&
                  user.errors.map((err, index) => (
                    <Text style={styles.errorText} key={index}>
                      {err}
                    </Text>
                  ))}
              </View>
            </View>
          ))}
          <Icon.Ionicons
            style={styles.addNewPlayer}
            name={"md-add-circle-outline"}
            size={40}
            color="black"
            onPress={() => onClickAddPlayer()}
            alt="Add player Icon"
          />
        </ScrollView>
        {isPlayerListCorrect && gameMode && (
          <Button
            onPress={() => onResumeGame()}
            title="Reprendre la partie"
            color={Colors.warningBackground}
            accessibilityLabel="Reprendre la partie"
          />
        )}
        {isPlayerListCorrect && (
          <Button
            onPress={() => onGoToModeSelection()}
            title="Selectionner un mode de jeu"
            color={Colors.tabIconSelected}
            accessibilityLabel="Selectionner un mode de jeu"
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  playersContainerContent: {
    alignItems: "center"
  },
  playerContainer: {
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20
  },
  playerNameInput: {
    textAlign: "center",
    height: 40,
    width: 200,
    fontSize: 23,
    borderBottomWidth: 1,
    marginRight: 12,
    paddingBottom: 3
  },
  errorText: {
    textAlign: "center",
    height: 40,
    width: 240,
    fontSize: 16,
    marginRight: 12,
    color: "red"
  },
  playerDeleteIcon: {
    alignSelf: "center"
  }
});
