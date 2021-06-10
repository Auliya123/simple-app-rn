import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Hello hello</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate("Components")}
      />
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>Go to list demo</Text>
        <Text>Go to list demo</Text>
        <Text>Go to list demo</Text>
      </TouchableOpacity>
      <Button
        title="Go to Images Demo"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Go to counter screen"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to counter reducer screen"
        onPress={() => navigation.navigate("CounterReducer")}
      />
      <Button
        title="Go to color screen"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go to square screen"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        title="Go to square screen reducer"
        onPress={() => navigation.navigate("SquareReducer")}
      />
      <Button
        title="Go to text screen"
        onPress={() => navigation.navigate("Text")}
      />
      <Button
        title="Go to box screen"
        onPress={() => navigation.navigate("Box")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
