<template>
  <a :href="link" target="_blank">
    <div class="work-box">
      <div class="img-container">
        <resp-img :payload="img.image" />
      </div>
      <h5 class="title">
        {{ title }}
      </h5>
    </div>
  </a>
</template>
<style lang="scss" scoped>
h5 {
  color: white;
  text-align: center;
  margin-top: 10px;
  transition: all 0.5s;
}
.work-box {
  margin-bottom: 20px;
}
a:hover {
  text-decoration: none;
  h5 {
    color: $primary;
  }
}
</style>
<script>
import aspectratio from '~/mixins/aspectratio'
export default {
  mixins: [aspectratio],
  props: {
    title: {
      type: String,
      default: '',
    },
    imgid: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
  async fetch() {
    this.img = await this.$getImage(Number(this.imgid))
  },
  data() {
    return {
      img: '',
    }
  },
}
</script>
