import React from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import CardsContainer from "./Cards/CardsContainer";

export default class Game extends React.Component {
  static navigationOptions = {
    header: null
  };
  componentDidMount() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }

  componentWillUnmount() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  }

  render() {
    return (
      <>
        <CardsContainer {...this.props} />
      </>
    );
  }
}
