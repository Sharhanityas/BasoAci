<template>
  <div>
    <!-- Hero Section Begin -->
    <section class="hero-section">
      <carousel class="hero-items" :items="1" :autoplay="true" :nav="false">
        <div
          class="single-hero-items set-bg"
          style="background-image:url('/img/slider1.png')"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-5">
                <span>main-course</span>
                <h1>Baso Aci</h1>
                <p>
                  Bingung cari yang bener bener bikin lega?,
                  <br />
                  Yukk cobain endulnya baso aci, dijamin bikin harimu Ga keki
                </p>
                <a href="#" class="primary-btn">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="single-hero-items set-bg"
          style="background-image:url('/img/slider2.png')"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-5">
                <span>topping</span>
                <h1>Sosis Solo</h1>
                <p>
                  Baso Aci mu kurang rame?, atau mau cari yang ringan untuk
                  cemilan?
                  <br />
                  Yuk, buruan pesen yang satu ini. Sosis Solo dengan isian ayam.
                </p>
                <a href="#" class="primary-btn">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </carousel>
    </section>
    <!-- Hero Section End -->
  </div>
</template>
<script>
import carousel from "vue-owl-carousel";
export default {
  name: "CarouselBoci",
  components: {
    carousel,
  },
};
</script>
