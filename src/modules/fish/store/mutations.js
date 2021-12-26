
export const setFishes = (state, fishes ) => {

    state.fishes = [...state.fishes, ...fishes]
    state.isLoading = false
}


export const loadFavoriteFihses = ( state ) => {

    console.log(state)
}