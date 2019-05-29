import React from "react";

import ModeSelectorContainer from "../../components/ModeSelector/ModeSelectorContainer";

export default class ModeSelectionScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return <ModeSelectorContainer {...this.props} />;
  }
}
