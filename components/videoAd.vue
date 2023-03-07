<template>
    <!-- Start -->
        <section class="py-20 w-full table relative bg-[url('../../assets/images/construction/bg2.jpg')] bg-center bg-no-repeat bg-cover">
            <div class="absolute inset-0 bg-slate-900/70"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 text-center">
                    <h3 class="mb-4 md:text-3xl text-2xl md:leading-normal leading-normal text-white font-medium">Generating more value <br> at every level and building a better world for everyone</h3>

                    <p class="text-white/80 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                
                    <button v-if="!showVideo" @click="showVideo = !showVideo" data-type="youtube" data-id="yba7hPeTSjk" class="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 mx-auto mt-10">
                        <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                    </button>
                    <iframe class="w-full" v-show="showVideo" width="360" height="315" src="https://www.youtube.com/embed/Pq18aRSjyO0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End -->
</template>
<script setup>
    
const showVideo = ref(false);

</script>