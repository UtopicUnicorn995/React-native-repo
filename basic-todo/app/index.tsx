import { Text, View, Button, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text>Hello world</Text>
      <Text>fb.com</Text>
      <Button title="fb.com"/>
    </View>
  );
}

const styles = StyleSheet.create({
 container:{
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
 }
})