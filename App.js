import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Register from './Register'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ViewUser from './ViewUser';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        {/* <Stack.Navigator initialRouteName='Register'>
          <Stack.Screen name="Register" component={Register}/>
          <Stack.Screen name="View" component={ViewUser}/>
        </Stack.Navigator> */}
        <Tab.Navigator>
          <Tab.Screen name="Register" component={Register} />
          <Tab.Screen name="View" component={ViewUser} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

export default App
