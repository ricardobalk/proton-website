<template>
    <NavigationMenu :items="items" class="navMenuExample" />
</template>

<style lang="postcss">
 .navMenuExample {
     @apply p-2;

     .navGroup {
         @apply pl-4;

         &.navRoot {
             @apply pl-0;
         }

         .navItem {
             @apply font-medium;

             &.navText {
                 @apply text-gray-600;
             }

             &.navLink {
                 @apply underline text-blue-700;
             }
         }
     }
 }
</style>

<script lang="ts">
import {                            defineComponent       }  from  'vue';
import {                            NavigationMenu        }  from  './NavigationMenu.vue';
import {  ExampleData          as   NavItems              }  from  "@/models/Navigation";

export const NavigationExample = defineComponent({
    name: 'NavigationExample',
    components: {
        NavigationMenu
    },
    setup() {
        return {
            items: NavItems
        };
    }
});

export default NavigationExample;
</script>