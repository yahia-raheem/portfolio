<template>
  <div class="skill-block">
    <titlew-image :title="groupTitle" :icon-classes="iconClasses" />
    <div v-if="type === 'range'" class="range">
      <div v-if="rangeType === 'solid-bar'" class="solid-bar">
        <div v-for="(x, i) in skills" :key="i" class="skill-solid">
          <h6 class="title">{{ x.text_f1g32zbx29 }}</h6>
          <b-progress
            :value="x.range_3gge3yl61s1"
            max="100"
            height="5px"
            class="mb-3"
            style=""
          ></b-progress>
        </div>
      </div>
      <div v-if="rangeType === 'dots'" class="dots">
        <h6 class="title">{{ x.text_f1g32zbx29 }}</h6>
        <span
          v-for="(x, i) in Array(10)"
          :key="i"
          class="dot"
          :data-index="i"
        ></span>
      </div>
    </div>
    <div v-if="type === 'check'" class="check">
      <ul class="skill-list">
        <li v-for="(x, i) in skills" :key="i">
          <i class="fas fa-check"></i><span class="value">{{ x }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
.skill-block {
  .range {
    .solid-bar {
      .skill-solid {
        .title {
          color: white;
        }
        .progress .progress-bar {
          background-color: $primary;
        }
      }
    }
  }
  .check {
    .skill-list {
      margin-top: 20px;
      list-style: none;
      @include appDir(padding-left, 0, padding-right, 0);
      li {
        margin-bottom: 10px;
        i {
          color: $primary;
          @include appDir(margin-right, 15px, margin-left, 15px);
        }
        .value {
          color: white;
        }
      }
    }
  }
}
</style>
<script>
import TitlewImage from '@/components/resume/TitlewImage'
export default {
  components: {
    TitlewImage,
  },
  props: {
    payload: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      iconClasses: '',
      groupTitle: '',
      skills: '',
      type: '',
      rangeType: '',
    }
  },
  mounted() {
    this.sortData(this.payload)
  },
  methods: {
    sortData(payload) {
      this.iconClasses = payload.text_iidgl72lnz
      this.groupTitle = payload.text_g44ptvtj3e
      this.type = payload.radio_2dgi6tlm0it
      this.skills =
        this.type === 'range'
          ? payload.group_xnc937ritk
          : payload.text_bosn5vbyzy8
      this.rangeType = this.type === 'range' ? payload.select_y4qnqrmhvtn : null
    },
  },
}
</script>
