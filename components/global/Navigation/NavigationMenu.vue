<template>
    <nav>
      <NavigationGroup :items="props.items" class="navRoot" />
    </nav>
</template>

<script lang="ts">
    import {                            defineComponent       }   from   "vue";
    import {  NavigationMenu       as   NavigationMenuType    }   from   "@/models/Navigation";
    import {                            NavigationGroup       }   from   "@/components/global/Navigation/NavigationGroup.vue";

    export const NavigationMenu = defineComponent({
        name: 'NavigationMenu',
        components: {
            NavigationGroup
        },

        props: {
            items: {
                type: Array as () => NavigationMenuType,
                required: true
            }
        },

        setup(props) {
            return { props };
        }
    });

    export default NavigationMenu;
</script>