import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

export default function SquareScreen() {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  console.log(`red`, red);
  const COLOR_INCREMENT = 15;

  function setColor(color, change) {
    //color === 'red','green','blue'
    //change === +15, -15

    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return; //prevent from fall through to any other case statements or other cases that we might have inside.
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
    }
  }

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green}, ${blue})`,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
