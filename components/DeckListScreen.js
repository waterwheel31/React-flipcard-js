import React from 'react'
import { StyleSheet, Text, Button, View, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions'

class DeckListScreen extends React.Component{

    state = {
        decks : [
            {
                "id": 0,
                "name": "deck1",
            },
            {
                "id": 1,
                "name": "deck2",
            },
            {
                "id": 2,
                "name": "deck3",
            }
          ] ,
        initialized: false
    }


    initialzeDeckList(){
        this.props.handleInitialData()
        //console.log('props:', this.props)
    }

    getDeckList(){

        //const decks = this.state.decks
        let decks = []
        if (this.props.decks !== null || this.props.decks !== undefined){
            decks = Object.values(this.props.decks)
        }

        const navigation = this.props.navigation

        console.log('getDeckList()')

        return (
            decks.map((deck)=>(
                <TouchableOpacity
                onPress = {()=> navigation.navigate('SelectedDeck',{
                    deckId:deck.id
                })}
                >
                    <Text>
                    {deck.name}
                    </Text>
                </TouchableOpacity>
                ))
        )
    }
    
    render(){

        const decks = this.state.decks
      
        //console.log('Deck List Screen, props:', this.props)
        const navigation = this.props.navigation

        if (this.props.initialized === undefined || this.props.initialized === null ){
            return(
                <View>
                    <Text> decks is not loaded yet. Initializing...</Text> 
                    {this.initialzeDeckList()}
                </View>
            )
        
        } else {
                return (
                <View>
                    <Text>Deck List</Text>
                    {this.getDeckList()}

                    <Button
                        title="Add a Deck"
                        onPress={() => navigation.push('AddDeck')}
                    />

                </View>
                );
        }
    }
}


const mapStateToProps = (state) => {
    return {
        decks: state.decks,  
        initialized: state.initialized
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleInitialData: () => dispatch(handleInitialData())
    }
 }
 
export default connect(mapStateToProps, mapDispatchToProps)(DeckListScreen)
 