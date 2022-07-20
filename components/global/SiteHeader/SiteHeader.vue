<template>
    <header class="siteHeader">
        <NuxtLink to="/">
            <GlobalIcon icon="LogoProton" class="protonLogo" />
        </NuxtLink>
        <Announcement v-if="false">
            Introducing the updated Proton. More services, one privacy mission. Learn more
        </Announcement>
    </header>
</template>

<style lang="postcss">
.siteHeader {
    @apply px-4 py-4 container;
    .protonLogo {
        @apply text-proton-default;
    }
}
</style>

<script setup lang="ts">
    import GlobalIcon from '@/components/global/GlobalIcon';
    import Announcement from '@/components/global/SiteHeader/Announcement.vue';
    import NavigationExample from '@/components/global/Navigation/NavigationExample.vue';
</script>