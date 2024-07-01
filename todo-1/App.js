import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Button,
  Pressable,
} from "react-native";

export default function App() {
  const [enteredTodo, setEnteredTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function todoInputHandler(enteredText) {
    setEnteredTodo(enteredText);
  }

  function addTodoHandler() {
    setTodos((prevTodo) => [
      ...prevTodo,
      {
        todo: enteredTodo,
        key: Math.random().toString(),
      },
    ]);
    setEnteredTodo("");
  }

  function deleteTodoHandler(itemKey) {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.key !== itemKey);
    });
  }

  console.log(todos);

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 10, fontSize: 20, fontWeight: "bold" }}>
        Todo app
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Todo"
          style={styles.textInput}
          onChangeText={todoInputHandler}
          value={enteredTodo}
        />
        <Pressable
          style={{ backgroundColor: "#1679AB", padding: 6 }}
          onPress={addTodoHandler}
        >
          <Text style={{ color: "#fff" }}>Add Todo</Text>
        </Pressable>
      </View>
      <FlatList
        style={{ width: "100%" }}
        renderItem={(itemData) => {
          return (
            <Pressable
              style={styles.todoItem}
              onPress={() => deleteTodoHandler(itemData.item.key)}
            >
              <Text style={styles.todoItemText}>{itemData.item.todo}</Text>
            </Pressable>
          );
        }}
        data={todos}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 60,
    paddingHorizontal: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    width: "70%",
  },
  todoItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    width: "95%",
  },
  todoItemText: {
    color: "white",
  },
});
