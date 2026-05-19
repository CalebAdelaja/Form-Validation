# Standalone Project

A simple contact form demo built with HTML, CSS, and JavaScript.

## Project Structure

- `Index.html` - main page containing the contact form
- `style.css` - styles for the form layout and appearance
- `main.js` - client-side validation for the form fields

## Features

- Validates first name and last name for non-empty values
- Validates email format
- Validates message length (minimum 10 characters)
- Validates that the checkbox is checked before submitting
- Clears inline error messages while the user types
- Prevents page reload on invalid submit

## How to Use

1. Open `Index.html` in a web browser.
2. Fill in all fields:
   - First Name
   - Last Name
   - Email
   - Message
3. Check the terms agreement checkbox.
4. Click **Send Message**.

If all fields are valid, the form will reset after submission.

## Notes

- The form uses client-side JavaScript validation only.
- No backend or server submission is included in this version.

## Tips

- Keep the browser console open for debugging if the form does not behave as expected.
- Update `main.js` if you want to add more validation rules or change form behavior.
