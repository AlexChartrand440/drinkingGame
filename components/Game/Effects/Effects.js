import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { OpenEffects, ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { Icon } from "expo";
import { ScrollView } from "react-native-gesture-handler";

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
      let { effects } = this.props;
      return (
        <>
          <View style={styles.container}>
            <Text style={{ ...styles.titleText }}>
              Liste des effets en cours :
            </Text>
            {effects.length < 1 && (
              <Text>Pas d'effet actif pour le moment, revenez plus tard !</Text>
            )}
            {effects.length > 0 && (
              <ScrollView>
                {effects.map((effect, index) => {
                  return <Text key={index}>{effect.text}</Text>;
                })}
              </ScrollView>
            )}
          </View>
          <ButtonIcon
            icon="md-help-buoy"
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

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    backgroundColor: "#dfe6e9",
    position: "absolute",
    padding: 10,
    paddingTop: 30,
    top: 0,
    left: 20,
    bottom: 30,
    right: 20,
    borderRadius: 22,
    alignItems: "center"
  },
  titleText: {
    fontSize: 30
  }
});
