<script setup>
import { useSingleCreativeStore } from '@/stores/creative'
import CreativeInfo from '@/components/creativepreview/CreativeInfo.vue'
import PreviewWindow from '@/components/creativepreview/PreviewWindow.vue'
import { useRoute, useRouter } from 'vue-router';
import { onUnmounted } from 'vue';

const route = useRoute();

const creativeStore= useSingleCreativeStore();

creativeStore.getCreativeById(route.params.id);


onUnmounted(()=>{
    console.log('reset single creatives....')
    creativeStore.reset();
})


</script>

<template>
    <div id="info-wrapper" class="bg-[#373B43] w-screen h-screen flex flex-row justify-between">
            <PreviewWindow :creative="creativeStore"></PreviewWindow>
            <CreativeInfo :creative="creativeStore" v-if="creativeStore.srctype"></CreativeInfo>
    </div>
</template>