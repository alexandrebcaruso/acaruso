// src/lib/seo.ts
interface Metadata {
    title: string;
    description: string;
    city?: string;
    region?: string;
}

export const defaultMetadata: Metadata = {
    title: "A. Caruso | Agência Digital em Osório/RS",
    description: "Soluções em marketing digital para empresas de Osório",
    city: "Osório",
    region: "RS"
};

export const getServiceSchema = (serviceName: string) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "serviceType": serviceName,
    "provider": {
        "@type": "ProfessionalService",
        "name": "A. Caruso",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Osório",
            "addressRegion": "RS"
        }
    }
});