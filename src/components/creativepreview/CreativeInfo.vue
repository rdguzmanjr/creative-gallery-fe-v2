<script setup>

import QRimage from '@/components/QRimage.vue'

const props=defineProps({creative:Object})

</script>

<template>
  <div id="creativeinfo" class="hidden h-screen space-y-14 md:flex flex-col justify-center bg-[#373B43] text-[#f5ffde] pb-20
  min-w-[20rem] 2xl:min-w-[25rem]
  2xl:space-y-16 z-[0]
  ">
  <div class="absolute top-[43.5%] md:top-[44.5%] lg:top-[40.5%] xl:top-[44.5%] 2xl:top-[44.5%]  w-[341px] h-[288px] bg-[url('../assets/images/cardcircle.png')] bg-no-repeat bg-[position:calc(100%-100px)_calc(100%-85px)] bg-[length:341px_auto]"></div>

      <div class="space-y-4">
        <p class="text-md 2xl:text-lg">Preview creative on your device</p>
        <div class="w-[10rem] 2xl:w-[10.4rem]">
            <QRimage :creativeId="creative.ids"></QRimage>
        </div>
     </div>
     <div class="space-y-2 text-lg 2xl:text-2xl">
       <p :class="creative.name.length>23?'text-lg font-black font-nave':'text-3xl font-black font-nave'">{{ creative.name }}</p>
       <p class="text-[1.1rem]">{{ creative.format}}</p>
       <p class="text-[1.1rem]">Categories</p>
       <p class="absolute font-nunito text-xs font-thin bg-gray-800 text-white rounded-full px-3 py-1">{{ creative.category }}</p>     </div>
     <div>
        <p>KPIs: {{ creative.kpi }}</p>
     </div>
     <div>
        <p class="text-sm 2xl:text-md">To download the spec guide for this unit, </p>
        <p class="text-sm 2xl:text-md">click the button below.</p>
        <a :href="creative.spec" target="_blank"
         class="cursor-pointer mt-3 absolute text-lg font-bold font-nave
         bg-[#008176] hover:bg-brandgreenlight text-white rounded-full px-4 py-[0.1rem]">Download Now</a>
     </div>
   
  </div>
</template>