import React from 'react';

import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

const MyComponent = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.addFormContainer}
    >
      <TextInput placeholder={'할일을 작성해주세요.'} style={styles.inputField} />
      <Pressable style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  addFormContainer: {
    flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: '#f7f8fa',
  },
  inputField: {
    flex: 1,
    height: 42,
    borderRadius: 4,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 1,
    color: '#000',
    fontSize: 15,
    textAlignVertical: 'center',
    padding: 5,
    marginRight: 25,
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 42,
    height: 42,
    borderRadius: 4,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 25,
  },
});
