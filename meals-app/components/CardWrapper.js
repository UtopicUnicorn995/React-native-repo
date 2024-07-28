import { Platform, View, StyleSheet } from "react-native";

export default function CardWrapper({ children, style }) {
  return <View style={[styles.cardWrapper, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
});
