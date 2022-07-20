<template>
    <div class="swissConfederation">
        <div class="logoContainer">
            <GlobalIcon icon="SwissConfederation"
                        alt="Swiss Confederation Logo"
                        title="Swiss Confederation"
                        class="logo" />
        </div>

        <div class="textContainer">
            <span lang="de">Schweizerische Eidgenossenschaft</span><br>
            <span lang="fr">Confédération Suisse</span><br>
            <span lang="it">Confederazione Svizzera</span><br>
            <span lang="rm">Confederaziun Svizra</span><br>
            <span lang="en">Swiss Confederation</span><br>
            <span class="innosuisse">Innosuisse - Swiss Innovation Agency</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import GlobalIcon from '@/components/global/GlobalIcon';
</script>

<style lang="postcss">
.swissConfederation {
    @apply flex flex-nowrap;
    .logoContainer {
        @apply mr-4 md:mr-2;
    }
    .textContainer {
        @apply text-xs text-gray-700 flex flex-col;
        .innosuisse {
            @apply font-bold block mt-1;
        }
    }
}
</style>