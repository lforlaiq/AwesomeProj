import React, { Component } from 'react';
import { StyleSheet,
    Text,
    View,
    TouchableOpacity}
    from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';


export default class Login extends Component {
    register() {
        Actions.register()
    }
    render() {
        return(
            <View style={styles.container}>
                <Logo/>
                <Form type="Login"/>
                <View style={styles.registerTextCont}>
                    <Text style={styles.registerText}> Don't have an account yet?</Text>
                    <TouchableOpacity onPress={this.register}>
                        <Text style={styles.signupButton}>Register</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#734EA9",
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    registerTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    registerText: {
        color: 'rgba(255,255,255,0.4)',
        fontSize: 16
    },
    signupButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    }

});
