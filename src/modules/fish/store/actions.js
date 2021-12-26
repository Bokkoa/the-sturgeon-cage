
import fishApi from "@/api/fishApi";

export const loadFishes = async ({ commit, state } ) => {

    if( state.fishes.length > 0 ) return 
    
    const { data } = await fishApi.get('/species.json')

    if( !data ) return commit('setFishes', [])

    const fishes = []

    for( let id of Object.keys( data )){
        fishes.push({
            id,
            ...data[id]
        })
    }

    commit('setFishes', fishes)

}