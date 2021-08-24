import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { WebView } from "react-native-webview";

export default function ArticleScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello!!!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
});
