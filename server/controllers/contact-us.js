const contactUs = require('../models/contact-us')
const nodemailer = require('nodemailer');

async function handleCreateComment(req ,res){
    const {email , name , comment}= req.body;
   try{
    await contactUs.create({
        email , name , comment
    })
    await sendMail(email , comment);
    return res.send("done")
   }
   catch (error) {
    console.log('not send data ', error)
}

}
module.exports = {handleCreateComment}




//3. cofigure mail and send it
async function sendMail(email,comment ){
    //1. create an email transporter.
    //SMTP (Simple Mail Transfer Protocol)
   const transporter =  nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'abbasbahi289@gmail.com',
            pass: 'tytjixulbyfleurf'
        }
    })


    //2.configure email content.
    const mailOptions = {
        from:email,
        to: "abbasbahi289@gmail.com",
        subject:'abi taka to kuch naek' ,
        text: comment,
    }

    //3. send email
    try {
       const result = await transporter.sendMail(mailOptions);
       console.log('Eamil sent successfully')
    } catch (error) {
        console.log('Email send failed with error:', error)
    }
}