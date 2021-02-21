<template>
  <b-carousel-slide img-blank>
    <p class="tbody">{{ body }}</p>
    <div class="data">
      <div v-if="image" class="img-container">
        <resp-img :payload="image.image" />
      </div>
      <div v-if="title" class="title">
        {{ title }}
      </div>
      <div v-if="subtitle" class="sub">
        {{ subtitle }}
      </div>
    </div>
  </b-carousel-slide>
</template>

<style lang="scss" scoped>
.tbody {
  position: relative;
  &::before {
    content: '\f10d';
    position: absolute;
    top: 0;
    left: 0;
    font-family: 'Font Awesome 5 Free';
    color: #87878c;
    font-weight: 600;
  }
  &::after {
    content: '\f10e';
    position: absolute;
    bottom: 0;
    right: 0;
    font-family: 'Font Awesome 5 Free';
    color: #87878c;
    font-weight: 600;
  }
}
.data {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  .img-container {
    margin-top: 30px;
    @include circle(60px);
    overflow: hidden;
  }
  .title {
    margin-top: 5px;
    font-weight: bold;
    color: white;
  }
}
</style>

<script>
export default {
  props: {
    body: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    imgid: {
      type: Number,
      default: null,
    },
  },
  async fetch() {
    this.image = this.imgid ? await this.$getImage(this.imgid) : false
  },
  data() {
    return {
      image: '',
    }
  },
}
</script>
