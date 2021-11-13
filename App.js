import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  TextInput,
} from "react-native";

import { ItemCoin } from "./components/itemCoin";
import { getCoins } from "./api/index";

export default function App() {
  const [coins, setCoins] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getCoinsData = async () => {
    const data = await getCoins();
    console.log(data);
    setCoins(data);
  };

  useEffect(() => {
    getCoinsData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style={{ backgroundColor: "#151515" }} />
      <View style={styles.header}>
        <Text style={styles.title}>Cryptonaider Coins!</Text>
        <TextInput
          style={styles.input}
          placeholder="Search.."
          placeholderTextColor="#474646"
          onChangeText={(key) => setSearchKey(key)}
        />
      </View>
      <FlatList
        refreshing={isRefreshing}
        onRefresh={async () => {
          setIsRefreshing(true);
          await getCoinsData();
          setIsRefreshing(false);
        }}
        style={styles.list}
        data={coins.filter(
          (coin) =>
            coin.name.toLowerCase().includes(searchKey.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(searchKey.toLowerCase())
        )}
        renderItem={({ item }) => {
          return <ItemCoin coin={item} />;
        }}
        showsVerticalScrollIndicator={false}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151515",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    paddingVertical: 30,
    color: "#ffffff",
    fontSize: 30,
  },
  header: {
    paddingBottom: 30,
    paddingTop: 50,
    width: "100%",
    alignItems: "center",
  },
  input: {
    width: "90%",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: "#474646",
    borderBottomWidth: 1,
    color: "#ffffff",
    fontSize: 20,
  },
  list: {
    width: "90%",
  },
});
