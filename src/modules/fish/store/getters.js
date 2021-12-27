import { groupBy } from '../helpers/generalHelpers'

export const getSpecies = ( state ) => ( search, groupByRegion ) => {

    let fishes = state.fishes.map( fish =>  { 
        return { id: fish.id, 
                 specie: fish['Species Name'], 
                 region: fish['NOAA Fisheries Region'],
                 image: fish['Species Illustration Photo']?.src}
    })

    if( search.length > 0 ){
        fishes = fishes.filter( fish => fish.specie.toLowerCase().includes( search.toLowerCase() ) )
    }

    if( groupByRegion ){
        fishes = groupBy( fishes, fish => fish.region)
    }

    return fishes

}

export const getFishInfo = ( state ) => (fishId) => {
    
    const fishInfo = state.fishes.find( fish => {  
        return fish.id === fishId })

    return fishInfo
}