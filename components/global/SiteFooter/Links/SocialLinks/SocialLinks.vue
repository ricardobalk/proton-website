<template>
    <div class="socialLinks">
        <SocialLink v-for="(link, index) in SocialLinksData" :icon="link.icon" :url="link.url" :key="index" />
    </div>
</template>

<script lang="ts" setup>
import SocialLink from "@/components/global/SiteFooter/Links/SocialLinks/SocialLink.vue";
import { SocialLinks as SocialLinksData } from '@/data/Footer/SocialLinks';
</script>