import { connect } from "react-redux";
import { selectGameMode } from "../../redux/actions/game";
import ModeSelector from "./ModeSelector";
import { getGamemode } from "../../redux/reducers/game";

const mapStateToProps = state => {
  return {
    gameMode: getGamemode(state)
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSelectGamemode: gamemodeId => {
      dispatch(selectGameMode(gamemodeId));
      ownProps.navigation.navigate("Game");
    },
    onResume: () => {
      ownProps.navigation.navigate("Game");
    }
  };
};

const ModeSelectorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModeSelector);

export default ModeSelectorContainer;
