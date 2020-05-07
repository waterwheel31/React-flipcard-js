import { GET_DECKS, ADD_DECK, REMOVE_DECK, ADD_CARD, INITIALIZED } from "../actions/index";

export default function decks(state = {}, action) {
  switch (action.type) {

    case GET_DECKS:
      return {
        ...state,
        ...action.decks,
      };


    case ADD_DECK:
      return {
        ...state,
        decks:{
          ...state.decks,
          [action.id]: {
            id: action.id,
            name: action.name,
            numCard: action.numCard,
            cards: action.cards
            }
        },
      };

    case REMOVE_DECK:
      delete state.decks[action.deckId];
      return {
        ...state,
      };

    case ADD_CARD:
      console.log('reducer, ADD_CARD')
      const deckId = action.deckId;
      const card = action.card;
      console.log('deckId:', deckId)
      console.log('card:', card)
      if (state.decks[deckId].cards.length === undefined){
        return {
          ...state,
          decks:{
            ...state.decks,
            [deckId]:{
              ...state.decks[deckId],
              numCard: state.decks[deckId].numCard + 1,
              cards: [
                {
                  [card.id]: {
                    id: card.id,
                    question: card.question,
                    answer: card.answer,
                    timeStamp: card.timeStamp
                  }
              }]
            }
          }
        }

      } else {
      return {
        ...state,
        decks:{
          ...state.decks,
          [deckId]:{
            ...state.decks[deckId],
            numCard: state.decks[deckId].numCard + 1,
            cards: [
                ...state.decks[deckId].cards.concat({
                  [card.id]: {
                    id: card.id,
                    question: card.question,
                    answer: card.answer,
                    timeStamp: card.timeStamp
                  }
              })
            ]
            
          }
        }
      }
      }
    
    
    
    case INITIALIZED:
      return {
        ...state,
        initialized: true
      }
    
    
      default:
      return state;
  }
}