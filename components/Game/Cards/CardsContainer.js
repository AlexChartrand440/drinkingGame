import { connect } from "react-redux";
import { addCard } from "../../../redux/actions/game";
import Cards from "./Cards";
import { getCards } from "../../../redux/reducers/game";

const mapStateToProps = state => {
  return {
    cards: getCards(state)
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
    }
  };
};

const CardsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);

export default CardsContainer;
