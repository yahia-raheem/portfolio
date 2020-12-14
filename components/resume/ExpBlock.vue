<template>
  <div class="exp-block">
    <div class="bhead">
      <div class="btitle">
        <div :class="{ datedata: true, active: to == 'present' }">
          {{ from }} - {{ to }}
        </div>
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
  margin-bottom: 25px;
  padding-bottom: 25px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: radial-gradient(
      ellipse at left,
      rgba(197, 202, 213, 0.15) 0%,
      rgba(255, 255, 255, 0) 70%
    );
  }
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
      width: fit-content;
      font-size: 0.8rem;
      text-transform: capitalize;
      padding: 0 5px;
      margin-bottom: 15px;
      border: 2px solid;
      &.active {
        color: $primary;
        border-color: $primary;
      }
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
