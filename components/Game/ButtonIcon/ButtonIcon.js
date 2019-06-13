import React from "react";

import { StyleSheet, TouchableHighlight } from "react-native";
import { Icon } from "expo";

class ButtonIcon extends React.Component {
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
      <TouchableHighlight style={{ ...styles.container, ...position }}>
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
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    backgroundColor: "#dfe6e9",
    position: "absolute",
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    justifyContent: "center",
    alignItems: "center"
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
