

# Express Validator

## Overview

This project is an example of using Express.js with validation middleware to handle user input. It demonstrates how to use the `express-validator` package to validate and sanitize form data in an Express.js application. The user can input infromation about users, update the information and search for users that are saved. This project was built as part of the Odin Project course on full-stack web development. 
https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs

## Features

- **Form Validation:** Validate user input with various rules.
- **Error Handling:** Gracefully handle validation errors and display user-friendly messages.
- **Express Integration:** Seamlessly integrates with Express.js for server-side validation.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v12.x or higher)
- [npm](https://www.npmjs.com/) (Node package manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/leylamemiguven/express-validator.git
   cd express-validator
   ```

2. Install dependencies:

```bash
npm install
```

3. Running the Application
```bash
npm start
```
OR
```bash
node --watch app.js
```
If you want to make debugging easier. 

## Application Overview

### Home page
Upon launching the app you will be greeted with a page where you can either create a new user or search the pile of existing users. 
![Screenshot (100)](https://github.com/user-attachments/assets/19cfe489-e42a-4e72-9e48-24a1f857d9c6)

### Adding New Users 
![Screenshot (101)](https://github.com/user-attachments/assets/270cb8a6-f526-44ca-9dee-8e07819e8ee8)

Users created will be shown on the home page after
![Screenshot (102)](https://github.com/user-attachments/assets/140195c9-a7d8-4e0f-9abd-a56fa1bed1b6)

### Updating Existing Users

If a user wants to update an already existing user's property, it will be shown on the home page. 

![Screenshot (103)](https://github.com/user-attachments/assets/f57ea029-3227-4b48-8dae-6971b6badc54)

![Screenshot (104)](https://github.com/user-attachments/assets/cda1a709-05c9-4baf-b03c-e28e8e1899c7)

### Searching Users

A user can be searched by their first name or last name. The results will be shown in the Search Results page. 

![Screenshot (105)](https://github.com/user-attachments/assets/01a05dbb-a17a-407b-93ad-21ad551f6b71)
![Screenshot (106)](https://github.com/user-attachments/assets/152b92f8-5524-49f9-a751-201d50df528f)





