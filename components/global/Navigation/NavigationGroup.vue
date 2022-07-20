<template>
    <ul class="navGroup">
        <li class="navList" v-for="(item, index) in items" :key="index">
            <a v-if="item.link" :href="item.link" class="navItem navLink">
                {{ item.text }}
            </a>
            <span v-else class="navItem navText">
                {{ item.text }}
            </span>
            <NavigationGroup v-if="item.children" :items="item.children" />
        </li>
    </ul>
</template>

<script lang="ts" setup>
import type { NavigationItem as NavigationMenuType } from '@/models/Navigation';

defineProps({
    items: {
            type: Array as () => NavigationMenuType[],
            required: true
    }
});
</script>