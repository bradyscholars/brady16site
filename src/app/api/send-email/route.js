
import { sendEmail } from '../../lib/sendEmail'

//, "http://localhost:3000"
const allowedOrigins = new Set(["localhost:3000", "https://www.brady16s.org"]);


export async function POST(req) { // Request type

    const origin = req.headers.get('origin')
    if (origin && !allowedOrigins.has(origin)) {
        return new Response('Forbidden', { status: 403 })
    }

    const body = await req.json()

    const success = await sendEmail(body)

    if (success) return new Response('Success', {status : 200});

    // otherwise failed
    return new Response('Failure...', {status : 500});
}