import React from 'react'
import { StyleSheet, Text, Button, View } from 'react-native';
import { connect } from 'react-redux'
import { removeDeck} from '../actions'
import styles from '../styles'

class SelectedDeckScreen extends React.Component{


    removeDeck = (e) => {

      const navigation = this.props.navigation
      const deckId = this.props.route.params.deckId
      console.log('remove deck:', deckId)

      const waitForAction = new Promise ((res, rej)=>{
        this.props.removeDeck(deckId)
        res()
      })

      waitForAction.then(()=>{
        navigation.push('DeckList')}
      )
      
    }

    render(){

        console.log('Selected Deck Screen.  props:', this.props)
        const deckId = this.props.route.params.deckId
        const deckName = this.props.decks[deckId].name
        const numCard = this.props.decks[deckId].numCard
        const navigation = this.props.navigation
        
        console.log('deckName:', deckName)
        
        return (
            <View style={styles.container}>
            
              <Text style={styles.header}>Deck Name: {deckName}</Text>
              <Text style={styles.item}>Number of Cards: {numCard}</Text>
              
              <Button
                title="Add a Card"
                onPress={() => navigation.push('AddCard', {
                  deckId:deckId
                })}
              />
        
             
              <Button
                title="Start Quiz"
                onPress={() => navigation.push('AnswerQuiz',{
                  deckId:deckId
                })}
              />
           
        
              <Button
                title="Go To Deck List"
                onPress={() => navigation.push('DeckList')}
              />

              <Button
                title="Delete This Deck"
                onPress={this.removeDeck}
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
      removeDeck: (deckId) => dispatch(removeDeck(deckId)),
      //addCard: (deckId, card) => dispatch(addCard(deckId, card))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedDeckScreen)
