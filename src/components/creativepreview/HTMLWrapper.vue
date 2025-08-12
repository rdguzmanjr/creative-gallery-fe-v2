<script setup>
import { useSingleCreativeStore } from '@/stores/creative'
import HTMLWrapperLayout from '@/components/creativepreview/HTMLWrapperLayout.vue'
import {ref} from 'vue';

const cteexpanded=ref(false);

const creativeStore= useSingleCreativeStore();

window.addEventListener("message", (event) => {
  
  if ( event.data.hasOwnProperty('action')) {
        console.log ( event.data );
        if(event.data.action=='expandAd'){
            cteexpanded.value=true;
        }else if(event.data.action=='collapseAd'){
            cteexpanded.value=false;
        }
  }
}, false);

const props=defineProps({srchtml:String,format:String})
</script>

<template>
    <div v-if="format=='CTE (Click To Expand)'">
        <HTMLWrapperLayout :show="cteexpanded">
            <div id="ad-space" class="flex justify-center" :class="cteexpanded?'h-full':''" >
                    <iframe
                        :width="cteexpanded?'100%':creativeStore.width"
                        :height="cteexpanded?'100%':creativeStore.height"
                        :src="srchtml"
                        allow="geolocation; camera; microphone; gyroscope; accelerometer; fullscreen"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-downloads"
                    ></iframe>
            </div>
        </HTMLWrapperLayout>
    </div>
    <div v-else-if="creativeStore.width==0 && creativeStore.height==0 ">
        <iframe 
                class="w-full h-full"
                :src="srchtml"
                allow="geolocation; camera; microphone; gyroscope; accelerometer; fullscreen"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-downloads"
            ></iframe>
    </div>
        <HTMLWrapperLayout v-else>
            <div id="ad-space" class="flex justify-center">
                <iframe
                    :width="creativeStore.width"
                    :height="creativeStore.height"
                    :src="srchtml"
                    allow="geolocation; camera; microphone; gyroscope; accelerometer; fullscreen"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-downloads"
                ></iframe>
            </div>
        </HTMLWrapperLayout>
</template>

<style scoped>
    ::-webkit-scrollbar{
        display:none;
    }
</style>