import React from 'react'

const Contact = () => {
  return (
    <section class="contact">
    <h1 class="pseudo-title">Get in touch</h1>
    <p className="subtitle">Send your message to us </p>
<hr />
    <form action="get" class="contact-form">
     <div class="form-row">
         <label for="full-name">
             <strong>Full name
                 <span class="asterick">*</span>
             </strong>
             <br />
             <input type="text" name="full_name" placeholder="Adeoye michael" />
         </label>
         <label for="email">
             <strong>Email
                 <span class="asterick">*</span>
             </strong>
             <br />
             <input type="text" name="email" placeholder="ayomipo20188@gmail.com" />
         </label>
     </div>
     <br />
     <div class="form-row">
         <label for="Phone">
             <strong>Phone
                 <span class="asterick">*</span>
             </strong>
             <br />
             <input type="text" name="Phone" placeholder="Phone" />
         </label>
         <label for="subject">
             <strong>subject
                 <span class="asterick">*</span>
             </strong>
             <br />
             <input type="text" name="subject" placeholder="subject..." />
         </label>

     </div>
     <div class="form-row">        
<label for="message">
 <strong>
     Message
     <span class="asterick">*</span>
 </strong>
 <br />
   <textarea name="message" class="msg-content" placeholder="Your message goes here..."></textarea>

 </label>
</div>
<div class="submission-row">
 <span class="required">
     <span class="asterick">*</span>
     <span class="required">required</span>
 </span>
     <button type="submit" class="btn primary lg">SEND MESSAGE</button>
     <span class="placeholder-text">vira at port acan. Orci non</span>
 
</div>
 </form> 

 </section>
  )
}

export default Contact
