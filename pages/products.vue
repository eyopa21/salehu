<template>
   
      <div
    class="font-nunito text-base text-black dark:text-white dark:bg-slate-900"
  >
<section class="relative md:py-24 py-16">

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
          <Products v-for="i in products" :key="i" :product="i"/>
        </div>
        <!--end grid-->
      </div>

</section>

      </div>
</template>
<script setup>
import "../assets/css/icons.css";



const products = ref([
    {
        id: 1,
        title: 'aa',
        description: 'aa',
        client: 'aa',
        category: 'aa',
        date: '',
        location: 'aa',
        images: ['aa']
    },
    {
        id: 2,
        title: 'bb',
        description: 'bb',
        client: 'bb',
        category: 'bb',
        date: 'bb',
        location: 'bb',
        images: []
    },
    {
        id: 3,
        title: 'cc',
        description: 'cc',
        client: 'cc',
        category: 'cc',
        date: 'cc',
        location: 'cc',
        images: []
    }
])
</script>
