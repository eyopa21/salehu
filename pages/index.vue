<template >
  <div
    class="font-nunito text-base text-black dark:text-white dark:bg-slate-900"
   
  >
    <Hero />

    <!-- FEATURES START -->
    <section class="relative md:py-24 py-16">
      <Services />

      <Detail />
      <Companies />

      <div class="container md:mt-24 mt-16">
        <div class="grid grid-cols-1 pb-8 text-center">
          <h3
            class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold"
          >
            Projects
          </h3>
          <p class="text-slate-400 max-w-xl mx-auto">
            Create, collaborate, and turn your ideas into incredible products
            with the definitive platform for digital design.
          </p>
        </div>
        <!--end grid-->

        <div
          class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]"
        >
          <Products v-for="i in products.products" :key="i" :product="i"/>
        </div>
        <!--end grid-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- End -->

    <VideoAd />

    <!-- Start -->
    <section class="relative md:py-24 py-16">
      <div class="container">
        <div class="grid grid-cols-1 pb-8 text-center">
          <h6 class="text-indigo-600 text-base mb-2">Our Minds</h6>
          <h3
            class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold"
          >
            Management Team
          </h3>

          <p class="text-slate-400 max-w-xl mx-auto">
            Start working with Tailwind CSS that can provide everything you need
            to generate awareness, drive traffic, connect.
          </p>
        </div>
        <!--end grid-->

        <div class="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
          <TeamCard v-for="i in 4" :key="i" />
        </div>
        <!--end grid-->
      </div>
      <!--end container-->
      <!-- team -->

      <!--Blog/-->
    </section>
    <!--end section-->
    <!-- End -->
  </div>
</template>

<script setup>
import "../assets/css/icons.css";

    const products =  useProduct();


</script>
<style scoped src="../assets/css/tailwind.css">
</style>