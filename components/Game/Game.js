import React from "react";
import { ScreenOrientation } from "expo";
import CardsContainer from "./Cards/CardsContainer";

export default class Game extends React.Component {
  static navigationOptions = {
    header: null
  };
  componentDidMount() {
    ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE_RIGHT);
  }

  componentWillUnmount() {
    ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT);
  }

  render() {
    return (
      <>
        <CardsContainer {...this.props} />
      </>
    );
  }
}
