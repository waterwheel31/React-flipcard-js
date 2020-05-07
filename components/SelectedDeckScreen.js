import React from 'react'
import { StyleSheet, Text, Button, View } from 'react-native';
import { connect } from 'react-redux'

class SelectedDeckScreen extends React.Component{

    render(){

       console.log('Selected Deck Screen.  props:', this.props)
        const deckId = this.props.route.params.deckId
        const deckName = this.props.decks[deckId].name
        const numCard = this.props.decks[deckId].numCard
        const navigation = this.props.navigation
        
        console.log('deckName:', deckName)
        
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Deck ID: {deckId}</Text>
              <Text>Deck Name: {deckName}</Text>
              <Text>Number of Cards: {numCard}</Text>
              
              <Button
                title="Add a Card"
                onPress={() => navigation.push('AddCard')}
              />
        
              <Button
                title="Start Quiz"
                onPress={() => navigation.push('AnswerQuiz')}
              />
        
              
              <Button
                title="Go To Deck List"
                onPress={() => navigation.push('DeckList')}
              />

              <Button
                title="Delete This Deck"
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
      //deleteDeck: (deckId) => dispatch(deleteDeck(deckId)),
      //addCard: (deckId, card) => dispatch(addCard(deckId, card))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedDeckScreen)
