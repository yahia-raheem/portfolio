<template>
  <div>
    <div class="row work-row pt-4">
      <div
        v-for="(item, index) in works"
        :key="index"
        class="col-lg-6 col-md-12"
      >
        <work-box
          :imgid="item.single_image_mdxqun8wsjn"
          :link="item.url_34dfru7srbj"
          :title="item.text_c3b44aupz7r"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.work-row {
  position: relative;
  @include media('>992px') {
    &::after {
      margin: 0 0 0 -1px;
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      width: 1px;
      height: 100%;
      background: radial-gradient(
        ellipse at top,
        rgba(197, 202, 213, 0.15) 0%,
        rgba(255, 255, 255, 0) 70%
      );
    }
    &::before {
      content: '';
      position: absolute;
      left: -30px;
      right: 0;
      top: 0;
      height: 1px;
      background: radial-gradient(
        ellipse at left,
        rgba(197, 202, 213, 0.15) 0%,
        rgba(255, 255, 255, 0) 70%
      );
    }
  }
}
</style>
<script>
import WorkBox from '@/components/works/WorkBox.vue'

export default {
  components: { WorkBox },
  data() {
    return {
      works: this.pageData().meta_box.group_5ps5r8xhoso.filter((item) => {
        return item.text_75y06fydt1k.includes(
          String(this.$route.params.section)
        )
      }),
    }
  },
  methods: {
    pageData() {
      return this.$store.getters.pages.find(
        (el) => String(el.id) === String(45)
      )
    },
  },
}
</script>
