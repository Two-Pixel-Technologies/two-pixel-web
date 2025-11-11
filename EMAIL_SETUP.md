# Email Setup Guide

The contact form is now configured to send emails to **twopixeltech@gmail.com** when users submit the form.

## Setting Up Email Integration

You have two options to set up email delivery:

### Option 1: Formspree (Recommended - Free & Easy)

1. **Go to [Formspree.io](https://formspree.io/)** and sign up for a free account
2. **Create a new form** in your Formspree dashboard
3. **Set the email to**: `twopixeltech@gmail.com`
4. **Copy your Form ID** (it will look like: `xyzabc123`)
5. **Update the code** in `src/components/Contact.tsx`:
   - Find line 31: `const formspreeEndpoint = 'https://formspree.io/f/xvgoepdb'`
   - Replace `xvgoepdb` with your actual Form ID

**Example:**
```typescript
const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID_HERE'
```

**Note:** The first submission will require email verification. After that, all submissions will automatically forward to your email.

### Option 2: Web3Forms (Alternative)

1. **Go to [Web3Forms.com](https://web3forms.com/)** and create a free account
2. **Get your Access Key**
3. **Update the Contact.tsx file** to use Web3Forms API:

```typescript
const response = await fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    access_key: 'YOUR_ACCESS_KEY_HERE',
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    business: formData.business,
    message: formData.message,
  }),
})
```

## Features Already Implemented ✅

- ✅ Form validation (all fields required)
- ✅ Loading state while submitting ("Sending..." button text)
- ✅ Success message with green checkmark
- ✅ Error message with instructions
- ✅ Form automatically resets after successful submission
- ✅ Messages auto-dismiss after 5 seconds
- ✅ Beautiful animations using Framer Motion
- ✅ Mobile responsive design

## Testing the Form

1. Fill out all the fields in the contact form
2. Click "Send Message"
3. You'll see a "Sending..." state
4. After successful submission, you'll see: ✅ "Thank you! Your message has been sent successfully..."
5. The form will clear automatically
6. Check your email (twopixeltech@gmail.com) for the submission

## Email Format

Each submission will include:
- **Name**: Customer's name
- **Email**: Customer's email (set as reply-to)
- **Phone**: Customer's phone number
- **Business Type**: Type of business
- **Message**: Their inquiry/message
- **Subject**: "New Contact Form Submission from [Customer Name]"

## Need Help?

If you have any issues:
1. Check browser console for errors
2. Verify your Formspree Form ID is correct
3. Make sure you've verified your email with Formspree
4. Check your spam folder for the verification email

