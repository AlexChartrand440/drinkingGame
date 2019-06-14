import React, { PureComponent } from "react";

import { View, Text, StyleSheet, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");
var deviceWidth = width > height ? width : height;

export default class ModeSelector extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { cards, onReachEnd } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.flatlist}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          data={[...cards]}
          getItemLayout={(data, index) => ({
            length: deviceWidth,
            offset: deviceWidth * index,
            index
          })}
          renderItem={({ item }) => {
            return <Card text={item.text} />;
          }}
          centerContent={true}
          initialScrollIndex={cards.length - 2}
          initialNumToRender={3}
          onMomentumScrollBegin={() => {
            this.onEndReachedCalledDuringMomentum = false;
          }}
          onEndReached={() => {
            if (!this.onEndReachedCalledDuringMomentum) {
              onReachEnd(cards);
              this.onEndReachedCalledDuringMomentum = true;
            }
          }}
          onEndReachedThreshold={0.05}
        />
      </View>
    );
  }
}

class Card extends PureComponent {
  render() {
    return (
      <View style={styles.firstView}>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "blue"
  },
  flatlist: {
    width: "100%",
    backgroundColor: "green"
  },
  firstView: {
    width: deviceWidth,
    backgroundColor: "#F44336",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  }
});
