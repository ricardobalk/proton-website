<template>
    <div class="logoAndSocial">
        <div class="logoContainer">
            <GlobalIcon class="logo" icon="ProtonMark" />
        </div>
        <div class="subtitle">
            <span>
                Proton &ndash; Privacy by default
            </span>
        </div>
        <SocialLinks />
    </div>
</template>

<script lang="ts" setup>
import GlobalIcon from "@/components/global/GlobalIcon";
import SocialLinks from "@/components/global/SiteFooter/Links/SocialLinks";
</script>