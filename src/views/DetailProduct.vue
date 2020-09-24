<template>
  <div class="DetailProduct">
    <HeaderBoci />
    <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-text product-more text-left">
              <router-link to="/"><i class="fa fa-home"></i></router-link>
              <span>Detail</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Section Begin -->

    <!-- Product Shop Section Begin -->
    <section class="product-shop spad page-details">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-6">
                <div class="product-pic-zoom">
                  <img class="product-big-img" :src="default_pic" alt="" />
                </div>
                <div class="product-thumbs">
                  <carousel
                    class="product-thumbs-track ps-slider"
                    :autoplay="true"
                    :nav="false"
                    :loop="true"
                  >
                    <div
                      class="pt"
                      @click="changeImage(thumbs[0])"
                      :class="thumbs[0] == default_pic ? 'active' : ''"
                    >
                      <img src="img/topping1.jpeg" alt="" />
                    </div>

                    <div
                      class="pt"
                      @click="changeImage(thumbs[1])"
                      :class="thumbs[1] == default_pic ? 'active' : ''"
                    >
                      <img src="img/topping2.jpeg" alt="" />
                    </div>

                    <div
                      class="pt"
                      @click="changeImage(thumbs[2])"
                      :class="thumbs[2] == default_pic ? 'active' : ''"
                    >
                      <img src="img/topping3.jpeg" alt="" />
                    </div>

                    <div
                      class="pt"
                      @click="changeImage(thumbs[3])"
                      :class="thumbs[3] == default_pic ? 'active' : ''"
                    >
                      <img src="img/topping4.jpeg" alt="" />
                    </div>
                  </carousel>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="product-details text-left">
                  <div class="pd-title">
                    <span>topping</span>
                    <h3>Siomay, Cuanki</h3>
                  </div>
                  <div class="pd-desc">
                    <p>
                      Makan baso aci tentunya tidak akan sempurna tanpa
                      kehadiran topping topping yang renyah. Paduan tekstur
                      renyah menyatu dengan lembutnya tekstur baso aci.
                      Menjadikan hidangan ini seolah olah Master piece yang
                      langka dan berharga
                    </p>
                    <h4>Rp.8000</h4>
                  </div>
                  <div class="quantity">
                    <router-link to="/Cart" class="primary-btn pd-cart">
                      Add To Cart</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Product Shop Section End -->

    <RelatedProduct />
    <FooterBoci />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderBoci from "@/components/HeaderBoci.vue";
import FooterBoci from "@/components/FooterBoci.vue";
import RelatedProduct from "@/components/RelatedProduct.vue";
import carousel from "vue-owl-carousel";
export default {
  name: "DetailProduct",
  components: {
    HeaderBoci,
    FooterBoci,
    RelatedProduct,
    carousel,
  },
  data() {
    return {
      default_pic: "img/basoaci1.jpeg",
      thumbs: [
        "img/topping1.jpeg",
        "img/topping2.jpeg",
        "img/topping3.jpeg",
        "img/topping4.jpeg",
      ],
    };
  },
  methods: {
    changeImage(urlImage) {
      this.default_pic = urlImage;
    },
  },
};
</script>

<style scoped>
.product-thumbs .pt {
  margin-right: 10px;
  margin-left: 10px;
}
</style>