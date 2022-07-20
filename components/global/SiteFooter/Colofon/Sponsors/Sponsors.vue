<template>
    <div class="sponsors">
        <span class="title">
            Built with support from
        </span>

        <div class="details">
            <SwissConfederation />
            <EuropeanUnion />
        </div>
    </div>
</template>

<script lang="ts" setup>
    import SwissConfederation from '@/components/global/SiteFooter/Colofon/Sponsors/SwissConfederation.vue';
    import EuropeanUnion      from '@/components/global/SiteFooter/Colofon/Sponsors/EuropeanUnion.vue';
</script>