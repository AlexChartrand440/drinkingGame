import { connect } from "react-redux";
import {
  addCard,
  decrementCurrentCard,
  incrementCurrentCard
} from "../../../redux/actions/game";
import Cards from "./CardsClique";
import { getCards, getCurrentCardIndex } from "../../../redux/reducers/game";

const mapStateToProps = state => {
  return {
    cards: getCards(state),
    currentCardIndex: getCurrentCardIndex(state)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onReachEnd: cards => {
      dispatch(
        addCard({
          key: "" + cards.length,
          text: "" + cards.length
        })
      );
    },
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
