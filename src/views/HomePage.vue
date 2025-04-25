
<script setup>

import { useCreativeStore,useFilterStore } from '@/stores/creative'
import { ref } from 'vue'
import HeroSection from '../components/HeroSection.vue';
import CreativeCard from '../components/CreativeCard.vue';
import CardWrapper from '../components/CardWrapper.vue';
import FilterComponent from '../components/FilterComponent.vue';
import PreloadImage from '../components/PreloadImage.vue'

let showpreload=ref(false);
import gsap from 'gsap'
const creativewrapper=ref(null)

// init pinia stores

const creativeStore= useCreativeStore();
const filterStore= useFilterStore();

creativeStore.getCreativeList();
filterStore.getFilterList();

//infinite scroll logic

window.onscroll=()=>{
   try{
    let bottomOfWindow = creativewrapper.value.$el.getBoundingClientRect().bottom=== window.innerHeight;
      if (bottomOfWindow) {
         creativeStore.loadMoreCreative();
      }
   }catch(e){
      console.log('Err')
   }
}

//card stagger animation
const onEnter=(el,done)=>{

   gsap.from(el, {
      scale: 0,
      duration:0.6,
      ease:'back.out',
      delay: gsap.utils.wrap(0,14,el.dataset.index)*0.15,
      onComplete: done
  })
}


setTimeout(()=>{
   console.log('preload to false')
   showpreload.value=false;
},2000)

</script>

<template>
   <PreloadImage v-if="showpreload"/>
   <div id="wrapper" class="space-y-16" >
       <HeroSection/>
       <FilterComponent 
         :categories="filterStore.categories"
         :advertisers="filterStore.advertisers"
         :products="filterStore.products"
         :kpis="filterStore.kpis"
       />
 
       <div id="gallery" class="h-screen"> <!-- adding h-screen since gallery has no height -->
          <CardWrapper  ref="creativewrapper">
            <TransitionGroup @enter="onEnter">
             
               <CreativeCard v-for="(creative,index) in creativeStore.creatives" :key="index" :creative="creative" :data-index="index"></CreativeCard>
           
            </TransitionGroup>
         </CardWrapper>
      </div>
  
   </div>
</template>
