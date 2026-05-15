import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// నీ API Key ని .env.local లో RESEND_API_KEY అనే పేరుతో సేవ్ చేయి
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { content } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'SaaS Studio <onboarding@resend.dev>', // ఒకవేళ నీకు డొమైన్ లేకపోతే ఇది వాడు
      to: ['నీ_ఈమెయిల్@gmail.com'], // టెస్టింగ్ కోసం నీ ఈమెయిల్ ఇవ్వు
      subject: 'New Post Published!',
      text: content,
    });

    if (error) {
      return NextResponse.json({ success: false, error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}