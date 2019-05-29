import { connect } from "react-redux";
import { selectGameMode, addCard } from "../../redux/actions/game";
import ModeSelector from "./ModeSelector";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSelectGamemode: gamemodeId => {
      dispatch(selectGameMode(gamemodeId));
      dispatch(addCard({ key: "0", text: "0" }));
      dispatch(addCard({ key: "1", text: "1" }));
      ownProps.navigation.navigate("Game");
    }
  };
};

const ModeSelectorContainer = connect(
  null,
  mapDispatchToProps
)(ModeSelector);

export default ModeSelectorContainer;
