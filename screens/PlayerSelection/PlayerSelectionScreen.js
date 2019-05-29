import React from "react";

import PlayerSelectorContainer from "../../components/PlayerSelector/PlayerSelectorContainer";

export default class PlayerSelectionScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return <PlayerSelectorContainer {...this.props} />;
  }
}
