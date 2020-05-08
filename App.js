import React from 'react';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from "./reducers";
import middleware from "./middleware";

import { StyleSheet, Text, Button, View, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DeckListScreen from './components/DeckListScreen'
import SelectedDeckScreen from './components/SelectedDeckScreen'
import AddCardScreen from './components/AddCardScreen'
import AnswerQuizScreen from './components/AnswerQuizScreen'
import AddDeckScreen from './components/AddDeckScreen'
import styles from './styles'
import {setLocalNotification} from './notification'

const store = createStore(reducer, middleware);
const Stack = createStackNavigator();

class App extends React.Component{

  componentDidMount() {
    console.log('componentDidMount()')
    setLocalNotification()
  }

  getNavigationContainer = ()=>{

    console.log('getNavigationContainer()')

    return (
      
       <NavigationContainer >
          <Stack.Navigator initialRouteName="DeckList">
            <Stack.Screen name="DeckList" component={DeckListScreen} />
            <Stack.Screen name="SelectedDeck" component={SelectedDeckScreen} />
            <Stack.Screen name="AddDeck" component={AddDeckScreen} />
            <Stack.Screen name="AddCard" component={AddCardScreen} />
            <Stack.Screen name="AnswerQuiz" component={AnswerQuizScreen} />
          </Stack.Navigator>
       </NavigationContainer>
       
  
      );
  }

  render(){
    console.log('app start')
    return (
      <Provider store={store}>
          {this.getNavigationContainer()}
      </Provider>
    );
  }
}


export default App;