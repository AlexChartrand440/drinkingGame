import { connect } from "react-redux";
import { selectGameMode } from "../../../redux/actions/game";
import ModeSelector from "./ModeSelector";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSelectGamemode: gamemodeId => {
      dispatch(selectGameMode(gamemodeId));
    }
  };
};

const ModeSelectorContainer = connect(
  null,
  mapDispatchToProps
)(ModeSelector);

export default ModeSelectorContainer;
