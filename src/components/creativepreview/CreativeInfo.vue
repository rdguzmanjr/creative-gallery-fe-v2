<script setup>

import QRimage from '@/components/QRimage.vue'

const props=defineProps({creative:Object})

</script>

<template>
  <div id="creativeinfo" class="hidden h-screen space-y-14  md:flex flex-col justify-center bg-[#373B43] text-[#f5ffde] pb-20
  min-w-[20rem] 2xl:min-w-[25rem]
  2xl:space-y-20 z-[0]
  ">
      <div class="space-y-4">
        <p class="text-md 2xl:text-lg">Preview creative on your device</p>
        <div class="w-[10rem] 2xl:w-[10.4rem]">
            <QRimage :creativeId="creative.ids"></QRimage>
        </div>
     </div>
     <div class="space-y-3  text-lg 2xl:text-2xl">
       <p :class="creative.name.length>23?'text-lg font-black font-nave':'text-3xl font-black font-nave'">{{ creative.name }}</p>
       <p class="text-md">{{ creative.format}}</p>
       <p class="text-md">Categories</p>
       <p class="absolute font-nunito text-xs font-thin bg-gray-100 text-black rounded-sm px-2 py-[0.1rem]">{{creative.category}}</p>
     </div>
     <div>
        <p>KPIs: {{ creative.kpi }}</p>
     </div>
     <div>
        <p class="text-sm 2xl:text-lg">To download the spec guide for this unit, </p>
        <p class="text-sm 2xl:text-lg">click the button below.</p>
        <a :href="creative.spec" target="_blank"
         class="cursor-pointer mt-3 absolute font-nunito text-sm font-thin
         bg-brandgreendark hover:bg-brandgreenlight text-white rounded-sm px-2 py-[0.1rem]">Download Now</a>
     </div>
   
  </div>
</template>