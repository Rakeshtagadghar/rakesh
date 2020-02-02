import fetch from 'isomorphic-fetch'

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send';
const SENDGRID_API_KEY = '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';
const sendEmail = async ({ name, email , subject, message}) => {
    await fetch(SENDGRID_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SENDGRID_API_KEY}`
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [
                {
                  email
                }
              ],
              subject: subject
            }
          ],
          from: {
            email: 'noreply@demo.com',
            name: 'Test SendGrid'
          },
          content: [
            {
              type: 'text/html',
              value: message
            }
          ]
        })
    });
}

export { sendEmail };