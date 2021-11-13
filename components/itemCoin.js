import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export const ItemCoin = ({ coin }) => {
  const {
    name = "",
    image = "",
    current_price = 0,
    symbol = "",
    price_change_percentage_24h = 0,
  } = coin || {};

  return (
    <View style={styles.containerItem}>
      <View style={styles.itemData}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.itemNames}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.symbol}>#{symbol}</Text>
        </View>
      </View>
      <View style={styles.itemPriceData}>
        <Text style={styles.text}>
          USD {current_price < 1000 ? current_price.toFixed(2) : current_price}
        </Text>
        <Text
          style={[
            styles.text,
            price_change_percentage_24h > 0
              ? styles.percentageUp
              : styles.percentageDown,
          ]}
        >
          {price_change_percentage_24h.toFixed(3)} %
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#474646",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 5,
    borderRadius: 10,
  },
  text: {
    color: "#ffffff",
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  itemData: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemNames: {},
  symbol: {
    color: "#7F7E7E",
    textTransform: "uppercase",
  },
  itemPriceData: {},
  percentageUp: {
    color: "#03FFA7",
    textAlign: "right",
  },
  percentageDown: {
    color: "#FF4403",
    textAlign: "right",
  },
});
