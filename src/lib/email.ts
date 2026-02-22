import { QuoteFormData } from '@/types';

interface EmailResult {
  success: boolean;
  error?: string;
}

export async function sendEmailNotification(data: QuoteFormData): Promise<EmailResult> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return { success: false, error: 'Email service not configured.' };
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New Quote Request from ${data.name} - ${data.property_name || 'No Property Name'}`,
        from_name: data.name,
        email: data.email,
        phone: data.phone,
        property_name: data.property_name,
        property_type: data.property_type,
        room_count: data.room_count,
        inquiry_type: data.inquiry_type,
        message: data.message,
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      return { success: false, error: result.message || 'Failed to send email.' };
    }

    return { success: true };
  } catch (err) {
    return { success: false, error: err instanceof Error ? err.message : 'Unknown error.' };
  }
}
