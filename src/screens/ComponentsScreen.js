import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function ComponentsScreen() {
  const name = "minion";
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with mee!!</Text>
      <Text style={styles.subHeaderStyle}>{name} will guide you</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});
