import { connect } from "react-redux";
import {
  addPlayer,
  deletePlayer,
  setPlayerName
} from "../../redux/actions/players";
import PlayerSelection from "./PlayerSelection";
import { getPlayers } from "../../redux/reducers/players";

const mapStateToProps = (state, ownProps) => {
  return {
    players: getPlayers(state)
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
    }
  };
};

const PlayerSelectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerSelection);

export default PlayerSelectionContainer;
