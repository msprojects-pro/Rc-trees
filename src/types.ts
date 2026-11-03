export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: string;
  iconName: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceRequired: string;
  projectDescription: string;
}
