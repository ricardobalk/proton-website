import type { CompanyInformation as CompanyInformationType } from "@/models/CompanyInformation";

export const CompanyInformation : CompanyInformationType = {
    companyName: "Proton AG",
    companyAddress: {
        streetAddress: "Route de la Galaise 32",
        postalCode: "1228 Plan-les-Ouates",
        addressLocality: "Geneva, Switzerland",
    },
}

export default CompanyInformation;