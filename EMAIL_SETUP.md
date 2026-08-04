# Email Configuration Setup

To enable the contact form functionality, you need to set up EmailJS:

## Steps:

1. **Create an EmailJS account** at [https://www.emailjs.com/](https://www.emailjs.com/)

2. **Create a new service** (Gmail, Outlook, etc.)

3. **Create an email template** with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{to_name}}` - Your name (Harsha)
   - `{{message}}` - Message content

4. **Get your credentials:**
   - Service ID
   - Template ID  
   - Public Key

5. **Update the Contact.jsx file:**
   Replace the placeholder values in the `emailjs.send()` function:
   ```javascript
   await emailjs.send(
     "YOUR_SERVICE_ID",      // Replace with your service ID
     "YOUR_TEMPLATE_ID",     // Replace with your template ID
     {
       from_name: formData.name,
       to_name: "Harsha",
       from_email: formData.email,
       to_email: "harshaalapati1324@gmail.com",
       message: formData.message,
     },
     "YOUR_PUBLIC_KEY"       // Replace with your public key
   );
   ```

6. **Uncomment the EmailJS code** in `/src/sections/Contact.jsx`

For now, the form shows a success message without actually sending emails.