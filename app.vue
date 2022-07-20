<template>
  <SiteHeader />
  <NuxtLayout id="app">
    <NuxtPage />
  </NuxtLayout>
  <SiteFooter />
</template>

<style lang="postcss">
@font-face {
    font-family: "Arizona";
    src: url("/ABCArizonaPlusVariable.woff2") format('woff2');
}

@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  @apply m-6;
}
</style>

<script setup lang="ts">
import SiteHeader from '@/components/global/SiteHeader';
import SiteFooter from '@/components/global/SiteFooter/SiteFooter.vue';
</script>