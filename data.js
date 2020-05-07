
const decks = [
    {
        "id": 0,
        "name": "deck0",
        "numCard": 0
    },
    {
        "id": 1,
        "name": "deck1",
        "numCard": 0
    },
    {
        "id": 2,
        "name": "deck2",
        "numCard": 0
    },
    {
        "id": 3,
        "name": "deck3",
        "numCard": 0
    },
    

]


function _getDecks(){
    return new Promise((res, rej)=>{
      setTimeout(()=> res({...decks}), 1000)  
    })
}

export function getInitialData(){
    return Promise.all([
        _getDecks(),
    ]).then(([decks]) => ({decks}))
}

