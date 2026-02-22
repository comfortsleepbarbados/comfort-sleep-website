import { QuoteFormData } from '@/types';

export interface ValidationError {
  field: keyof QuoteFormData;
  message: string;
}

export function validateQuoteForm(data: QuoteFormData): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!data.name.trim()) {
    errors.push({ field: 'name', message: 'Full name is required.' });
  }

  if (!data.email.trim()) {
    errors.push({ field: 'email', message: 'Email address is required.' });
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push({ field: 'email', message: 'Please enter a valid email address.' });
  }

  if (!data.property_type) {
    errors.push({ field: 'property_type', message: 'Please select a property type.' });
  }

  if (!data.inquiry_type) {
    errors.push({ field: 'inquiry_type', message: 'Please select an inquiry type.' });
  }

  if (!data.message.trim()) {
    errors.push({ field: 'message', message: 'Message is required.' });
  } else if (data.message.trim().length < 10) {
    errors.push({ field: 'message', message: 'Message must be at least 10 characters.' });
  }

  return errors;
}
