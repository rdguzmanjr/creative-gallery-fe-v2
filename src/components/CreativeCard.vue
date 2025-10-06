<script setup>
import {ref} from 'vue'
import QRimage from '@/components/QRimage.vue'
import { useRoute, useRouter } from 'vue-router'
import { useCreativeStore } from '@/stores/creative'
const router = useRouter()
//fix for flicker
const creativeStore= useCreativeStore();

const flip=ref(null)

const handlemouserover=()=>{
    flip.value=true;
}
const handlemouserout=()=>{
    flip.value=false;
}
const handleclick=()=>{
    flip.value=false;
    router.push('/creative/'+props.creative.id)
}
let props=defineProps({creative:Object})

</script>

<template>
    <div id="card-perspective" @mouseover="handlemouserover" @mouseout="handlemouserout" class="perspective-[2000px] cursor-pointer" @click="handleclick">
        <div id="card" class="transition-all ease-out duration-[1000ms] w-[300px] bg-brandgray h-[570px] text-[#f5ffde] rounded-2xl transform-style-3d" :class="flip?'rotate-y-180':'rotate-y-0'">
           
            <!-- card-front  -->

            <div id="cardfront" class="absolute backface-hidden">
                    
                    <div class="rounded-2xl w-[300px] h-[290px] bg-brandgreen"></div>
                    <!-- <div class="absolute top-0 rounded-2xl w-[300px] h-[570px] bg-[url('../assets/images/cardcircle.png')] bg-no-repeat bg-[position:calc(100%-55px)_calc(100%-85px)] bg-[length:350px_auto]"></div> -->
                    <div class="absolute top-0 rounded-2xl w-[300px] h-[570px] bg-[url('../assets/images/cardbg.png')] bg-no-repeat bg-[position:center_calc(100%-20px)] bg-[length:250px_auto]"></div>
                    <div class="absolute top-0 rounded-2xl w-[300px] h-[278px] bg-center bg-cover" :style="`background-image: url(${creative.thumbnail})`"></div>
                    <div class="info mx-5 my-3 space-y-20 mt-5">
                        <p class="absolute top-[19rem] font-volkorn font-black text-2xl">{{creative.name}}</p>
                        <div class="absolute top-[19rem] space-y-1">
                            <p class="text-md">Brand: {{creative.advertiser.name}}</p>
                            <p class="text-md">Product: {{creative.format.name}}</p>
                            <p class="text-md">Category:</p>
                            <span class="text-xs bg-[#252a30] rounded-md px-3 text-white">{{creative.categories[0].name}}</span>
                            <!-- <span
                            v-for="(cat, index) in creative.categories"
                            :key="index"
                            class="text-xs rounded-md px-3 text-white mr-1"
                            :class="creative.categories.some(c => c.name?.toLowerCase() === 'new')
                                ? 'bg-[#ff5c00]'
                                : 'bg-[#252a30]'"
                            >
                            {{ cat.name }}
                            </span> -->
                        </div>
                    </div>
                    <div
                        v-if="creative.tags[0]?.name?.toLowerCase() === 'whatsnew'"
                        class="absolute top-2 right-2 bg-[#ff5c00] text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg"
                    >   New
                        <!-- <div v-for="(tag, index) in creative.tags.slice(1)" :key="index">
                        {{ tag.name }}
                        </div> -->
                        
                    </div>
                    
                    <div class="absolute top-[31.5rem] rounded-2xl w-[300px] h-[50px] bg-[url('../assets/images/cardcta.png')] bg-no-repeat bg-[position:calc(100%-25px)_calc(100%-10px)] bg-[length:250px_auto]"></div>
                    
                </div>

                <!-- card-back -->

                <div id="cardback" class="absolute w-[300px] h-[570px] rounded-2xl backface-hidden rotate-y-180">
                   <div class="info mx-5 my-3 space-y-7 mt-5">
                        <p class="text-md text-center">Preview creative on your device</p>
                        <QRimage :creativeId="creative.id"></QRimage>
                    </div>
                  
                    <!-- <div class="absolute top-0 rounded-2xl w-[300px] h-[570px] bg-[url('../assets/images/cardcircle.png')] bg-no-repeat bg-[position:calc(100%-55px)_calc(100%-85px)] bg-[length:350px_auto]"></div> -->
                    <div class="absolute top-0 rounded-2xl w-[300px] h-[570px] bg-[url('../assets/images/cardbg.png')] bg-no-repeat bg-[position:center_calc(100%-20px)] bg-[length:250px_auto]"></div>
                    <div class="info mx-5 my-3 space-y-20 mt-5">
                        <p class="absolute top-[19rem] font-volkorn font-black text-2xl">{{creative.name}}</p>
                        <div class="absolute top-[19rem] space-y-1">
                            <p class="text-md">Brand: {{creative.advertiser.name}}</p>
                            <p class="text-md">Product: {{creative.format.name}}</p>
                            <p class="text-md">Category:</p>
                            <span class="text-xs bg-[#252a30] rounded-md px-3 text-white">{{creative.categories[0].name}}</span>
                        </div>
                    </div>
                    <div class="absolute top-[31.5rem] rounded-2xl w-[300px] h-[50px] bg-[url('../assets/images/cardcta.png')] bg-no-repeat bg-[position:calc(100%-25px)_calc(100%-10px)] bg-[length:250px_auto]"></div>

                </div>
        </div>
    </div>
</template>
<style scoped>

#card-perspective{
    filter: drop-shadow(0px 0px 5px #008176);
}
</style>