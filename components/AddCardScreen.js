import React from 'react'
import { StyleSheet, Text, Button, View, TouchableOpacity, TextInput } from 'react-native';


class AddCardScreen extends React.Component{

    state = {
        questionInput: "question text",
        answerInput: "answer text"
    }

    handleQuestionText = ()=> {
    
    }
  
    handleAnswerText = ()=> {
      
    }
  

    render(){
        const navigation = this.props.navigation

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Add a Card</Text>
        
              <Text>Question</Text>
        
              <TextInput 
                  value = {this.state.questionInput}
                  onChange = {this.handleQuestionText}
              />
        
              <Text>Answer</Text>
              <TextInput 
                  value = {this.state.answerInput}
                  onChange = {this.handleAnswerText}
              />
              <Button
                title="Add This Card"
                onPress={() => navigation.push('DeckList')}
              />     
              <Button
                title="Clear"
                onPress={() => navigation.push('DeckList')}
              />
    
              <Button
                title="Go To Home"
                onPress={() => navigation.push('DeckList')}
              />
            </View>
          );
    }
}



export default AddCardScreen