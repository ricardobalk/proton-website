<template>
    <nav>
      <NavigationGroup :items="items" class="navRoot" />
    </nav>
</template>

<script lang="ts" setup>
    import {  NavigationMenu       as   NavigationMenuType    }   from   "@/models/Navigation";
    import                              NavigationGroup           from   "@/components/global/Navigation/NavigationGroup.vue";

    defineProps({
        items: {
            type: Array as () => NavigationMenuType,
            required: true
        }
    });
</script>