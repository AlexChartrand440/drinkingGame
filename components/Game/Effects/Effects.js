import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import { OpenEffects, ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { ScrollView } from "react-native-gesture-handler";
import { Icon } from "expo";
import { PLAYER_TAG } from "../../../constants/Game";

export default class Effects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEffectsOpen: false };
  }
  static navigationOptions = {
    header: null
  };

  render() {
    if (this.state.isEffectsOpen) {
      let { effects, onDeleteEffect } = this.props;
      let playerRegex = new RegExp(
        "\\" + PLAYER_TAG + "(.*?)" + "\\" + PLAYER_TAG,
        "g"
      );
      return (
        <>
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Effet en cours</Text>
            </View>
            {effects.length < 1 && (
              <Text>Pas d'effet actif pour le moment, revenez plus tard !</Text>
            )}
            {effects.length > 0 && (
              <ScrollView
                contentContainerStyle={styles.scrollViewContentContainerStyle}
              >
                {effects.map((effect, index) => {
                  let players = effect.text.match(playerRegex);
                  let newText = effect.text;
                  //Pour chaque joueur, on affiche de text avant le joueur
                  //puis le joueur dans un <Text> specifique pour pouvoir le mettre en gras
                  //Puis on retire ce qu'on vient d'afficher dans newText
                  //On fini par afficher le text qu'il reste
                  return (
                    <View key={index} style={styles.elemContainer}>
                      <Text style={styles.elemText}>
                        {players &&
                          players.map((elem, index) => {
                            let indexOfElem = newText.indexOf(elem);
                            let textBeforePlayer = newText.slice(
                              0,
                              indexOfElem
                            );
                            let playerName = newText
                              .slice(indexOfElem, indexOfElem + elem.length)
                              .replace(new RegExp("\\" + PLAYER_TAG, "g"), "");
                            newText = newText.substring(
                              indexOfElem + elem.length,
                              newText.length
                            );
                            return (
                              <React.Fragment key={index}>
                                {textBeforePlayer}
                                <Text style={styles.playerText}>
                                  {playerName}
                                </Text>
                              </React.Fragment>
                            );
                          })}
                        {newText}
                      </Text>
                      {effect.isUsable && (
                        <RemoveEffectButton
                          onPress={() => onDeleteEffect(index)}
                        />
                      )}
                    </View>
                  );
                })}
              </ScrollView>
            )}
          </View>
          <ButtonIcon
            icon="md-close"
            position={{ bottom: 30, right: 20, zIndex: 2 }}
            color={"black"}
            onPress={() => this.setState({ isEffectsOpen: false })}
            alt={"Fermer la fenêtre de visualisation des effets en cours"}
            size={30}
            underlayColor={"rgba(0,0,0,0.2)"}
          />
        </>
      );
    } else {
      return (
        <OpenEffects onPress={() => this.setState({ isEffectsOpen: true })} />
      );
    }
  }
}

class RemoveEffectButton extends PureComponent {
  render() {
    return (
      <Icon.Ionicons
        style={styles.removeEffectButton}
        name="md-trash"
        size={30}
        color={"red"}
        onPress={this.props.onPress}
        alt={"coucou"}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    backgroundColor: "#dfe6e9",
    position: "absolute",
    top: 30,
    left: 250,
    bottom: 30,
    right: 20,
    borderRadius: 22,
    paddingBottom: 44,
    flex: 1
  },
  titleText: {
    alignSelf: "center",
    fontSize: 26,
    fontWeight: "bold",
    color: "#4b4b4b"
  },
  titleContainer: {
    borderBottomColor: "#4b4b4b",
    borderBottomWidth: 1,
    padding: 10
  },
  elemText: {
    fontSize: 16,
    flex: 1,
    marginRight: 15
  },
  playerText: {
    fontWeight: "bold"
  },
  elemContainer: {
    marginTop: 5,
    padding: 5,
    paddingLeft: 30,
    paddingRight: 30,
    borderBottomColor: "#4b4b4b",
    borderBottomWidth: 0.2,
    flexWrap: "wrap",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  scrollViewContentContainerStyle: {
    borderBottomColor: "#4b4b4b",
    borderBottomWidth: 1,
    flexGrow: 1
  }
});
