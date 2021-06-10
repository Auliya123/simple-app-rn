import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

export default function ColorScreen() {
  const [colors, setColors] = useState([]);
  console.log(`colors`, colors);

  return (
    <View>
      <Button
        title="add color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
}

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  //   console.log(`red`, Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});
