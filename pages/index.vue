<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="about-page page">
    <sec-title title="About Me" />
    <div v-html="content"></div>
    <div class="pb-container mb-4">
      <personal-box
        v-for="one in personal"
        :key="one.text_ndk3ohur23p"
        :title="one.text_ndk3ohur23p"
        :value="one.text_8pkq1nvq2zg"
      />
    </div>
    <div class="services-section">
      <sec-title title="My Services" />
      <div class="row">
        <div
          v-for="service in services"
          :key="service.text_7azsky693i5"
          class="col-md-6 col-sm-12"
        >
          <service
            :icon-classes="service.text_8bwka90xq0h"
            :title="service.text_7azsky693i5"
            :description="service.textarea_kckgzsdsp6m"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PersonalBox from '@/components/about/PersonalBox'
import Service from '@/components/about/Service'
export default {
  components: {
    PersonalBox,
    Service,
  },
  async asyncData({ route, store, $axios, app, $fetchPage }) {
    const data = await app.$fetchPage(8)
    return {
      title: data.title.rendered,
      content: data.meta_box.wysiwyg_b864hamwc5,
      personal: data.meta_box.group_zselh5hjgnh,
      services: data.meta_box.group_y6rrnpca8f,
    }
  },
}
</script>

<style lang="scss">
.pb-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  @include media('<992px') {
    display: flex;
    flex-direction: column;
  }
}
</style>
