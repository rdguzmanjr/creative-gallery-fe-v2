<script setup>
import { useSingleCreativeStore } from '@/stores/creative'
import CreativeInfo from '@/components/creativepreview/CreativeInfo.vue'
import PreviewWindow from '@/components/creativepreview/PreviewWindow.vue'
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();

const creativeStore= useSingleCreativeStore();
creativeStore.getCreativeById(route.params.id);

</script>

<template>

    <div id="info-wrapper" class="bg-brandgrayblue w-screen h-screen flex flex-row">
            <PreviewWindow :creative="creativeStore"></PreviewWindow>
            <CreativeInfo :creative="creativeStore" v-if="creativeStore.srctype"></CreativeInfo>
    
    </div>
</template>