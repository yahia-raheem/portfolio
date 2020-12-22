<template>
  <div>
    <div class="row work-row pt-4">
      <div v-for="(item, index) in works" :key="index" class="col-6">
        <work-box
          :imgid="item.single_image_mdxqun8wsjn"
          :link="item.url_34dfru7srbj"
          :title="item.text_c3b44aupz7r"
        />
      </div>
    </div>
  </div>
</template>
<script>
import WorkBox from '@/components/works/WorkBox.vue'
export default {
  components: { WorkBox },
  data() {
    return {
      works: this.pageData().meta_box.group_5ps5r8xhoso,
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
