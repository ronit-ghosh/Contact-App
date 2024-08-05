# Contact App with ReactJS & Firebase

This is a CRUD (Create, Read, Update, Delete) Contact Application built using ReactJS and Firebase. The application provides real-time contact management and search functionality. Formik is used for form handling in React, Yup for validation, and Tailwind CSS for styling.

## Features

- **Add Contacts**: Create new contacts with ease.
- **Edit Contacts**: Update existing contact details.
- **Delete Contacts**: Remove contacts from the list.
- **Search Contacts**: Real-time search to quickly find contacts.
- **Real-time Updates**: Syncs contact data in real-time using Firebase.

## Tech Stack

- **Frontend**: ReactJS
- **Backend**: Firebase
- **Form Handling**: Formik
- **Validation**: Yup
- **Styling**: Tailwind CSS

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ronit-ghosh/Contact-App.git
   cd contact-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Firebase**:
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Add a new web app to your Firebase project.
   - Copy your Firebase configuration and replace the placeholders in `src/config/firebase.js` with your Firebase credentials.

4. **Start the application**:
   ```bash
   npm run dev
   ```

## Usage

### Adding a Contact

1. Click the "Add Contact" button.
2. Fill in the contact details in the form.
3. Click "Submit" to save the contact.

### Editing a Contact

1. Click the "Edit" button next to the contact you wish to update.
2. Modify the contact details in the form.
3. Click "Update" to save the changes.

### Deleting a Contact

1. Click the "Delete" button next to the contact you wish to remove.
2. Confirm the deletion in the popup dialog.

### Searching for a Contact

1. Use the search bar at the top of the contact list.
2. Type the name or details of the contact you are searching for.
3. The contact list will filter in real-time based on your search query.

## Dependencies

- **React**: `^17.0.2`
- **Firebase**: `^8.6.8`
- **Formik**: `^2.2.9`
- **Yup**: `^0.32.9`
- **Tailwind CSS**: `^2.2.19`
