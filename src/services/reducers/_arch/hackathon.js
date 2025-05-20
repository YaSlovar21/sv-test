const initialState = {
    currentHackTextId: 'hack22-10',
    name: 'Барнаульский хакатон',
    idNum: '10'
}

export const hackathonReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
}