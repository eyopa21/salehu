<template>
     <!-- Start Hero -->
        <section class="relative md:h-screen py-36 flex items-center bg-[url('../../assets/images/construction/bg.jpg')] bg-center overflow-hidden bg-cover">
            <div class="absolute inset-0 bg-white/30 dark:bg-slate-900/60"></div>
            <div class="container relative z-1">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div class="lg:col-span-8 md:col-span-7 md:order-1 order-2">
                        <div class="ltr:md:mr-6 rtl:md:ml-6">
                            <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">Start building <br> your dream home</h4>
                            <p class="text-slate-900 dark:text-white/75 text-lg max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        
                            <div class="mt-6">
                                <a href="#" class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Contact Us</a>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="lg:col-span-4 md:col-span-5 md:text-center md:order-2 order-1">
                        <button v-if="!showYoutube" @click="showYoutube = !showYoutube"  href="#!" data-type="youtube" data-id="yba7hPeTSjk" class="lightbox lg:h-24 h-20 lg:w-24 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white hover:bg-indigo-600 text-indigo-600 hover:text-white duration-500 ease-in-out mx-auto">
                            <i class="mdi mdi-play inline-flex items-center justify-center text-3xl"></i>
                        </button>
                        <iframe class="w-full" v-show="showYoutube" width="360" height="315" src="https://www.youtube.com/embed/Pq18aRSjyO0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End Hero --> 
</template>
<script setup>
const showYoutube = ref(false);

    
</script>