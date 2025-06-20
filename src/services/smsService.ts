// SMS Service - CURRENTLY DISABLED
// 
// This service is disabled because direct calls to external SMS APIs from the frontend
// are blocked by browser CORS policies. SMS functionality requires a backend server
// to proxy requests and securely handle API keys.
//
// To enable SMS functionality:
// 1. Set up a backend server (Node.js, Python, etc.)
// 2. Create an API endpoint that handles SMS requests
// 3. Move the SMS API calls to the backend
// 4. Call your backend endpoint from the frontend instead

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendSMSMessage = async (formData: ContactFormData): Promise<void> => {
  // SMS functionality is currently disabled due to CORS restrictions
  // This function is kept for future backend implementation
  
  console.warn('SMS service is disabled - requires backend server for CORS and security');
  
  // The following code would work with a proper backend implementation:
  /*
  try {
    const phoneNumber = '6395227506'; // Your phone number
    
    const messageBody = `📩 New Support Message from Task Manager

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📝 Subject: ${formData.subject}
💬 Message: ${formData.message}`;

    // This would need to be your backend endpoint instead of direct API call
    const response = await fetch('/api/send-sms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: phoneNumber,
        message: messageBody,
      }),
    });

    if (!response.ok) {
      throw new Error(`SMS API error: ${response.status}`);
    }

    const result = await response.json();
    console.log('SMS sent successfully:', result);
  } catch (error) {
    console.error('SMS sending failed:', error);
    throw error;
  }
  */
};