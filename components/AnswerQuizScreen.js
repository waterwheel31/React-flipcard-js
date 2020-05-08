import React from 'react'
import { StyleSheet, Text, Button, View, Card, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux'
import styles from '../styles'


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
                <Text style={styles.header}> Result </Text>
                <Text> Question Answered: {this.state.numAnswered} </Text>
                <Text> Question Correct: {this.state.numCorrect} </Text>
                <Text> Correct ratio: {this.state.numCorrect / this.state.numAnswered * 100 } %</Text>
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
        const key = Object.keys(card)[0]
        
        const question = card[key].question
        const answer = card[key].answer

        const deckId = this.props.route.params.deckId
        const numCard = this.props.decks[deckId].numCard

        return (
            <View>
                
                <Text style = {styles.header} > 
                    Question: {this.state.questionNo + 1}
                 </Text>
                 <Text style={{textAlign:'right'}}>Remaining: {numCard - this.state.questionNo}  </Text>

            
                {this.state.side === 'question'
                    ? 
                    <View> 
                      <Text  style={styles.card}> {question} </Text> 
                      <Button
                            title="Show the Answer"
                            onPress={this.flip}
                       />
                    </View>
                    : 
                    <View>
                         <Text  style={styles.card}> {answer} </Text>
                         <Button
                            title="Back to Question"
                            onPress={this.flip}
                       />
                    </View>
                }
                     

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
                <View style={styles.container}>
                    <Text>There is no card on this deck. Please add cards before answering the quiz</Text>
                    <Button
                        title="Go To Deck List"
                        onPress={() => navigation.push('DeckList')}
                    />
                </View>
                
            )
        } else{
            return(
                <View style={styles.container}>
                    <View>
                    {this.state.questionNo >= numCard  
                        ? this.showResult()
                        : this.showCard(cards)
                    }
                    </View>
                    <View>
                        <Button
                            title="Go To Deck List"
                            onPress={() => navigation.push('DeckList')}
                        />
                    </View>
                    
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
  
