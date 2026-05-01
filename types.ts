export interface StaticSiteBackbone {
  business: {
    name: string;
    address: string;
    phone: string;
    description: string;
    tagline: string;
    website: string;
  };
  hours: Record<string, string>;
  offers: {
    title: string;
    description: string;
    terms?: string;
    validUntil?: string;
  }[];
  hero: {
    title: string;
    subtitle: string;
    backgroundImages: string[];
  };
  gallery: string[];
  socialMedia: {
    instagram?: string;
    facebook?: string;
  };
  actions: {
    orderOnlineUrl?: string;
  };
  design: {
    palette: {
      primary: string;
      secondary: string;
      accent: string;
    };
    logo?: string;
  };
  branding: {
    description: {
      tagline: string;
      summary: string;
    };
  };
}