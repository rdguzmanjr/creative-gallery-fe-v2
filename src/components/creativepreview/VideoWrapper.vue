<script setup>
import {ref} from 'vue'

const ctv=ref(null)

const showmute=ref(true)

const props=defineProps({srcurl:String})


const ctvfullscreen=()=>{
   console.log('full')
  if (ctv.value.requestFullscreen) {
    ctv.value.requestFullscreen();
  } else if (ctv.value.webkitRequestFullscreen) { /* Safari */
    ctv.webkitRequestFullscreen();
  } else if (ctv.value.msRequestFullscreen) { /* IE11 */
    ctv.value.msRequestFullscreen();
  }
}

</script>

<template>
    <div id="video-wrapper" class="bg-brandgrayblue relative w-12/12 md:w-9/12">
        <div id="tv-wrapper" class="md:w-[400px] lg:w-[600px] 2xl:w-[720px] md:h-auto aspect-[16/9] block 
            md:absolute md:-translate-y-2/4 md:top-[40%] md:-translate-x-2/4 md:left-[50%] lg:left-[50%] 2xl:left-[55%]">
            <video muted autoplay 
                ref="ctv"
                class="w-screen h-screen md:w-[400px] lg:w-[600px] 2xl:w-[720px] md:h-auto aspect-[16/9]"
                >
                <source :src="srcurl" type="video/mp4">
            </video>
            <div class="hidden md:block pointer-events-none absolute 
               md:-top-[8.5px] md:-left-[5px] md:w-[410px] lg:w-[610px] 2xl:w-[730px] 2xl:md:-top-[10px] ">
                 <img width=800 src="/src/assets/images/tv.png"/>
            </div>
            <p v-if="showmute" class="hidden md:block text-black bg-white bg-opacity-50 rounded-sm px-2 py-1 text-sm
            hover:bg-opacity-80 active:bg-opacity-100 absolute cursor-pointer shadow-2xl
            top-[15px] left-[20px] drop-shadow-[10px_10px_10px_rgba(0,0,0,0.5)]
            " @click="ctv.muted=false;showmute=false;ctv.play()">Click for Sound</p>
            <p class="hidden md:block absolute text-white font-bold text-xl -bottom-[120px] -translate-x-2/4 md:left-1/2">CTV Preview</p>
            <p class="hidden md:block absolute text-white font-bold 
            text-md -bottom-[160px] -translate-x-2/4 md:left-1/2 cursor-pointer
            bg-brandgreen px-2 py-1 rounded-sm  hover:bg-brandgreendark active:bg-brandgreenlight
            " @click="ctvfullscreen">View Fullscreen</p>
        </div>
    </div>

    
</template>

