import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Configuration du transporteur (à remplacer par vos infos SMTP)
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'y.elwardi@uhp.ac.ma',
            pass: 'fxga mslk iype jqms'
        }
    });

    // Configuration de l'email
    const mailOptions = {
      from: `"Site MEDEX" <y.elwardi@uhp.ac.ma>`,
      to: 'youssefxp07@gmail.com',
      replyTo: email,
      subject: `Nouveau message: ${subject}`,
      html: `
        <h3>Nouveau message de ${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );
  }
}