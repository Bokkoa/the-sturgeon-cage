<template>
  <div class="carousel-container">
    <div class="row">
      <n-h2>Gallery</n-h2>
      <n-carousel
        dot-placement="left"
        style="height: 240px"
        autoplay
        show-arrow
        class="carousel"
      >
      <template v-if="gallery?.length">
        <img
          v-for="image in gallery"
          :key="image.src"
          class="carousel-img"
          :src="image.src"
        />
      </template>

      <template v-else>
        <img
          class="carousel-img"
          src="../../../assets/notfound.jpg"
        />
      </template>
      </n-carousel>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        gallery: {
            type: [Object, null, Array],
            required: true,
        }
    }
}
</script>

<style lang="less" scoped>
.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-container {
  display: flex;
  justify-content: center;
  margin-top: 2em;
  margin-bottom: 2em;
}

.row {
  max-width: 700px;
  flex: 1 auto; // says only 1 item
}

.carousel {
  margin: 0 auto;
}
</style>