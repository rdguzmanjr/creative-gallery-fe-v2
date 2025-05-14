<script setup>
import { ref, onMounted, watch } from 'vue'

const ctv = ref(null)
const showmute = ref(true)
const isPortrait = ref(false)

const props = defineProps({
  srcurl: String
})

const ctvfullscreen = () => {
  if (ctv.value.requestFullscreen) {
    ctv.value.requestFullscreen()
  } else if (ctv.value.webkitRequestFullscreen) {
    ctv.value.webkitRequestFullscreen()
  } else if (ctv.value.msRequestFullscreen) {
    ctv.value.msRequestFullscreen()
  }
}

const detectAspect = () => {
  const video = ctv.value
  if (video.videoWidth && video.videoHeight) {
    isPortrait.value = video.videoHeight > video.videoWidth
  }
}

// Run aspect detection when metadata is loaded
onMounted(() => {
  if (ctv.value) {
    ctv.value.addEventListener('loadedmetadata', detectAspect)
  }
})

// Watch for src changes
watch(() => props.srcurl, () => {
  showmute.value = true
  isPortrait.value = false
})
</script>

<template>
  <div id="video-wrapper" class="bg-brandgrayblue relative w-12/12 md:w-9/12">
  
    <div 
  id="tv-wrapper"
  :class="isPortrait 
    ? 'md:w-[280px] lg:w-[280px] 2xl:w-[280px] aspect-[9/16] block md:absolute md:-translate-y-2/4 md:top-[45%] md:-translate-x-2/4 md:left-[50%] lg:left-[50%] 2xl:left-[55%]' 
    : 'md:w-[400px] lg:w-[600px] 2xl:w-[720px] aspect-[16/9] block md:absolute md:-translate-y-2/4 md:top-[40%] md:-translate-x-2/4 md:left-[50%] lg:left-[50%] 2xl:left-[55%]'"
  >
    
  <video muted autoplay 
    ref="ctv"
    :class="isPortrait
      ? 'md:w-[240px] lg:w-[240px] 2xl:w-[240px] aspect-[9/16]' 
      : 'md:w-[400px] lg:w-[600px] 2xl:w-[720px] aspect-[16/9]'"
    class="w-screen h-screen md:h-auto">
        <source :src="props.srcurl" type="video/mp4" />
      </video>

      <!-- Overlay image, based on orientation -->
      <div 
      class="hidden md:block pointer-events-none absolute"
      :class="isPortrait 
        ? 'md:-top-[4px] md:-left-[280px] md:w-[800px] lg:w-[800px] 2xl:w-[800px]' 
        : 'md:-top-[8.5px] md:-left-[5px] md:w-[410px] lg:w-[610px] 2xl:w-[730px]'">
        <img width="800" :src="isPortrait ? '/src/assets/images/digiboard.png' : '/src/assets/images/tv.png'" />
      </div>

      <p v-if="showmute" class="hidden md:block text-black bg-white bg-opacity-50 rounded-sm px-2 py-1 text-sm
          hover:bg-opacity-80 active:bg-opacity-100 absolute cursor-pointer shadow-2xl
          top-[15px] left-[20px] drop-shadow-[10px_10px_10px_rgba(0,0,0,0.5)]"
         @click="ctv.muted=false;showmute=false;ctv.play()">Click for Sound</p>

      <p 
      
      :class="isPortrait 
        ? 'hidden md:block absolute text-white font-bold text-xl -bottom-[0px] -translate-x-2/4 md:left-[52%]' 
        : 'hidden md:block absolute text-white font-bold text-xl -bottom-[120px] -translate-x-2/4 md:left-1/2'"
        >
      {{ isPortrait ? 'DOOH+ Preview' : 'CTV Preview' }}
    </p>

      <p 
      :class="isPortrait 
        ? 'hidden md:block absolute text-white font-bold text-md -bottom-[80px] -translate-x-2/4 md:left-[45%] cursor-pointer bg-brandgreen px-2 py-1 rounded-sm  hover:bg-brandgreendark active:bg-brandgreenlight'
        : 'hidden md:block absolute text-white font-bold text-md -bottom-[160px] -translate-x-2/4 md:left-1/2 cursor-pointer bg-brandgreen px-2 py-1 rounded-sm  hover:bg-brandgreendark active:bg-brandgreenlight'"
         @click="ctvfullscreen">View Fullscreen</p>
    </div>
  </div>
</template>

