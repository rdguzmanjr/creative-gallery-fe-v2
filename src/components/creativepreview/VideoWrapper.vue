<script setup>
import { ref, onMounted, watch } from 'vue'
import digiboardImg from '@/assets/images/digiboard.png'
import tvImg from '@/assets/images/tv.png'

const ctv = ref(null)
const showmute = ref(true)
const isPortrait = ref(false)

const props = defineProps({ srcurl: String  , format:String})

const ctvfullscreen = () => {
  const video = ctv.value
  if (video.requestFullscreen) video.requestFullscreen()
  else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen()
  else if (video.msRequestFullscreen) video.msRequestFullscreen()
}

const detectAspect = () => {
  const video = ctv.value
  if (video.videoWidth && video.videoHeight) {
    isPortrait.value = video.videoHeight > video.videoWidth
  }
}

onMounted(() => {
  console.log('VideoWrapper format prop:', props.format)
  if (ctv.value) {
    ctv.value.addEventListener('loadedmetadata', detectAspect)
  }
})

watch(() => props.srcurl, () => {
  showmute.value = true
  isPortrait.value = false
})

</script>

<template>
   <!-- PHONE VIEW -->
   <div
    v-if="props.format === 'Skinned Video'"
    id="url-wrapper"
    class="bg-[#373B43] relative w-9/12 md:scale-[0.7] lg:scale-[0.8] 2xl:scale-[0.9]"
  >
    <!-- Decorative card background (desktop only) -->
    <div
      class="hidden md:block bg-no-repeat bg-[url('../assets/images/cardbg.png')] absolute top-0 
      w-full h-full bg-[length:400px_auto] bg-[position:calc(100%-50px)_calc(100%+50px)]
      md:w-[500px] md:h-[570px] md:bg-[length:500px_auto] 
      lg:w-[900px] lg:h-[570px] lg:bg-[length:700px_auto] lg:bg-[position:calc(100%-150px)_calc(100%)]
      xl:w-[1000px] xl:h-[600px] xl:bg-[length:800px_auto] xl:bg-[position:calc(100%-50px)_calc(100%+100px)]
      2xl:w-[1500px] 2xl:h-[700px] 2xl:bg-[length:900px_auto] 2xl:bg-[position:calc(100%-200px)_calc(100%+50px)]"
    ></div>

    <!-- Phone content wrapper -->
    <div
      id="phone-wrapper"
      class="max-w-[340px] md:h-auto aspect-[340/677] block 
        md:absolute md:-translate-y-2/4 md:top-[50%] md:-translate-x-2/4 md:left-[30%] 
        lg:left-[50%] 2xl:left-[60%]"
    >
      <!-- HTML content displayed inside the phone -->
     <!-- Video Element -->
      <video
        muted
        autoplay
        playsinline
        controls
        ref="ctv"
        class="w-screen h-screen md:h-auto aspect-[340/677]"
      >
        <source :src="props.srcurl" type="video/mp4" />
      </video>
      
      <!-- Phone frame overlay image (desktop only) -->
      <div class="hidden md:block absolute -top-[136.8px] -left-[90px] w-[520px] pointer-events-none">
        <img width="520" src="/src/assets/images/phone.png" />
      </div>
    </div>
  </div>
  
  
  <div v-else id="video-wrapper" class="bg-[#373B43] relative w-12/12 md:w-9/12">
    <!-- Background Image -->
    <div
      class="hidden md:block absolute top-0 w-full h-full bg-no-repeat
        bg-[url('../assets/images/cardbg.png')] bg-[length:400px_auto] 
        bg-[position:calc(100%-50px)_calc(100%+50px)]
        md:w-[500px] md:h-[570px] md:bg-[length:500px_auto]
        lg:w-[900px] lg:h-[570px] lg:bg-[length:700px_auto] lg:bg-[position:calc(100%-150px)_calc(100%)]
        xl:w-[1000px] xl:h-[600px] xl:bg-[length:800px_auto] xl:bg-[position:calc(100%-50px)_calc(100%+100px)]
        2xl:w-[1500px] 2xl:h-[700px] 2xl:bg-[length:900px_auto] 2xl:bg-[position:calc(100%-200px)_calc(100%+50px)]"
    ></div>

    <!-- TV Wrapper -->
    <div
      id="tv-wrapper"
      :class="isPortrait 
        ? 'md:w-[280px] lg:w-[280px] 2xl:w-[280px] aspect-[9/16] block md:absolute md:-translate-y-2/4 md:top-[45%] md:-translate-x-2/4 md:left-[50%] lg:left-[50%] 2xl:left-[55%]' 
        : 'md:w-[400px] lg:w-[600px] 2xl:w-[720px] aspect-[16/9] block md:absolute md:-translate-y-2/4 md:top-[40%] md:-translate-x-2/4 md:left-[50%] lg:left-[50%] 2xl:left-[55%]'"
    >
      <!-- Video Element -->
      <video
        muted
        autoplay
        ref="ctv"
        :class="isPortrait 
          ? 'md:w-[240px] lg:w-[240px] 2xl:w-[240px] aspect-[9/16]' 
          : 'md:w-[400px] lg:w-[600px] 2xl:w-[720px] aspect-[16/9]'"
        class="w-screen h-screen md:h-auto"
      >
        <source :src="props.srcurl" type="video/mp4" />
      </video>

      <!-- Overlay Image -->
      <div
        class="hidden md:block pointer-events-none absolute"
        :class="isPortrait 
          ? 'md:-top-[10.5px] md:-left-[10px] md:w-[800px] lg:w-[800px] 2xl:w-[800px]' 
          : 'md:-top-[8.5px] md:-left-[5px] md:w-[410px] lg:w-[610px] 2xl:w-[730px]'"
      >
        <img 
        :width="isPortrait ? 260 : 620" 
        :src="isPortrait ? digiboardImg : tvImg" 
        />
      </div>

      <!-- Mute Prompt -->
      <p
        v-if="showmute"
        class="hidden md:block text-black bg-white bg-opacity-50 rounded-sm px-2 py-1 text-sm
          hover:bg-opacity-80 active:bg-opacity-100 absolute cursor-pointer shadow-2xl
          top-[15px] left-[20px] drop-shadow-[10px_10px_10px_rgba(0,0,0,0.5)]"
        @click="ctv.muted=false; showmute=false; ctv.play()"
      >
        Click for Sound
      </p>

      <!-- Preview Label -->
      <p
        :class="isPortrait 
          ? 'hidden md:block absolute text-white font-bold text-xl -bottom-[0px] -translate-x-2/4 md:left-[52%]' 
          : 'hidden md:block absolute text-white font-bold text-xl -bottom-[120px] -translate-x-2/4 md:left-1/2'"
      >
        {{ isPortrait ? 'DOOH+ Preview' : 'CTV Preview' }}
      </p>

      <!-- Fullscreen Button -->
      <p
        :class="isPortrait 
          ? 'hidden md:block absolute text-white font-bold text-md -bottom-[80px] -translate-x-2/4 md:left-[45%] cursor-pointer bg-brandgreen px-2 py-1 rounded-sm hover:bg-brandgreendark active:bg-brandgreenlight'
          : 'hidden md:block absolute text-white font-bold text-md -bottom-[160px] -translate-x-2/4 md:left-1/2 cursor-pointer bg-brandgreen px-2 py-1 rounded-sm hover:bg-brandgreendark active:bg-brandgreenlight'"
        @click="ctvfullscreen"
      >
        View Fullscreen
      </p>
    </div>
  </div>
</template>

