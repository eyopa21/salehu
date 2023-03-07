<template>

    <div @click="navigate()"  class="group relative block overflow-hidden rounded-md transition-all duration-500">
                        <NuxtLink to="/product/1"><img src="../assets/images/construction/1.jpg" class="rounded-md shadow dark:shadow-gray-800" alt=""></NuxtLink>
                        <div class="content pt-3">
                            <h5 class="mb-1"><NuxtLink to='/product/1' class="hover:text-indigo-600 transition-all duration-500 font-semibold text-lg">{{props.product.title}}</NuxtLink></h5>
                            <h6 class="text-slate-400">{{props.product.category}}</h6>
                        </div>
                    </div>
</template>
<script setup>
    const router = useRouter();

    const product = useProduct();
    const props = defineProps(['product'])

    const navigate = () => {
        product.value.product = props.product;
    }
</script>