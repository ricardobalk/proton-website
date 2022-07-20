<template>
    <NavigationMenu :items="items" class="legalLinks" />
</template>

<script lang="ts" setup>
    import NavigationMenu from '@/components/global/Navigation/NavigationMenu.vue';
    import { FooterLinksLegal as items } from '@/data/Footer/FooterLinksLegal';
</script>