
const initialState = {
    commentsIdsLoading: [],
    itemsById: {},
    treeLoading: {}, //по id будем смотреть для какого коммента(id) грузится дерево
}

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {



        default: {
            return state
        }
    }
}