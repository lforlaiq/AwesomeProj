import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity} from 'react-native';


export default class Form extends Component {
    render() {
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                           placeholder="eMail"
                           placeholderTextColor= "#ffffff"
                />
                <TextInput style={styles.inputBox}
                           placeholder="password"
                           placeholderTextColor= "#ffffff"
                           secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}> {this.props.type} </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBox: {
        width: 250,
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 5
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff'
    },
    button: {
        width: 250,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        borderRadius: 25,
        marginVertical: 10
    }
});
