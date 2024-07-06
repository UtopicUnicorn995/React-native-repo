import { useState } from "react";
import { View, StyleSheet, FlatList, Button } from "react-native";
import { StatusBar } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((prevState) => [
      ...prevState,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currectCourseGoals) => {
      return currectCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
        <StatusBar animated={true} style="light" />
        <View style={styles.appContainer}>
          <Button
            title="Add New Goal"
            color="#5e0acc"
            onPress={startAddGoalHandler}
          />
          {modalIsVisible && (
            <GoalInput
              onAddGoal={addGoalHandler}
              onCancel={endAddGoalHandler}
              visible={modalIsVisible}
            />
          )}
          <View style={styles.goalsContainer}>
            <FlatList
              data={courseGoals}
              renderItem={(itemData) => {
                console.log(courseGoals);
                return (
                  <GoalItem
                    text={itemData.item.text}
                    id={itemData.item.id}
                    onDeleteItem={deleteGoalHandler}
                  />
                );
              }}
              keyExtractor={(item, index) => {
                return item.id;
              }}
              alwaysBounceVertical={false}
            />
          </View>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
