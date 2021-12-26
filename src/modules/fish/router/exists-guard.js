import store from '@/store'

const existsFishIdGuard = async ( to, from, next ) => {

    const result = store.getters['fish/getFishInfo']( to.params.id )

    if(!result ) return next({  name: 'all-fishes'})

    next()
}

export default existsFishIdGuard