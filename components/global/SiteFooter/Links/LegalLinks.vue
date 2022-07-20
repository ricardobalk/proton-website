<template>
    <NavigationMenu :items="items" class="legalLinks" />
</template>

<script lang="ts">
    import { NavigationMenu } from '@/components/global/Navigation/NavigationMenu.vue';
    import { FooterLinksLegal as items } from '@/data/Footer/FooterLinksLegal';

    export const LegalLinks = defineComponent({
        name: 'LegalLinks',
        components: {
            NavigationMenu
        },
        setup(props, context) {
            return { props, context, items };
        }
    });
    export default LegalLinks;
</script>