import { connect } from "react-redux";
import { deleteEffect } from "../../../redux/actions/game";
import Effects from "./Effects";
import { getEffects } from "../../../redux/reducers/game";

const mapStateToProps = state => {
  return {
    effects: getEffects(state)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onDeleteEffect: index => {
      dispatch(deleteEffect(index));
    }
  };
};

const EffectsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Effects);

export default EffectsContainer;
