<template>
    <NavigationMenu :items="FooterNavItems" class="footerNav" />
</template>

<style lang="postcss">
.footerNav {
    .navGroup {
        &.navRoot {
            @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pl-0;
            > .navList {
                @apply mb-0;
            }
        }

        .navList {
          @apply mb-4;

            .navItem {
            @apply text-proton-dark;

                &.navText {
                    @apply inline-block mb-4 font-semibold text-lg;
                }

                &.navLink {
                    @apply hover:text-proton-default;
                }
            }
        }
    }
}
</style>

<script lang="ts" setup>
import                              NavigationMenu     from  '@/components/global/Navigation/NavigationMenu.vue';
import { FooterLinks             as FooterNavItems  }  from  '@/data/Footer/Navigation';
</script>