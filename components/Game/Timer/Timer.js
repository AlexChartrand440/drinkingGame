import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { OpenTimer } from "../ButtonIcon/ButtonIcon";
import { Icon } from "expo";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isTimerOpen: false, timer: props.time, isStarted: false };
  }
  static navigationOptions = {
    header: null
  };

  _onClickStart() {
    this.setState({ isStarted: true });
    if (this.state.timer === 0) {
      this.setState({ timer: this.props.time });
    }
    this.interval = setInterval(
      () => this.setState(prevState => ({ timer: prevState.timer - 1 })),
      1000
    );
  }

  componentDidUpdate() {
    if (this.state.timer === 0) {
      clearInterval(this.interval);
      if (this.state.isStarted) {
        this.setState({ isStarted: false });
      }
    }
  }

  _onClickStop() {
    this.setState({ isStarted: false });
    clearInterval(this.interval);
  }

  _onClickRefresh() {
    this.setState({ timer: this.props.time, isStarted: false });
    clearInterval(this.interval);
  }

  _onClickClose() {
    this.setState({ isTimerOpen: false });
    clearInterval(this.interval);
  }

  render() {
    if (this.state.isTimerOpen) {
      let { timer, isStarted } = this.state;
      return (
        <View style={styles.container}>
          <Text style={{ ...styles.textContainer, ...styles.rightMargin }}>
            {Math.floor(timer / 60)
              .toString()
              .padStart(2, "0")}{" "}
            : {(timer % 60).toString().padStart(2, "0")}
          </Text>
          <TouchableHighlight style={styles.rightMargin}>
            <Icon.Ionicons
              name={isStarted ? "md-pause" : "md-play"}
              size={30}
              color={"black"}
              onPress={() => {
                isStarted ? this._onClickStop() : this._onClickStart();
              }}
            />
          </TouchableHighlight>
          <TouchableHighlight style={styles.rightMargin}>
            <Icon.Ionicons
              name={"md-refresh"}
              size={30}
              color={"black"}
              onPress={() => {
                this._onClickRefresh();
              }}
            />
          </TouchableHighlight>
          <TouchableHighlight>
            <Icon.Ionicons
              name={"md-close"}
              size={30}
              color={"black"}
              onPress={() => {
                this._onClickClose();
              }}
            />
          </TouchableHighlight>
        </View>
      );
    } else {
      return <OpenTimer onPress={() => this.setState({ isTimerOpen: true })} />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    backgroundColor: "#dfe6e9",
    position: "absolute",
    padding: 10,
    height: 44,
    bottom: 30,
    right: 70,
    flexDirection: "row",
    borderRadius: 22,
    alignItems: "center"
  },
  rightMargin: {
    marginRight: 20
  },
  textContainer: {
    fontSize: 30
  }
});
