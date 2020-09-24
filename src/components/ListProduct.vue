<template>
  <div>
    <!-- Women Banner Section Begin -->
    <section class="women-banner spad">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 mt-5">
            <carousel
              class="product-slider"
              :items="3"
              :autoplay="true"
              :nav="false"
            >
              <div class="product-item">
                <div class="pi-pic">
                  <img src="img/basoaci1.jpeg" alt="" />
                  <ul>
                    <li class="w-icon active">
                      <a href="#"><i class="icon_bag_alt"></i></a>
                    </li>
                    <li class="quick-view">
                      <router-link to="/DetailProduct"
                        >+ Quick View</router-link
                      >
                    </li>
                  </ul>
                </div>
                <div class="pi-text">
                  <div class="catagory-name">Topping</div>
                  <a href="#">
                    <h5>Siomay, Cuanki</h5>
                  </a>
                  <div class="product-price">Rp.8000</div>
                </div>
              </div>
              <div class="product-item">
                <div class="pi-pic">
                  <img src="img/basoaci2.jpeg" alt="" />
                  <ul>
                    <li class="w-icon active">
                      <a href="#"><i class="icon_bag_alt"></i></a>
                    </li>
                    <li class="quick-view"><a href="#">+ Quick View</a></li>
                  </ul>
                </div>
                <div class="pi-text">
                  <div class="catagory-name">Topping</div>
                  <a href="#">
                    <h5>Sosis Solo</h5>
                  </a>
                  <div class="product-price">
                    Rp.12,000
                    <span>Rp.14,000</span>
                  </div>
                </div>
              </div>
              <div class="product-item">
                <div class="pi-pic">
                  <img src="img/basoaci3.jpeg" alt="" />
                  <ul>
                    <li class="w-icon active">
                      <a href="#"><i class="icon_bag_alt"></i></a>
                    </li>
                    <li class="quick-view"><a href="#">+ Quick View</a></li>
                  </ul>
                </div>
                <div class="pi-text">
                  <div class="catagory-name">main-course</div>
                  <a href="#">
                    <h5>Baso Aci Tulang Lunak</h5>
                  </a>
                  <div class="product-price">
                    Rp.15,000
                    <span>Rp.16,000</span>
                  </div>
                </div>
              </div>
              <div class="product-item">
                <div class="pi-pic">
                  <img src="img/basoaci4.jpeg" alt="" />
                  <ul>
                    <li class="w-icon active">
                      <a href="#"><i class="icon_bag_alt"></i></a>
                    </li>
                    <li class="quick-view"><a href="#">+ Quick View</a></li>
                    <li class="w-icon">
                      <a href="#"><i class="fa fa-random"></i></a>
                    </li>
                  </ul>
                </div>
                <div class="pi-text">
                  <div class="catagory-name">main-course</div>
                  <a href="#">
                    <h5>Baso Aci Original</h5>
                  </a>
                  <div class="product-price">
                    Rp.10,000
                    <span>Rp.12,000</span>
                  </div>
                </div>
              </div>
            </carousel>
          </div>
        </div>
      </div>
    </section>
    <!-- Women Banner Section End -->
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  name: "ListProduct",
  components: {
    carousel,
  },
};
</script>

<style scoped>
.product-item {
  margin-right: 25px;
}
</style>
