import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
}
    from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';


export default class Register extends Component {
    goBack() {
        Actions.pop();
    }

    render() {
        return(
            <View>
                <Logo/>
                <Form type="Register"/>
                <View style={styles.registerTextCont}>
                    <Text style={styles.registerText}> Already have an account?</Text>
                    <TouchableOpacity onPress={this.goBack}>
                        <Text style={styles.registerButton}>Sign in</Text>
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
    registerButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    }

});
