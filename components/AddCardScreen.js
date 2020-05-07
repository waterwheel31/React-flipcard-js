import React from 'react'
import { StyleSheet, Text, Button, View, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux'
import { addCard} from '../actions'

class AddCardScreen extends React.Component{

    state = {
        questionInput: "question",
        answerInput: "answer",
    }

    generateId(){
        return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36)
    }

    handleQuestionText = (e)=> {
        const text = e.nativeEvent.text
    
        this.setState(() => ({
            questionInput: text
        }))
        console.log('handle change', 'questionInput:', this.state.questionInput)
    }
  
    handleAnswerText = (e)=> {
        const text = e.nativeEvent.text
      
        this.setState(() => ({
            answerInput: text
        }))
        console.log('handle change', 'answerInput:', this.state.answerInput)
    }
  
    handleSubmit = (e)=>{
        const navigation = this.props.navigation
        const deckId = this.props.route.params.deckId
        const id = this.generateId()

        const card = {
            id: id,
            question: this.state.questionInput,
            answer: this.state.answerInput,
            timeStamp: (new Date()).getTime()
        }

        console.log('addCard. card:', card)
        this.props.addCard(deckId, card)
        navigation.navigate('DeckList')
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
                onPress={this.handleSubmit}
              />     
              
              <Button
                title="Go To Home"
                onPress={() => navigation.push('DeckList')}
              />
            </View>
          );
    }
}



const mapStateToProps = (state) => {
  return {
      decks: state.decks,  
  }
}
const mapDispatchToProps = dispatch => {
  return {
      addCard: (deckId, card) => dispatch(addCard(deckId, card))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCardScreen)
