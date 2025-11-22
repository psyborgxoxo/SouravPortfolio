import { NextApiRequest, NextApiResponse } from 'next';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return false;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message }: ContactFormData = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        details: 'Name, email, and message are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email format',
        details: 'Please provide a valid email address'
      });
    }

    // For demo purposes, we'll simulate sending an email
    // In production, you would integrate with:
    // - SendGrid
    // - Mailgun
    // - Amazon SES
    // - Resend
    // - Or other email service

    console.log('📧 Contact Form Submission:', {
      timestamp: new Date().toISOString(),
      from: email,
      name,
      subject: subject || 'Contact from Portfolio',
      message,
      userAgent: req.headers['user-agent'],
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
    });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Generate a unique ID for tracking
    const submissionId = `MSG-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Success response
    return res.status(200).json({
      success: true,
      message: 'Message sent successfully!',
      submissionId,
      timestamp: new Date().toISOString(),
      nextSteps: 'I will get back to you within 24 hours.',
      contactOptions: [
        'Direct email: souravshetty11@gmail.com',
        'LinkedIn: Available in contact section',
        'GitHub: https://github.com/sourav-10'
      ]
    });

  } catch (error) {
    console.error('❌ Contact form error:', error);
    
    return res.status(500).json({
      error: 'Internal server error',
      message: 'Sorry, there was an error sending your message. Please try again or contact me directly.',
      fallback: {
        email: 'souravshetty11@gmail.com',
        phone: '+91 6360642212'
      }
    });
  }
}
