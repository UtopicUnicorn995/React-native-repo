import { View, Text } from "react-native";
export default function MealDetailsScreen({ route }) {
  const catId = route.params.categoryId;

  return <Text>THis is the meal details screen</Text>;
}
