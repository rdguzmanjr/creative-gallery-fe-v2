<script setup>

import CeltraWrapper from './CeltraWrapper.vue'
import VideoWrapper from './VideoWrapper.vue'
import URLWrapper from './URLWrapper.vue'
import { useCreativeStore } from '@/stores/creative'

const creativeStore= useCreativeStore();

creativeStore.view = "preview";
const props=defineProps({creative:Object})
</script>

<template>
    <CeltraWrapper v-if="creative.srctype == 'celtra'" :srcurl="creative.srcurl" :format="creative.format" />
    <VideoWrapper v-else-if="creative.srctype == 'video'" :srcurl="creative.srcurl" :format="creative.format" />
    <URLWrapper v-else-if="creative.srctype == 'url'" :srcurl="creative.srcurl" :format="creative.format" />
</template>