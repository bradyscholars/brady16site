
import { sendEmail } from '../../lib/sendEmail'

const allowedOrigin1 = "https://brady16s.org";
const allowedOrigin2 = "https://www.brady16s.org";


export async function POST(req) { // Request type

    const origin = req.headers.get('origin')
    if (origin !== allowedOrigin1 && origin !== allowedOrigin2) {
        return new Response('Forbidden', { status: 403 })
    }

    const body = await req.json()

    const success = await sendEmail(body)

    if (success) return new Response('Success', {status : 200});

    // otherwise failed
    return new Response('Failure...', {status : 500});
}