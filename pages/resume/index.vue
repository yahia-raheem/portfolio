<template>
  <div class="resume-page page">
    <sec-title :title="title" />
    <div class="row exp-row">
      <div class="col-md-6 exp-col">
        <titlew-image title="EDUCATION" icon-classes="fas fa-university" />
        <exp-block
          v-for="(el, index) in eduexpGroup.education"
          :key="index"
          :from="el.text_6yg6rn95nz8"
          :to="el.text_vu7xzec9umm"
          :title="el.text_ncr8kxr874"
          :subtitle="el.text_65qi5bqcdgl"
          :img-id="el.single_image_l4zt85vzpei"
          :desc="el.textarea_57q1wrav8l8"
        />
      </div>
      <div class="col-md-6 edu-col">
        <titlew-image title="EXPERIENCE" icon-classes="fas fa-briefcase" />
        <exp-block
          v-for="(el, index) in eduexpGroup.experience"
          :key="index"
          :from="el.text_6yg6rn95nz8"
          :to="el.text_vu7xzec9umm"
          :title="el.text_ncr8kxr874"
          :subtitle="el.text_65qi5bqcdgl"
          :img-id="el.single_image_l4zt85vzpei"
          :desc="el.textarea_57q1wrav8l8"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <sec-title title="Skills" />
      </div>
    </div>
    <div class="row skills-row">
      <div v-for="(skillg, i) in skills" :key="i" class="col-6 skillg-col">
        <skill-block :payload="skillg" />
      </div>
    </div>
    <div class="row testimonials">
      <div class="col-12">
        <testimonials :payload="testimonials" />
      </div>
    </div>
  </div>
</template>

<script>
import TitlewImage from '@/components/resume/TitlewImage'
import ExpBlock from '@/components/resume/ExpBlock'
import SkillBlock from '@/components/resume/SkillBlock.vue'
import Testimonials from '@/components/resume/Testimonials'
export default {
  components: { TitlewImage, ExpBlock, SkillBlock, Testimonials },
  async asyncData({ route, store, $axios, app, $fetchPage }) {
    const data = await $fetchPage(36)
    return {
      title: data.title.rendered,
      content: data.meta_box.wysiwyg_b864hamwc5,
      eduexp: data.meta_box.group_dzcaufx9r8k,
      skills: data.meta_box.group_ik5te4bw3h,
      testimonials: data.meta_box.group_5et364ufxr8,
    }
  },
  computed: {
    eduexpGroup() {
      return this.sortExpData(this.eduexp)
    },
  },
  methods: {
    sortExpData(payloadArray) {
      const education = []
      const experience = []
      payloadArray.forEach((element) => {
        if (element.radio_zbzi3jml2c === 'edu') {
          education.push(element)
        }
        if (element.radio_zbzi3jml2c === 'exp') {
          experience.push(element)
        }
      })
      return {
        education,
        experience,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.exp-row {
  .edu-col {
    &::before {
      content: '';
      position: absolute;
      left: -1px;
      top: 0;
      width: 1px;
      height: 100%;
      background: radial-gradient(
        ellipse at top,
        rgba(197, 202, 213, 0.15) 0%,
        rgba(255, 255, 255, 0) 70%
      );
    }
  }
}
.skillg-col:nth-of-type(even) {
  &::before {
    content: '';
    position: absolute;
    left: -1px;
    top: 0;
    width: 1px;
    height: 100%;
    background: radial-gradient(
      ellipse at top,
      rgba(197, 202, 213, 0.15) 0%,
      rgba(255, 255, 255, 0) 70%
    );
  }
}
</style>
