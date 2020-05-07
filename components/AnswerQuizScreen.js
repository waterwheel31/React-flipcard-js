import React from 'react'
import { StyleSheet, Text, Button, View, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux'


class AnswerQuizScreen extends React.Component{

    state = {
        questionNo: 0,
        numCorrect: 0,
        numAnswered: 0,
        side: 'question'
    }


    flip = ()=>{
        console.log('fiip')
        if (this.state.side ==='question'){
            this.setState(()=>({
                side: 'answer'
            }))
           
        } else {
            this.setState(()=>({
                side: 'question'
            }))
        }
    }

    showResult = ()=>{
        return (
            <View>
                <Text> Result </Text>
                <Text> Question Answered: {this.state.numAnswered} </Text>
                <Text> Question Correct: {this.state.numCorrect} </Text>
                <Text> Correct%: {this.state.numCorrect / this.state.numAnswered} </Text>
            </View>
        )
    }

    btnCorrect = ()=>{
        console.log('Correct !')
        this.setState(()=>({
            questionNo: this.state.questionNo + 1,
            numCorrect: this.state.numCorrect + 1, 
            numAnswered: this.state.numAnswered + 1,
            side: 'question'
        }))

    }

    btnWrong = ()=>{
        console.log('Wrong')
        this.setState(()=>({
            questionNo: this.state.questionNo + 1,
            numAnswered: this.state.numAnswered + 1,
            side: 'question'
        }))

    }

    showCard = (cards)=>{

        const card = cards[this.state.questionNo]
        console.log('card:', card)
        const question = card.question
        const answer = card.answer

        console.log('question:', question, 'answer:', answer)



        return (
            <View>
                <Text> card </Text>
                
                <Text> Question: {this.state.questionNo + 1} </Text>

                {this.state.side === 'question'
                    ? <Text> {question} </Text> 
                    : <Text> {answer}</Text>
                }

                <Button
                        title="Flip the Card"
                        onPress={this.flip}
                />

                <Button
                        title="Correct"
                        onPress={this.btnCorrect}
                />

                <Button
                        title="Wrong"
                        onPress={this.btnWrong}
                />


            </View>
        )
    }


    render(){

    
        const navigation = this.props.navigation
        const deckId = this.props.route.params.deckId
        const numCard = this.props.decks[deckId].numCard

        let cards = []
        
        if (numCard > 0){
            cards = Object.values(this.props.decks[deckId].cards)
        }

        console.log('number of cards:', numCard)
        console.log('cards:', cards)

        if (numCard === undefined){
            return (
                <View>
                    <Text>There is no card on this deck. Please add cards before answering the quiz</Text>
                    <Button
                        title="Go To Deck List"
                        onPress={() => navigation.push('DeckList')}
                    />
                </View>
                
            )
        } else{
            return(
                <View>
                    <Text>Quiz</Text>
                    <Text>Deck Number: {deckId}</Text>
                    
                    {this.state.questionNo >= numCard  
                        ? this.showResult()
                        : this.showCard(cards)
                    }

                    <Button
                        title="Go To Deck List"
                        onPress={() => navigation.push('DeckList')}
                    />
                </View>
                
            )
        }

        
    }
}


const mapStateToProps = (state) => {
    return {
        decks: state.decks,  
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
    
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(AnswerQuizScreen)
  
