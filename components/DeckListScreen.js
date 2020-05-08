import React, {useRef} from 'react'
import { StyleSheet, Text, Button, View, TouchableOpacity, Animated, AsyncStorage } from 'react-native';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions'
import styles from '../styles'

class DeckListScreen extends React.Component{

    state = {
        fontSize: 15
    }

    componentDidMount () {
        
      }

    initialzeDeckList(){
        this.props.handleInitialData()
        //console.log('props:', this.props)
    }

    handleClick(){
        Aminated
    }

    getDeckList(){

        
        let decks = this.props.decks
        if (this.props.decks !== null || this.props.decks !== undefined){
            decks = Object.values(this.props.decks)
        }


        const navigation = this.props.navigation
        let fontSize = this.state.fontSize

        console.log('decks:', decks)

        return (
            decks.map((deck)=>(
                
                <View style={styles.itemContainer} key={deck.id}>
                    {deck.id !== undefined 
                      ?
                        <TouchableOpacity
                        key={deck.id}
                        onPress = {()=> navigation.navigate('SelectedDeck',{
                            deckId:deck.id
                        })}
                        >
                            <Text style={{...styles.item, fontSize:fontSize}}>
                            {deck.name}   (#Cards: {deck.numCard})
                            </Text>
                        </TouchableOpacity>
                      : null
                    }
                </View>
                ))
        )
    }
    
    render(){

        const decks = this.props.decks
      
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
                <View style={styles.container}>
                    <Text style={styles.header}>Deck List</Text>
                    {this.getDeckList()}

                    <Button style={styles.button}
                        title="Add New Deck"
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
 