import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const resend = new Resend(apiKey)

export async function sendEmail({firstName, lastName, email, phone, comments, pledgeVal}) {

    const message = `
        You have received a new pledge from ${firstName} ${lastName}. \n
        ${firstName} ${lastName} has pledged $${pledgeVal}${comments ? `, with the comments : ${comments}` : '.'}\n
        
        ${firstName} ${lastName}
        ${email}
        ${phone ? phone : ""}
    `;

    const msg = {
        from: process.env.RESEND_FROM,
        to: "bradyscholars16@gmail.com",
        subject: `New Message from ${firstName}`,
        text: message,
        replyTo: email
    };

    try {
        const {data, error} = await resend.emails.send(msg);

        if (error) {
            console.error('Resend Error! ', error);
            return false
        }

        console.log("Email sent, id:", data?.id);

        return true

    } catch (error) {
        console.error('Error sending email:', error.response?.body || error.message);
        return false;
    }

}