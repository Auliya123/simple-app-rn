import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export default function ImageDetail(props) {
  console.log(`props`, props);
  return (
    <View>
      <Image source={props.imageSource} />
      <Text>
        {props.title} - {props.score}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
