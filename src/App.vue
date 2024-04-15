<script setup>
import './assets/main.css'
import {RouterView } from 'vue-router'
import FooterBar from '@/components/FooterBar.vue'

</script>

<template>
  <FooterBar />
  <router-view v-slot="{Component}">
    <keep-alive :exclude="'CreativePreview'">
         <component :is="Component" />
    </keep-alive>
  </router-view>

</template>

