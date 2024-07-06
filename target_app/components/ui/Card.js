import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}


const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 18,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, //Android specific
    shadowColor: "black", //IOS specific for box shadow
    shadowOffset: { width: 0, height: 2 }, //IOS specific for box shadow
    shadowRadius: 6, //IOS specific for box shadow
    shadowOpacity: 0.25,
  },
});
