import React from "react";

import { StyleSheet, TouchableOpacity } from "react-native";
import * as Icon from '@expo/vector-icons';

export class ButtonIcon extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const {
      icon,
      position,
      color,
      onPress,
      alt,
      underlayColor,
      size
    } = this.props;
    return (
      <TouchableOpacity style={{ ...styles.container, ...position }}>
        <>
          <Icon.Ionicons
            name={icon}
            size={size}
            color={color}
            onPress={() => {
              onPress();
            }}
            underlayColor={underlayColor}
            alt={alt}
          />
        </>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    backgroundColor: "#FFFFFF",
    position: "absolute",
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1
  }
});

export const RedirectToPlayerIcon = ({ onPress }) => (
  <ButtonIcon
    icon="md-person"
    position={{ top: 30, right: 20 }}
    color={"black"}
    onPress={() => onPress()}
    alt={"Modifier les joueurs de la parties"}
    size={30}
    underlayColor={"rgba(0,0,0,0.2)"}
  />
);

export const RedirectToModeSelection = ({ onPress }) => (
  <ButtonIcon
    icon="md-home"
    position={{ top: 30, right: 70 }}
    color={"black"}
    onPress={() => onPress()}
    alt={"Retourner à la selection des modes"}
    size={30}
    underlayColor={"rgba(0,0,0,0.2)"}
  />
);

export const OpenTimer = ({ onPress }) => (
  <ButtonIcon
    icon="md-timer"
    position={{ bottom: 30, right: 70 }}
    color={"black"}
    onPress={() => onPress()}
    alt={"Ouvrir le menu de minuteur"}
    size={30}
    underlayColor={"rgba(0,0,0,0.2)"}
  />
);

export const OpenEffects = ({ onPress }) => (
  <ButtonIcon
    icon="md-help-buoy"
    position={{ bottom: 30, right: 20 }}
    color={"black"}
    onPress={() => onPress()}
    alt={"Voir les effets en jeux"}
    size={30}
    underlayColor={"rgba(0,0,0,0.2)"}
  />
);
