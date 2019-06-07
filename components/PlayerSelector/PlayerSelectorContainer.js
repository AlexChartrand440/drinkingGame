import { connect } from "react-redux";
import {
  addPlayer,
  deletePlayer,
  setPlayerName
} from "../../redux/actions/game";
import PlayerSelector from "./PlayerSelector";
import {
  getPlayers,
  getGamemode,
  arePlayersNameCorrect,
  hasPlayer
} from "../../redux/reducers/game";

const mapStateToProps = (state, ownProps) => {
  return {
    players: getPlayers(state),
    gameMode: getGamemode(state),
    arePlayersNameCorrect: arePlayersNameCorrect(state),
    hasPlayer: hasPlayer(state)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickAddPlayer: () => {
      dispatch(addPlayer());
    },
    onClickDeletePlayer: index => {
      dispatch(deletePlayer(index));
    },
    onChangeSetPlayerName: (index, name) => {
      dispatch(setPlayerName(index, name));
    },
    onResumeGame: () => {
      ownProps.navigation.navigate("Game");
    },
    onGoToModeSelection: () => {
      ownProps.navigation.navigate("ModeSelection");
    }
  };
};

const PlayerSelectorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerSelector);

export default PlayerSelectorContainer;
