<template>
    <NavigationMenu :items="items" class="quickLinks" />
</template>

<script lang="ts">
    import { NavigationMenu } from '@/components/global/Navigation/NavigationMenu.vue';
    import { FooterLinksQuick as items } from '@/data/Footer/FooterLinksQuick';

    export const QuickLinks = defineComponent({
        name: 'QuickLinks',
        components: {
            NavigationMenu
        },
        setup(props, context) {
            return { props, context, items };
        }
    });
    export default QuickLinks;
</script>