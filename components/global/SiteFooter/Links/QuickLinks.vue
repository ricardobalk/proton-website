<template>
    <NavigationMenu :items="items" class="quickLinks" />
</template>

<script lang="ts" setup>
    import NavigationMenu from '@/components/global/Navigation/NavigationMenu.vue';
    import { FooterLinksQuick as items } from '@/data/Footer/FooterLinksQuick';
</script>