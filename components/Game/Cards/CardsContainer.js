import { connect } from "react-redux";
import {
  addCard,
  decrementCurrentCard,
  incrementCurrentCard
} from "../../../redux/actions/game";
import Cards from "./CardsClique";
import {
  getCards,
  getCurrentCardIndex,
  isEndCardSelected
} from "../../../redux/reducers/game";

const mapStateToProps = state => {
  return {
    cards: getCards(state),
    currentCardIndex: getCurrentCardIndex(state),
    isEndCardSelected: isEndCardSelected(state)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onPressBack: () => {
      dispatch(decrementCurrentCard());
    },
    onPressNextCard: () => {
      dispatch(incrementCurrentCard());
    }
  };
};

const CardsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);

export default CardsContainer;
