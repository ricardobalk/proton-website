<template>
    <div itemtype="https://schema.org/Organization" class="companyInformation">
        <span itemprop="name" class="companyName">{{ data.companyName }}</span>
        <div class="companyAddress" itemprop="address" itemtype="https://schema.org/PostalAddress">
            <span itemprop="streetAddress">{{ data.companyAddress.streetAddress }}</span>
            <span itemprop="postalCode">{{ data.companyAddress.postalCode }}</span>
            <span itemprop="addressLocality">{{ data.companyAddress.addressLocality }}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { CompanyInformation as CompanyInformationProps } from "@/models/CompanyInformation";
    defineProps({
        data: {
            type: Object as () => CompanyInformationProps,
            required: true,
            default: () : CompanyInformationProps => ({
                companyName: 'Proton AG',
                companyAddress: {
                    streetAddress: 'Route de la Galaise 32',
                    postalCode: '1228 Plan-les-Ouates',
                    addressLocality: 'Geneva, Switzerland',
                },
            }),
        },
    });
</script>