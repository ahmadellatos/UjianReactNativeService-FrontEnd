import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList, SafeAreaView, TextInput, TouchableOpacity, ScrollView,  } from 'react-native';
import axios from 'axios'
import {Picker} from '@react-native-picker/picker'


export default class ViewUser extends Component {
    constructor(props){
        super(props)
        this.state={
            data:'',
            valuePicker:'',
            valueOnChange:''
        }
    }

    componentDidMount() {
        this.getUserData()
    }

    componentDidUpdate() {
        this.getUserData()
    }

    getUserData = ()=> {
        axios.get('http://192.168.100.3:8080/register/')
            .then((response) => {
                // handle success
                console.log((response.data));
                this.setState({ data: response.data })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    searchUser = () => {
        if(this.state.valuePicker === "name") {
            this.searchUserByUsername()
        } else if (this.state.valuePicker === "email") {
            this.searchUserByEmail()
        } else if (this.state.valuePicker === "phone") {
            this.searchUserByPhone()
        } else if (this.state.valuePicker === "address") {
            this.searchUserByAddress()
        }
    }

    searchUserByUsername = () => {
        axios.get(`http://192.168.100.3:8080/register/username/${this.state.valueOnChange}`)
        .then((response) => {
            // handle success
            console.log((response.data));
            this.setState({ data: response.data })
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    }

    searchUserByEmail = () => {
        axios.get(`http://192.168.100.3:8080/register/email/${this.state.valueOnChange}`)
        .then((response) => {
            // handle success
            console.log((response.data));
            this.setState({ data: response.data })
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    }

    searchUserByPhone = () => {
        axios.get(`http://192.168.100.3:8080/register/phone/${this.state.valueOnChange}`)
        .then((response) => {
            // handle success
            console.log((response.data));
            this.setState({ data: response.data })
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    }

    searchUserByAddress = () => {
        axios.get(`http://192.168.100.3:8080/register/address/${this.state.valueOnChange}`)
        .then((response) => {
            // handle success
            console.log((response.data));
            this.setState({ data: response.data })
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    }

    renderItem=({item}) => (
        <View style={styles.textContainer}>
            <Text> Username : {item.username}</Text>
            <Text>Email : {item.email}</Text>
            <Text>Phone : {item.phone}</Text>
            <Text>Address : {item.address}</Text>
        </View>
    )

    render() {
        return (
            
            <SafeAreaView style={styles.container}>
                <Picker
                    selectedValue={"Pilih Menu"}
                    onValueChange={(itemValue, itemIndex) => {
                        this.setState({valuePicker:itemValue})
                        console.log(itemValue)
                    }
                }>
                    <Picker.Item label="Pilih Menu" enabled={false}/>
                    <Picker.Item label="Name" value="name"/>
                    <Picker.Item label="Email" value="email" />
                    <Picker.Item label="Phone" value="phone" />
                    <Picker.Item label="Address" value="address" />
                </Picker>
                <TextInput placeholder="Cari" onChangeText={(text) => {this.setState({valueOnChange:text})}}/>
                <TouchableOpacity style={styles.button} onPress={this.searchUser.bind(this)}><Text>Cari</Text></TouchableOpacity>
                <FlatList data={this.state.data} renderItem={this.renderItem} keyExtractor={(item)=>item.id}/>
            </SafeAreaView>
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
        borderRadius:50,
    },
    textContainer:{
        paddingVertical:15,
        borderBottomWidth:2,
        borderBottomColor:'#ebebeb'
    }
    
})
