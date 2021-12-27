<template>
    <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="600"
                height="500"
                id="gmap_canvas"
                :src="`https://maps.google.com/maps?q=${regionName}&t=&z=5&ie=UTF8&iwloc=&output=embed`"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe
              ><a href="https://2piratebay.org"></a><br /><a
                href="https://www.embedgooglemap.net"
                >embedgooglemap.net</a
              >
            </div>
    </div>
</template>

<script>
export default {
    props:{
        regionName: {
            required: true,
            type: String
        }
    }
}
</script>

<style lang="less" scoped>
// MAP
.mapouter {
  position: relative;
  text-align: right;
  height: 300px;
  width: 100%;
}

.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 300px;
  width: 100%;
}
</style>