export interface CompanyAddress extends Record<string, string> {
    streetAddress: string;
    postalCode: string;
    addressLocality: string;
}

export type CompanyInformation = {
    companyName: string;
    companyAddress: CompanyAddress;
}

export const ExampleData : CompanyInformation = {
    companyName: "Example Company",
    companyAddress: {
        streetAddress: "123 Main St",
        postalCode: "12345",
        addressLocality: "Example City, Example State",
    },
}

export default CompanyInformation;