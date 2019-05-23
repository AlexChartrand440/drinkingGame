import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Icon } from "expo";

export default class PlayerSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [{ name: "Jules" }]
    };
  }

  static navigationOptions = {
    header: null
  };

  onChangeUserName(value, index) {
    let newUsers = [...this.state.users];
    newUsers[index].name = value;
    this.setState({ users: newUsers });
  }

  addNewPlayer() {
    let newUsers = [...this.state.users];
    newUsers.push({});
    this.setState({ users: newUsers });
  }

  deletePlayer(index) {
    let newUsers = [...this.state.users];
    newUsers.splice(index, 1);
    this.setState({ users: newUsers });
  }

  render() {
    const {
      players,
      onClickAddPlayer,
      onClickDeletePlayer,
      onChangeSetPlayerName
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Selection des joueurs : </Text>
        </View>
        <ScrollView
          ref={ref => (this.scrollView = ref)}
          style={styles.playersContainer}
          contentContainerStyle={styles.playersContainerContent}
          onContentSizeChange={() => {
            this.scrollView.scrollToEnd({ animated: true });
          }}
        >
          {players.map((user, index) => (
            <View key={index} style={styles.playerContainer}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 70
  },
  titleText: {
    fontSize: 21,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  playersContainer: {
    flex: 1
  },
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
  playerDeleteIcon: {
    alignSelf: "center"
  }
});
