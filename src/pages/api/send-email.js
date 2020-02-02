

import { sendEmail } from '../../utils/sendEmail';

export default async (req, res) => {
    if(req.method === 'POST') {
      const { name, email , subject, message} = req.body;
      await sendEmail({ name, email, subject, message });
      sLoader.slideUp("slow"); 
      $('.message-warning').fadeOut();
      $('#contactForm').fadeOut();
      $('.message-success').fadeIn();
      return res.status(200).end();
    }
    sLoader.slideUp("slow"); 
    $('.message-warning').html("Something went wrong. Please try again.");
    $('.message-warning').slideDown("slow");
    return res.status(404).json({
        error: {
            code: 'not_found',
            messgae: "The requested endpoint was not found or doesn't support this method."
        }
    });
}