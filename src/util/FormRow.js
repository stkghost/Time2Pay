import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions} from 'react-native';

const {width: WIDTH } = Dimensions.get('window')

export default function FormRow() {
  return (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholderTextColor={'#fff'}
        /> 
    </View>
  );
}
const styles = StyleSheet.create({
    input: {
        color: 'black',
        fontSize: 12,
        backgroundColor: '#8b00dd',
        width: WIDTH - 75,
        height: 40,
        borderRadius: 9, 
        margin: 15,
        paddingLeft: 10,
    }
})