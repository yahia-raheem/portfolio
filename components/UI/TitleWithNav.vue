<template>
  <div class="row t-row mb-4">
    <div class="col-lg-2 col-md-12">
      <h5 class="section-title">
        {{ title }}
      </h5>
    </div>
    <div class="col-lg-10 col-md-12">
      <client-only>
        <b-nav>
          <b-nav-item><nuxt-link to="/works">all</nuxt-link></b-nav-item>
          <b-nav-item v-for="(item, index) in navItems" :key="index"
            ><nuxt-link
              :to="{ name: 'works-section', params: { section: item } }"
              >{{ item }}</nuxt-link
            ></b-nav-item
          >
        </b-nav>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    navItems: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.nav {
  padding: 30px 0;

  .nav-link {
    padding-top: 0;
  }
  .nuxt-link-exact-active {
    color: $primary;
  }
}
.t-row {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: -30px;
    right: 0;
    bottom: 0;
    height: 1px;
    background: radial-gradient(
      ellipse at left,
      rgba(197, 202, 213, 0.15) 0%,
      rgba(255, 255, 255, 0) 70%
    );
  }
}
.section-title {
  font-weight: bold;
  position: relative;
  padding: 30px 0;
  color: #e0e0e1;

  &::before {
    content: '';
    position: absolute;
    left: -10px;
    top: 50%;
    width: 30px;
    height: 30px;
    background: linear-gradient(
      135deg,
      rgba(255, 152, 0, 0.4) 0%,
      rgba(255, 152, 0, 0.01) 100%
    );
    transform: translateY(-50%);
    border-radius: 50%;
  }
}
</style>
