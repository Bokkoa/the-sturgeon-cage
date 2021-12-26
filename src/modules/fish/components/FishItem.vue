<template>
    <n-card :title="fish.specie">
        <template #cover>
           <figure> <img class="image-fish" :src="fish.image" /> </figure>
        </template>
    </n-card>

</template>

<script>
export default {
    props: {
        fish:{
            type: Object,
            required: true
        }
    },
}
</script>

<style lang="less" scoped>
.n-card {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 2rem;
    max-height: 200rem;

    &:hover{
        transform: translate3D(0,-1px,0) scale(1.03);
        box-shadow: 8px 28px 50px rgba(39,44,49,.07), 1px 6px 12px rgba(39,44,49,.04);
        transition: all .4s ease; /* zoom in */
        cursor: pointer;
    }
 
}

.image-fish {
    height: 300px;
    object-fit: scale-down;
}

figure img {
	-webkit-filter: grayscale(0) blur(0);
	filter: grayscale(0) blur(0);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
}
figure:hover img {
	-webkit-filter: grayscale(100%) blur(3px);
	filter: grayscale(100%) blur(3px);
}


</style>