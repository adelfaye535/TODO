import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList, StyleSheet,Image } from 'react-native';
import TodoItem from './components/TodoItem';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo) {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo(''); // Clear the input field after adding a task
    }
  };

  const deleteTodo = (taskId) => {
    const updatedTodos = todos.filter((item) => item.id !== taskId);
    setTodos(updatedTodos);
  };

  const updateTodo = (taskId, newText) => {
    const updatedTodos = todos.map((item) => {
      if (item.id === taskId) {
        return { ...item, text: newText };
      }
      return item;
    });
    setTodos(updatedTodos);
  };

  return (
    <View style={styles.container}>
        
        <View style={styles.imageRow}>
        <Image
         source={require('./assets/todoLogo.png')}  // Replace with your first image
          style={styles.rowImage}
        />
        <Image
          source={require('./assets/reactLogo.png')} // Replace with your second image
          style={styles.rowImage}
        />
      </View>
   
      <Text style={styles.header}>MIT EL106 Simple Todo App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task"
          value={newTodo}
          onChangeText={(text) => setNewTodo(text)}
        />
        <Button title="Add Task" onPress={addTodo} />
      </View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem text={item.text} onDelete={() => deleteTodo(item.id)} onUpdate={(newText) => updateTodo(item.id, newText)} />

        )}
      />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Noel Moreno MIT2A</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
    marginTop:30
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginRight: 16,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 4,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  logo: {
    width: 100, // Adjust the width and height according to your logo's size
    height: 100,
    marginBottom: 20,
  },

  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  rowImage: {
    width: 100, // Adjust the width and height according to your image's size
    height: 100,
  },

  footer: {
    backgroundColor: 'gray', // Background color for the footer
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff', // Text color for the footer
    fontSize: 14,
  },

});

export default App;
