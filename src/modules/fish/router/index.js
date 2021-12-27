
import existsFishIdGuard from './exists-guard'

export default {

    path: '/',
    name: 'fish',
    component: () => import(/* webpackChunkName: "fish layout" */ '@/modules/fish/layouts/FishLayout.vue'),
    children: [
        {
            path: '/',
            name: 'all-fishes',
            component: () => import(/* webpackChunkName: "all fishes"*/ '@/modules/fish/views/FishGrid.vue')
        },
        {
            path: ':id',
            name: 'fish-info',
            component: () => import( /* webpackChunkName: "fish"*/ '@/modules/fish/views/Fish.vue' ),
            beforeEnter: [ existsFishIdGuard ],
        }
    ]
}