<template>
    <div class="socialLinks">
        <SocialLink v-for="(link, index) in SocialLinksData" :icon="link.icon" :url="link.url" :key="index" />
    </div>
</template>

<script lang="ts">
import { SocialLink } from "@/components/global/SiteFooter/Links/SocialLinks/SocialLink.vue";
import { SocialLinks as SocialLinksData } from '@/data/Footer/SocialLinks';

export const SocialLinks = defineComponent({
    name: 'SocialLinks',
    components: {
        SocialLink,
    },
    setup() {
        return { SocialLinksData };
    }
});

export default SocialLinks;
</script>