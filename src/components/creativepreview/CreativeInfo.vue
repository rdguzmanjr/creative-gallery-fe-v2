<script setup>

import QRimage from '@/components/QRimage.vue'

const props=defineProps({creative:Object})

</script>

<template>
  <div id="creativeinfo" class="hidden h-screen space-y-12  md:flex flex-col justify-center bg-brandgrayblue text-white pb-20
  max-w-[15.5rem] 2xl:max-w-[20rem]
  2xl:space-y-20 z-[0]
  ">
    <div class="space-y-4">
        <p>Preview creative on your device</p>
        <div class="w-[10.4rem]">
            <QRimage :creativeId="creative.ids"></QRimage>
        </div>
     </div>
     <div class="space-y-3 font-volkorn text-xl">
       <p class="text-3xl">{{ creative.name }}</p>
       <p>{{ creative.format}}</p>
       <p>Categories</p>
       <p class="absolute font-nunito text-xs font-thin bg-gray-100 text-black rounded-sm px-2 py-[0.1rem]">{{creative.category}}</p>
     </div>
     <div>
        <p>KPIs: {{ creative.kpi }}</p>
     </div>
     <div>
        <p>To download the spec guide for this unit, </p>
        <p>click the button below.</p>
        <a :href="creative.spec" target="_blank"
         class="cursor-pointer mt-3 absolute font-nunito text-sm font-thin
         bg-brandgreendark text-white rounded-sm px-2 py-[0.1rem]">Download Now</a>
     </div>
   
  </div>
</template>