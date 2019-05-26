import { connect } from "react-redux";
import Game from "./Game";

import { hasPlayer } from "../../redux/reducers/players";
import { getGamemode } from "../../redux/reducers/game";
const mapStateToProps = (state, ownProps) => {
  return {
    hasPlayer: hasPlayer(state),
    gamemode: getGamemode(state)
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
