import React from "react";

import Game from "../../components/Game/Game";

export default class GameScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return <Game {...this.props} />;
  }
}
