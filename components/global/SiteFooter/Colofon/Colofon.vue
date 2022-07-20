<template>
    <section class="colofon">
        <CompanyInformation :data="CompanyInformationData" />
        <Sponsors class="sponsors" />
    </section>
</template>

<script lang="ts">
    import { CompanyInformation } from "@/components/global/SiteFooter/Colofon/CompanyInformation.vue";
    import { CompanyInformation as CompanyInformationData } from '@/data/Footer/CompanyInformation';

    import Sponsors from "@/components/global/SiteFooter/Colofon/Sponsors"

    export const Colofon = defineComponent({
        name: 'Colofon',
        components: {
            CompanyInformation,
            Sponsors,
        },
        setup() {
            return { CompanyInformationData }
        }
    });

    export default Colofon;
</script>