import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default function ListScreen() {
  const friends = [
    { name: "Friend #1", key: "1", age: "10" },
    { name: "Friend #2", key: "2", age: "10" },
    { name: "Friend #3", key: "3", age: "10" },
    { name: "Friend #4", key: "4", age: "10" },
    { name: "Friend #5", key: "5", age: "10" },
    { name: "Friend #6", key: "6", age: "10" },
    { name: "Friend #7", key: "7", age: "10" },
    { name: "Friend #8", key: "8", age: "10" },
    { name: "Friend #9", key: "9", age: "10" },
  ];

  return (
    <FlatList
      //   horizontal //scroll horizontal
      //   showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.key}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50, //space above and bellow
  },
});
