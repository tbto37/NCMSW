export type InquiryType = 'B2B_SOLUTION' | 'BULK_QUOTE' | 'SAMPLE_REQUEST' | 'GENERAL';

export interface InquiryFormData {
  companyName: string;
  contactPerson: string;
  contactPosition: string;
  phone: string;
  email: string;
  inquiryType: InquiryType;
  estimatedVolume: string;
  content: string;
  agreePrivacy: boolean;
}

export interface InquirySubmitResponse {
  id: number;
  companyName: string;
  contactPerson: string;
  inquiryType: InquiryType;
  createdAt: string;
}
