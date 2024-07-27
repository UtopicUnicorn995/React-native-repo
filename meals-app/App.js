import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Categories from "./screens/Categories";
import OverviewScreen from "./screens/OverviewScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    // <SafeAreaView style={{ flex: 1,}}>
    <>
      <StatusBar hidden />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="OverviewScreen" component={OverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
