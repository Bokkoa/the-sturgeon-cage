<template>
    <div class="banner-container">
        <img class="banner" src="../../assets/banner.jpg" alt="" srcset="">
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>

.banner-container{

    display: flex;
    height: 200px;
    width: 100%;
    position:relative;
    overflow: hidden;

    > .banner {
        position: absolute;
        z-index: -1;
    }
}

</style>