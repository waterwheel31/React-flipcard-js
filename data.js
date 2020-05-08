
const decks = [
    {
        "id": 0,
        "name": "Math Quiz",
        "numCard": 0,
        "cards":{}
    },
    {
        "id": 1,
        "name": "History Quiz",
        "numCard": 0,
        "cards":{}
    },
    {
        "id": 2,
        "name": "Astornomy Quiz",
        "numCard": 0,
        "cards":{}
    },
    {
        "id": 3,
        "name": "Geography Quiz",
        "numCard": 0,
        "cards":{}
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

