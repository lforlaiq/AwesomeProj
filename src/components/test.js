import React, { Component } from 'react';
import { StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    Platform,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView,
    TouchableNativeFeedback,
    FlatList,
    ImageBackground,
    Dimensions,
    KeyboardAvoidingView, Keyboard, SafeAreaView, StatusBar, Image}
    from 'react-native';
import bigImage from './images/oneHandStand.png'
import InputTextField from './components/inputTextField';

// const {width: WIDTH } = Dimensions.get('window')


export default class Example extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View>
                    <View style={{ marginTop: 60, alignItems: "center", justifyContent: "center"}} >
                        <View>
                            <Text> </Text>
                        </View>
                        <View >
                            <Text>  </Text>
                        </View>

                    </View>

                    <View style={{ marginTop: 48, flexDirection: "row", justifyContent: "center"}} >
                        <TouchableOpacity>
                            <View style = {styles.socialButton}>
                                <Image source={require ("./images/qlSimulcast.png")} style={styles.socialLogo}></Image>

                                <Text style={styles.text}> FaceBook</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style = {styles.socialButton}>
                                <Image source={require ("./images/qlSimulcast.png")} style={styles.socialLogo}></Image>
                                <Text> Google </Text>
                            </View>
                        </TouchableOpacity>

                    </View>



                    <Text style={[styles.text, { color: '#abb4bd', fontsize: 15, textAlign: 'center', marginVertical: 20}]}> Login Screen </Text>

                    <InputTextField title="eMail"></InputTextField>
                    <InputTextField style={{marginTop: 20, marginBottom:8, color:"#ABB4BD"}}
                                    title="password"
                                    isSecure={true}
                    >

                    </InputTextField>

                    <Text style={[styles.text, styles.link,  {textAlign: "right"}]}> Forgot Password</Text>

                    <TouchableOpacity style={styles.submitContainer}>

                        <Text style={[styles.text, { color: '#fff', fontWeight: "600", fontsize: 16}]}> Login </Text>

                    </TouchableOpacity>



                    <Text style={[styles.text, {fontSize: 14, color: "#ABB4BD", textAlign: "center", marginTop: 24}]}>
                        Dont Have An Account? <Text style={[styles.text, styles.link]}> Register Now</Text>
                    </Text>


                </View>
            </ScrollView>





        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 30
    },
    backgroundContainer:{
        flexGrow: 1,
        width: null,
        height: null,
        justifyContent:'center',
        alignItems: 'center',

    },
    text: {
        fontFamily: "Avenir Next",
        color: "red"
    },
    socialButton: {
        flexDirection: "row",
        marginHorizontal: 12,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "rgba(171, 180, 189, 0.65)",
        borderRadius: 4,
        backgroundColor: "#fff",
        shadowColor: "rgba(171, 180, 189, 0.35)",
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5
    },
    socialLogo: {
        width: 16,
        height: 16,
        marginRight: 8
    },
    link: {
        color: "#ff1654",
        fontSize: 14,
        fontWeight: "500"
    },
    submitContainer: {
        backgroundColor: "#FF1654",
        fontSize: 16,
        borderRadius:4,
        paddingVertical: 12,
        marginTop: 32,
        alignItems: "center",
        justifyContent: "center",
        shadowColor:  "rgba(255,22,84,0.24)",
        shadowOffset: {width: 0, height: 9},
        shadowOpacity: 1,
        shadowRadius: 20
    }

});

