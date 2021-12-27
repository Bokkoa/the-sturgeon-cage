<template>
    <Banner/>

    <nav class="navbar bg-primary" >

        <div class="section">
            <img class="logo" src="../../assets/logo.png" alt="" srcset="">

            <CustomLink 
                v-for="link in links"
                :key="link.to"
                :link="link"
            />
        </div>

    </nav>
</template>

<script>
import { defineAsyncComponent, ref } from 'vue'

export default {

    components: {
        CustomLink: defineAsyncComponent( () => import('./CustomLink.vue') ),
        Banner: defineAsyncComponent( () => import('./Banner.vue'))
    },

    setup(){

        const links = ref([
                { to: 'all-fishes', name: 'Catalogue'},
                { to: 'about', name: 'About'},
                // { to: 'https://google.com', name: 'Google'},
        ])

        return {
            links
        }

    }

}
</script>

<style lang="less" scoped>

.navbar{
    height: 7em;
    widows: 100%;
}

.logo{
    width: 150px;
}

.bg-primary{
    background-color: #1A374D;
    color: white;
}

.section{
    align-items: center;
    display: flex;
    justify-content: center;
    padding-top: 30px;
    >a{
        color: white;
        font-size: 1.4em;
        font-weight: bold;
        text-decoration: none;
        margin-left: 30px;
    }
}
</style>