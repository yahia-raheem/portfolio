<template>
  <div>
    <b-carousel id="carousel-1" :interval="0" controls indicators>
      <slide
        v-for="(one, index) in payload"
        :key="index"
        :body="one.textarea_8x67m0etdwu"
        :title="one.text_ajegwsvx3dm"
        :subtitle="one.text_ag8hvjddpdj"
        :imgid="Number(one.single_image_tfn6up1e4h)"
      />
    </b-carousel>
  </div>
</template>
<script>
import Slide from '@/components/resume/Slide'
export default {
  components: { Slide },
  props: {
    payload: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      slides: [],
    }
  },
}
</script>
<style lang="scss">
#carousel-1 {
  .carousel-item {
    height: 300px;
  }
  .carousel-caption {
    bottom: unset;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
