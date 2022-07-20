<template>
    <NuxtLink :to="url" class="GlobalIcon" :target="target">
        <GlobalIcon :icon="icon" />
    </NuxtLink>
</template>

<script lang="ts" setup>
import GlobalIcon from "@/components/global/GlobalIcon";

defineProps({
        url: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        target: {
            type: String,
            required: false,
            default: '_blank'
        },
});
</script>