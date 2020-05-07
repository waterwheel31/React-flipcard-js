import {getInitialData} from '../data'

export const GET_DECKS = "GET_DECKS";
export const ADD_DECK = "ADD_DECK";
export const REMOVE_DECK = "REMOVE_DECK";
export const ADD_CARD = "ADD_CARD";
export const INITIALIZED = "INITIALIZED";

function getDecksList(decks) {
  return {
    type: GET_DECKS,
    decks,
  };
}

export function addDeck(deck) {
  //console.log('action addDeck()')
  //console.log('deck:', deck)
  return {
    type: ADD_DECK,
    id: deck.id,
    name: deck.name,
    numCard: deck.numCard,
    cards: deck.cards
  };
}

export function removeDeck(deckId) {
  console.log('deck id:', deckId)
  return {
    type: REMOVE_DECK,
    deckId,
  };
}

export function addCard(deckId, card) {
  console.log('action, addCard()')
  return {
    type: ADD_CARD,
    deckId,
    card,
  };
}

export function initialized(){
  //console.log('action INITIALIZED')
  return {
    type: INITIALIZED,
  }
}

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then((decks) => {
      dispatch(getDecksList(decks));
      dispatch(initialized())
    });
  };
}