export interface ProductFeature {
  label: string;
  value: string;
  icon?: string;
}

export interface Product {
  id: string;
  category: 'residential' | 'commercial' | 'portable';
  seriesName: string; // e.g. "安宸系列"
  subSeries: string; // e.g. "宸 / 煦"
  status?: 'available' | 'coming_soon'; // New field for release status
  name: string;
  tagline: string;
  description: string;
  price: number;
  image: string;
  features: ProductFeature[];
  specs: Record<string, string>;
  bom?: string[]; // New field for Component List
}

export interface CaseStudyData {
  time: string;
  production: number;
  consumption: number;
  batteryLevel: number;
}

export enum ComponentType {
  SolarPanel = 'SolarPanel',
  Inverter = 'Inverter',
  Battery = 'Battery'
}