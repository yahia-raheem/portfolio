<template>
  <div>
    <HeaderMobile />
    <section class="main-content">
      <div class="container-fluid h-mob-100">
        <div class="row h-mob-100">
          <div
            class="col-xl-5 col-lg-6 d-lg-flex d-none justify-content-end align-items-center no-padding"
          >
            <Cover />
          </div>
          <div class="col-xl-7 col-lg-6 col-md-12 no-padding route-container">
            <Nuxt />
          </div>
        </div>
      </div>
    </section>
    <NavigationMobile />
  </div>
</template>
<style lang="scss">
.main-content {
  background-color: #212127;
  width: 100vw;
  padding: 64px 0 62px;
  @include media('>992px') {
    padding: 0;
  }
  height: 100vh;
  display: flex;
  align-items: center;
}
.no-padding {
  padding: 0;
}
.route-container {
  overflow: hidden;
  margin: auto;
  height: 100%;
  @include media('>992px') {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    height: 620px;
    max-height: 85vh;
    margin: auto 0;
  }
}
.h-mob-100 {
  @include media('<992px') {
    height: 100%;
  }
}
</style>
<script>
import Cover from '@/components/Cover'
import NavigationMobile from '@/components/NavigationMobile'
import HeaderMobile from '@/components/HeaderMobile'
export default {
  components: {
    Cover,
    NavigationMobile,
    HeaderMobile,
  },
}
</script>
