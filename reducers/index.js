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
      delete state[action.title];
      return {
        ...state,
      };

    case ADD_CARD:
      const _title = action.title;
      const question = action.question;
      return {
        ...state,
        [_title]: {
          ...state[_title],
          questions: [...state[_title].questions].concat(question),
        },
      };
    
    case INITIALIZED:
      return {
        ...state,
        initialized: true
      }
    
    
      default:
      return state;
  }
}