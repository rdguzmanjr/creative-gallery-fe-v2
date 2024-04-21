<script setup>

import {ref} from 'vue'

const adview= ref('phone');

const props=defineProps({srcurl:String,format:String})

</script>

<template>
    
    <div v-if="adview=='phone' " id="celtra-wrapper" class="bg-brandgrayblue relative w-9/12 md:scale-[0.7] lg:scale-[0.8]  2xl:scale-[0.9]">
        <!-- <p class="text-white">TEST {{ isint }}</p> -->
        <div id="phone-wrapper" class="md:w-[20%] md:h-auto aspect-[340/677] block 
            md:absolute md:-translate-y-2/4 md:top-[50%] md:-translate-x-2/4 md:left-[30%] lg:left-[50%] 2xl:left-[60%]">
            <iframe 
                class="w-screen h-screen md:w-[340px] md:h-[677px] pointer-events-auto"
                id="nt_iframe"
                :src="`https://preview-sandbox.celtra.com/preview/${srcurl}/frame?overrides.deviceInfo.deviceType=Phone&amp;rp.standalonePreview=1`"
                sandbox="allow-scripts allow-popups allow-same-origin">
            </iframe>
            <div class="hidden md:block absolute -top-[136.8px] -left-[90px] w-[520px] pointer-events-none">
                 <img width=520 src="/src/assets/images/phone.png"/>
            </div>
        </div>
        
    </div>

    <div v-else-if="adview=='desktop' " id="desktop-view" class="bg-brandgrayblue relative w-9/12">
        <div id="desktop-wrapper" class="absolute -translate-x-2/4 left-[52%]
                -translate-y-2/4 top-[40%]
                scale-[0.45] xl:scale-[0.64] 2xl:scale-[0.8] 3xl:scale-[0.8]">
        <iframe 
                class="pointer-events-auto w-[1280px] h-[760px]"
                id="nt_iframe"
                :src="`https://preview-sandbox.celtra.com/preview/${srcurl}/frame?overrides.deviceInfo.deviceType=Phone&amp;rp.standalonePreview=1`"
                sandbox="allow-scripts allow-popups allow-same-origin">
            </iframe>
            <div class="hidden md:block absolute -top-[25px] -left-[35px] w-[1350px] pointer-events-none">
                <img width=1350 src="/src/assets/images/desktop.png"/>
            </div>
        </div>   
    </div>
    <div v-else-if="adview=='tablet' " id="tablet-view" class="bg-brandgrayblue relative w-9/12">
     <div id="tablet-wrapper" class="absolute -translate-x-2/4 left-[52%]
         -translate-y-2/4 top-[46%]
         scale-[0.5] xl:scale-[0.6] 2xl:scale-[0.65] 3xl:scale-[0.7]">
     <iframe 
         class="pointer-events-auto w-[768px] h-[1024px]"
         id="nt_iframe"
         :src="`https://preview-sandbox.celtra.com/preview/${srcurl}/frame?overrides.deviceInfo.deviceType=Phone&amp;rp.standalonePreview=1`"
         sandbox="allow-scripts allow-popups allow-same-origin">
     </iframe>
      <div class="hidden md:block absolute -top-[30px] -left-[20px] w-[820px] pointer-events-none">
                <img width=820 src="/src/assets/images/tablet.png"/>
      </div>
    </div>
</div>
    
    <div v-if="format=='Banner'" id="nav-container" class="hidden absolute top-10 left-5
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