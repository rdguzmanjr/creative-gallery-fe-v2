<script setup>

import {ref} from 'vue'
import HTMLWrapper from '@/components/creativepreview/HTMLWrapper.vue'

const adview= ref('phone');

const props=defineProps({srcurl:String,format:String})

</script>

<template>
    <div v-if="adview=='phone' " id="url-wrapper" class="bg-[#373B43] relative w-9/12 md:scale-[0.7] lg:scale-[0.8]  2xl:scale-[0.9]">
       
        <div class="bg-no-repeat bg-[url('../assets/images/cardbg.png')] absolute top-0 
        w-full h-full bg-[length:400px_auto] bg-[position:calc(100%-50px)_calc(100%+50px)]
        md:w-[500px] md:h-[570px] md:bg-[length:500px_auto] 
        lg:w-[900px] lg:h-[570px] lg:bg-[length:700px_auto] lg:bg-[position:calc(100%-150px)_calc(100%)]
        xl:w-[1000px] xl:h-[600px] xl:bg-[length:800px_auto] xl:bg-[position:calc(100%-50px)_calc(100%+100px)]
        2xl:w-[1500px] 2xl:h-[700px] 2xl:bg-[length:900px_auto] 2xl:bg-[position:calc(100%-200px)_calc(100%+50px)]

        "></div>

        <div id="phone-wrapper" class="md:w-[20%] md:h-auto aspect-[340/677] block 
            md:absolute md:-translate-y-2/4 md:top-[50%] md:-translate-x-2/4 md:left-[30%] lg:left-[50%] 2xl:left-[60%]">
            <HTMLWrapper 
            :srchtml="srcurl"
            :format="format"
            class="w-screen h-screen md:w-[340px] md:h-[677px] pointer-events-auto overflow-hidden">
            </HTMLWrapper>
            <div class="hidden md:block absolute -top-[136.8px] -left-[90px] w-[520px] pointer-events-none">
                 <img width=520 src="/src/assets/images/phone.png"/>
            </div>
        </div>
    </div>

    <div v-else-if="adview=='desktop' " id="desktop-view" class="bg-[#373B43] relative w-9/12">
        <!-- scale-[0.45] xl:scale-[0.64] 2xl:scale-[0.8] 3xl:scale-[0.9]  -->
        <HTMLWrapper
        :srchtml="srcurl"
        class="absolute  w-[1280px] h-auto aspect-[1280/760] pointer-events-auto -translate-x-2/4 left-[52%]
                -translate-y-2/4 top-[45%]
                scale-[0.6] xl:scale-[0.64] 2xl:scale-[0.65] 3xl:scale-[0.65]
                ">
        </HTMLWrapper>
    
    </div>

    <div v-else-if="adview=='tablet' " id="tablet-view" class="bg-[#373B43] relative w-9/12">
        <!--  scale-[0.43] xl:scale-[0.4] 2xl:scale-[0.35] 3xl:scale-[0.3]-->
        <HTMLWrapper
        :srchtml="srcurl"
        class="absolute h-auto aspect-[768/1024] pointer-events-auto -translate-x-2/4 left-[52%]
         -translate-y-2/4 top-[46%]
         w-[767px] scale-[0.5] xl:scale-[0.6] 2xl:scale-[0.65] 3xl:scale-[0.7]
         ">
        </HTMLWrapper>
    </div>

    <div v-if="format=='Bannner'" id="nav-container" class="hidden absolute top-10 left-5
     lg:flex flex-col justify-center space-y-3 text-white">
     <div id="phonebutton" class="rounded-lg ring-0 ring-brandgreenlight active:ring-2  hover:bg-brandgreendark cursor-pointer" @click="adview='phone'">
            <img width=40 src="/src/assets/images/Mobile.svg"/>
        </div>
        <div id="desktopbutton" class="rounded-lg ring-0 ring-brandgreenlight active:ring-2  hover:bg-brandgreendark cursor-pointer" @click="adview='desktop'">
            <img width=40 src="/src/assets/images/Laptop.svg"/>
        </div>
        <div id="tabletbutton" class="rounded-lg ring-0 ring-brandgreenlight active:ring-2  hover:bg-brandgreendark cursor-pointer" @click="adview='tablet'">
            <img width=40 src="/src/assets/images/Tablet.svg"/>
        </div>
    </div>

</template>