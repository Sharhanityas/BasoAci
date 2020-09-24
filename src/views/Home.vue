<template>
  <div class="home">
    <HeaderBoci />
    <CarouselBoci />
    <ListProduct />
    <GalleryBoci />
    <FooterBoci />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderBoci from "@/components/HeaderBoci.vue";
import CarouselBoci from "@/components/CarouselBoci.vue";
import ListProduct from "@/components/ListProduct.vue";
import GalleryBoci from "@/components/GalleryBoci.vue";
import FooterBoci from "@/components/FooterBoci.vue";
export default {
  name: "Home",
  components: {
    HeaderBoci,
    CarouselBoci,
    ListProduct,
    GalleryBoci,
    FooterBoci,
  },
};
</script>
