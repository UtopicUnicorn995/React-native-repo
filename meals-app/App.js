import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Categories from "./screens/Categories";
import OverviewScreen from "./screens/OverviewScreen";
import MealDetails from "./screens/MealDetailsScreen";

const Stack = createStackNavigator();

const MyTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "rgb(255, 45, 85)",
  },
};

export default function App() {
  return (
    // <SafeAreaView style={{ flex: 1,}}>
    <>
      <StatusBar style='light' />
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            cardStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="Categories"
            component={Categories}
            options={{
              title: "All Categories",
              // headerStyle: { backgroundColor: "#351401" },
              // headerTintColor: "white",
              // cardStyle: { backgroundColor: "#3f2f25" },
            }}
          />
          <Stack.Screen
            name="OverviewScreen"
            component={OverviewScreen}
            // options={({route, navigation}) => {
            //   const catId = route.params.categoryId
            //   return {
            //     title: catId
            //   }
            // }}
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
