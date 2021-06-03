<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="page contact-page">
    <sec-title :title="title" />
    <div class="row">
      <div class="col-12">
        <div class="map" data-aspectRatio="16/9" v-html="map"></div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="pb-container">
          <personal-box
            v-for="(item, index) in contact"
            :key="index"
            :title="item.text_0qfotdt87fo"
            :value="item.text_fm1sg0su5rp"
          />
        </div>
      </div>
    </div>
    <sec-title title="Contact Me" class="mt-4" />
    <div class="row mt-5 mb-5">
      <div class="col-12">
        <b-form @submit="onSubmit">
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Your Name:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.name"
              placeholder="Enter name"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-3"
            label="Your Message:"
            label-for="textarea"
          >
            <b-form-textarea
              id="textarea"
              v-model="form.message"
              placeholder="Enter something..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import PersonalBox from '~/components/about/PersonalBox.vue'
import aspectratio from '~/mixins/aspectratio'
export default {
  components: {
    PersonalBox,
  },
  mixins: [aspectratio],
  async asyncData({ route, store, $axios, app, $fetchPage }) {
    const data = await $fetchPage(59)
    return {
      title: data.title.rendered,
      map: data.meta_box.textarea_ycli27tnz5k,
      contact: data.meta_box.group_1wj488ce2q7i,
    }
  },
  data() {
    return {
      form: {
        email: '',
        name: '',
        message: '',
      },
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault()
      const emailBody = {
        'your-name': this.form.name,
        'your-email': this.form.email,
        'your-message': this.form.message,
      }
      const form = new FormData()
      for (const field in emailBody) {
        form.append(field, emailBody[field])
      }
      const res = await this.$axios.post(
        'https://projects.yahiadev.com/portfolio/wp-json/contact-form-7/v1/contact-forms/63/feedback',
        form
      )
      if (res.data.status === 'mail_sent') {
        this.form.email = ''
        this.form.name = ''
        this.form.message = ''
        alert(res.data.message)
      }
    },
  },
}
</script>

<style lang="scss">
.contact-page {
  .map {
    width: 100%;
    margin-bottom: 20px;
    iframe {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
