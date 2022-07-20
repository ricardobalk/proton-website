<template>
    <ul class="navGroup">
        <li class="navList" v-for="(item, index) in props.items" :key="index">
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

<script lang="ts">
import { defineComponent } from 'vue';
import type { NavigationItem as NavigationMenuType } from '@/models/Navigation';

export const NavigationGroup = defineComponent({
    name: 'NavigationGroup',
    props: {
        items: {
            // type: Array as PropType<NavigationMenuType[]>, // Official Vue 3 way. Requires `import { PropType } from 'vue'`.
            type: Array as () => NavigationMenuType[],        // Generic ES6 way. No need for imports. Works in React too.
            required: true
        }
    },
    setup(props) {
        return {props};
    }
});

export default NavigationGroup;
</script>