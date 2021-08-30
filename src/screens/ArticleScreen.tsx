import React from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity, Text } from "react-native";
import { WebView } from "react-native-webview";
import { useDispatch } from "react-redux";

// import { StackNavigationProp } from "@react-navigation/stack";
// import { RootStackParamList } from "../types/navigation";
// import { RouteProp } from "@react-navigation/native";

// type Props = {
//   navigation: StackNavigationProp<RootStackParamList, "Article">;
//   route: RouteProp<RootStackParamList, "Article">;
// };

export const ArticleScreen = ({ route }: any) => {
  const { article } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => alert("ff")}>
        <Text>ADD_CLIP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert("ff")}>
        <Text>DELETE_LIP</Text>
      </TouchableOpacity>
      <WebView source={{ uri: article.url }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
});
