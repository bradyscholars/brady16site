import sgMail from '@sendgrid/mail'

const apiKey = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(apiKey);

export async function sendEmail({firstName, lastName, email, phone, comments, pledgeVal}) {

    const message = `
        You have received a new pledge from ${firstName} ${lastName}. \n\n
        ${firstName} ${lastName} has pledged $${pledgeVal}${comments ? `, with the comments : ${comments}` : '.'}\n\n
        
        ${firstName} ${lastName}\n
        ${email}\n
        ${phone ? phone : ""}
    `;

    const msg = {
        to: 'theomaurino2026@u.northwestern.edu',
        from: 'no-reply@brady16s.org', // works because domain is authenticated
        subject: `NEW PLEDGE FROM ${firstName}`,
        replyTo: email,
        text: message
    };

    try {
        const response = await sgMail.send(msg);
        console.log('Email sent successfully:', response[0].statusCode);
        return true;

    } catch (error) {
        console.error('Error sending email:', error.response?.body || error.message);
        return false;
    }

}