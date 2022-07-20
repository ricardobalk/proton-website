<template>
    <NavigationMenu :items="NavItems" class="navMenuExample" />
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

<script lang="ts" setup>
    import                              NavigationMenu           from  './NavigationMenu.vue';
    import {  ExampleData          as   NavItems              }  from  "@/models/Navigation";
</script>