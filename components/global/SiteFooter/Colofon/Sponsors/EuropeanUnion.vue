<template>
    <div class="europeanUnion">
        <div class="logoContainer">
            <GlobalIcon icon="EUFlag" alt="Flag of the European Union" title="EU Flag" class="logo" />
        </div>
        <div class="textContainer" lang="en">
            This project is supported<br>
            by the European Union's<br>
            Horizon 2020 program<br>
            (Grant No 848554)
        </div>
    </div>
</template>

<style lang="postcss">
.europeanUnion {
    @apply flex flex-nowrap w-max lg:ml-6;

    .logoContainer {
        @apply mr-4 md:mr-2;
    }

    .textContainer {
        @apply text-xs text-gray-700;
    }
}
</style>

<script lang="ts" setup>
    import GlobalIcon from '@/components/global/GlobalIcon';
</script>