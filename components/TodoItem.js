import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet  } from 'react-native';

const TodoItem = ({ text, onDelete, onUpdate }) => {
    const [isEditing, setEditing] = useState(false);
    const [updatedText, setUpdatedText] = useState(text);
  
    const handleUpdate = () => {
      onUpdate(updatedText);
      setEditing(false);
    };
  
    return (
        <View style={styles.container}>
          <Text style={styles.text}>{text}</Text>
          {isEditing ? (
            <View>
              <TextInput
                value={updatedText}
                onChangeText={(text) => setUpdatedText(text)}
                style={styles.input}
              />
              <Button title="Save" onPress={handleUpdate} color="#007bff" style={styles.button} />
            </View>
          ) : (
            <View style={styles.buttonsContainer}>
              <Button title="Edit" onPress={() => setEditing(true)} color="#007bff" style={styles.button} />
              <Button title="Delete" onPress={onDelete} color="#ff3b30" style={styles.button} />
            </View>
          )}
        </View>
      );
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
    },
    text: {
      flex: 1,
      fontSize: 18,
    },
    buttonsContainer: {
      flexDirection: 'row',
    },
    button: {
      marginHorizontal: 5,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 2,
      width:200,
    },
  });



export default TodoItem;