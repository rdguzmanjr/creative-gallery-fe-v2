<script setup>

import CeltraWrapper from './CeltraWrapper.vue'
import VideoWrapper from './VideoWrapper.vue'
import URLWrapper from './URLWrapper.vue'

const props=defineProps({creative:Object})
</script>

<template>
    <CeltraWrapper v-if="creative.srctype=='celtra' "  :srcurl="creative.srcurl" :format="creative.format"></CeltraWrapper>
    <VideoWrapper  v-else-if="creative.srctype=='video' "  :srcurl="creative.srcurl"></VideoWrapper>
    <URLWrapper    v-else-if="creative.srctype=='url' "   :srcurl="creative.srcurl" :format="creative.format"></URLWrapper>
</template>