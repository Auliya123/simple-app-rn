import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ImageDetail from "../components/ImageDetail";

export default function ImageScreen() {
  return (
    <View>
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        score={9}
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        score={7}
      />
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        score={4}
      />
    </View>
  );
}

const styles = StyleSheet.create({});