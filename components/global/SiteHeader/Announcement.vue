<template>
    <div class="announcement">
        <slot />
    </div>
</template>

<style lang="postcss">
.announcement {
    @apply flex flex-col px-2 py-3 bg-proton-default text-white text-center font-semibold;
}
</style>

<script>
const Announcement = defineComponent({
    name: 'Announcement'
});

export default Announcement;
</script>