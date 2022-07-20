<template>
    <NuxtLink :to="props.url" class="GlobalIcon" :target="props.target">
        <GlobalIcon :icon="icon" />
    </NuxtLink>
</template>

<script lang="ts">
import { GlobalIcon } from "@/components/global/GlobalIcon";
export const SocialLink = defineComponent({
    name: 'SocialLink',
    components: { GlobalIcon },
    props: {
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
    },
    setup(props) {
        return { props };
    }
});

export default SocialLink;
</script>