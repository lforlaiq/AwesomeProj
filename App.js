import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    StatusBar} from 'react-native';

import Routes from './src/Routes';

import Login from './src/pages/Login';
import Register from './src/pages/Register';


export default class App extends Component {
    render() {
        return (
         <View style={styles.container}>
           <StatusBar
               backgroundColor="#935b34"
               barStyle="light-content"
           />
           <Register/>
           <Login/>
           <Routes/>
         </View>
       );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#734EA9",
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'flex-end'
    }

});

