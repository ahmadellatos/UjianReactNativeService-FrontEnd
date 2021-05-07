import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput , ScrollView, Button, TouchableOpacity} from 'react-native'
import axios from 'axios'


export default class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            email:'',
            phone:'',
            address:''
        }
    }

    addUser = () => {
        axios.post('http://192.168.100.3:8080/register/adduser', this.state)
            .then((response) => {
                // handle success
                console.log((response.data));
                alert(response.data)
                // this.props.navigation.push('Register')
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> Username </Text>
                <TextInput placeholder="Username" onChangeText={(text) => this.setState({username:text})}></TextInput>
                <Text> Email </Text>
                <TextInput placeholder="Email" onChangeText={(text) => this.setState({email:text})}></TextInput>
                <Text> Phone Number </Text>
                <TextInput placeholder="Phone Number" onChangeText={(text) => this.setState({phone:text})}></TextInput>
                <Text> Address </Text>
                <TextInput placeholder="Address" onChangeText={(text) => this.setState({address:text})}></TextInput>
                <TouchableOpacity style={styles.button} onPress={this.addUser.bind(this)}><Text>Submit</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        margin:10
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        borderRadius:50
    },
    containerbtn:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between'
    }
})
