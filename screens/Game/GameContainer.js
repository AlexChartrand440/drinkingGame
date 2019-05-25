import { connect } from "react-redux";
import Game from "./Game";

import { hasPlayer } from "../../redux/reducers/players";

const mapStateToProps = (state, ownProps) => {
  return {
    hasPlayer: hasPlayer(state)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default GameContainer;
