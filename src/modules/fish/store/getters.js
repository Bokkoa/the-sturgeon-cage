

export const getSpecies = ( state ) => ( search ) => {

    let fishes = state.fishes.map( fish =>  { 
        return { id: fish.id, specie: fish['Species Name'], image: fish['Species Illustration Photo']?.src}
    })

    if( !search.length > 0 ) return fishes

    fishes = fishes.filter( fish => fish.specie.toLowerCase().includes( search.toLowerCase() ) )

    return fishes

}

export const getFishInfo = ( state ) => (fishId) => {
    
    const fishInfo = state.fishes.find( fish => {  
        return fish.id === fishId })

    return fishInfo
}