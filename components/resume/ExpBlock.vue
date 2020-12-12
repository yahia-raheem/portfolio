<template>
  <div class="exp-block">
    <div class="bhead">
      <div class="btitle">
        <div class="datedata">{{ from }} - {{ to }}</div>
        <h6 class="title">{{ title }}</h6>
        <span class="sub">{{ subtitle }}</span>
      </div>
      <div class="bimg img-container">
        <resp-img :payload="img.image" />
      </div>
    </div>
    <div class="bcontent">
      {{ desc }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.exp-block {
  margin-top: 25px;
  .bhead {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    .bimg {
      width: 25%;
    }
    .datedata {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid $primary;
      width: fit-content;
      color: $primary;
      font-size: 0.8rem;
      text-transform: capitalize;
      padding: 0 5px;
      margin-bottom: 15px;
    }
    .title {
      color: white;
      font-weight: bold;
      margin-bottom: 0;
    }
    .sub {
      font-size: 0.9rem;
      margin-bottom: 10px;
    }
  }
}
</style>
<script>
export default {
  props: {
    from: {
      type: String,
      default: '',
    },
    to: {
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
    imgId: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
  },
  async fetch() {
    this.img = await this.$getImage(this.imgId)
  },
  data() {
    return {
      img: '',
      sizes: [
        {
          breakpoint: 300,
          width: 600,
        },
      ],
    }
  },
}
</script>
