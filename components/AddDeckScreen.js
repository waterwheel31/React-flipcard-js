import React from 'react'
import { StyleSheet, Text, Button, View, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux'
import { addDeck} from '../actions'


class AddDeckScreen extends React.Component{ 

    state = {
        deckName: "deck name",
    }

    generateId(){
        return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36)
    }

    handleChange = (e)=>{
        const text = e.nativeEvent.text
    
        this.setState(() => ({
            deckName: text
        }))
        console.log('handle change', 'deckName:', this.state.deckName)
    }

    handleSubmit = (e)=>{
        const navigation = this.props.navigation
        const id = this.generateId()

        const deck = {
            id: id,
            name: this.state.deckName,
            numCard: 0,
            cards: []
        }

        this.props.addDeck(deck)
        navigation.navigate('DeckList')
    }

    render(){

        const navigation = this.props.navigation

        return(
            <View>
                <Text>Add a Deck</Text>

                <Text>Deck Name</Text>
                <TextInput 
                    value = {this.state.deckName}
                    label="Deck Name" 
                    variant="outlined"
                    onChange = {this.handleChange}
                />
        
                <Button
                    title="Add This Deck"
                    onPress={ this.handleSubmit}
                />     
            
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        decks: state.decks,  
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addDeck: (deck) => dispatch(addDeck(deck))
    }
 }
 
export default connect(mapStateToProps, mapDispatchToProps)(AddDeckScreen)
 
 