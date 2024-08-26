// controllers/usersController.js
const usersStorage = require("../storages/usersStorage");


// This part is like asking the server, "Hey, can you show me everyone
// in the phonebook?" The server looks at the users stored in 
// usersStorage, then puts them on a webpage called index with a title 
// that says "User list."

exports.usersListGet = (req, res) => {
  res.render("index", {
    title: "User list",
    users: usersStorage.getUsers(),
  });
};

//This part is like asking the server, "Hey, can you show me everyone 
// in the phonebook?" The server looks at the users stored in usersStorage, 
// then puts them on a webpage called index with a title that says 
// "User list."

exports.usersCreateGet = (req, res) => {
  res.render("createUser", {
    title: "Create user",
  });
};

//This part asks the server to show a form where a new user can
//  be added. Imagine it’s like getting a blank page where you can 
//  write down someone’s name to add them to the phonebook.

exports.usersCreatePost = (req, res) => {
  const { firstName, lastName, email, age, bio } = req.body;
  usersStorage.addUser({ firstName, lastName, email, age, bio });
  res.redirect("/");
};


// This just shows the new stuff we're adding to the existing contents
const { body, validationResult } = require("express-validator");

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";
const emailErr = "must be a valid email address.";
const ageErr = "must be a number between 18 and 120.";
const bioErr = "must be 200 characters or less.";

const validateUser = [
  body("firstName").trim()
    .isAlpha().withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: 10 }).withMessage(`First name ${lengthErr}`),
  body("lastName").trim()
    .isAlpha().withMessage(`Last name ${alphaErr}`)
    .isLength({ min: 1, max: 10 }).withMessage(`Last name ${lengthErr}`),
  body("email")
    .isEmail().withMessage(`Email ${emailErr}`),
  body("age")
    .optional().isInt({ min: 18, max: 120 }).withMessage(`Age ${ageErr}`),
  body("bio")
    .optional().isLength({ max: 200 }).withMessage(`Bio ${bioErr}`)
];

// We can pass an entire array of middleware validations to our controller.
//If everything's good: The server then adds this new person to the phonebook (usersStorage) and sends you back to the main page where you see everyone listed.

exports.usersCreatePost = [
  validateUser,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("createUser", {
        title: "Create user",
        errors: errors.array(),
      });
    }
    const { firstName, lastName, email, age, bio } = req.body;
    usersStorage.addUser({ firstName, lastName, email, age, bio });
    res.redirect("/");
  }
];
//This part is like asking the server, "Hey, I want to change something about this person in the phonebook.
//" The server shows you a form with the person’s current information, and you can update it.

exports.usersUpdateGet = (req, res) => {
  const user = usersStorage.getUser(req.params.id);
  res.render("updateUser", {
    title: "Update user",
    user: user,
  });
};

exports.usersUpdatePost = [
  validateUser,
  (req, res) => {
    const user = usersStorage.getUser(req.params.id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("updateUser", {
        title: "Update user",
        user: user,
        errors: errors.array(),
      });
    }
    const { firstName, lastName, email, age, bio } = req.body;
    usersStorage.updateUser(req.params.id, { firstName, lastName, email, age, bio });
    res.redirect("/");
  }
];

// Tell the server to delete a matching user, if any. Otherwise, respond with an error.
exports.usersDeletePost = (req, res) => {
  usersStorage.deleteUser(req.params.id);
  res.redirect("/");
};

//Searching for users

exports.usersSearchGet = (req, res) => {
  let filteredUsers = usersStorage.getUsers();

  if (req.query) {
    filteredUsers = filteredUsers.filter(user => {
      console.log("user here:" , user)
      return ( user.firstName.toLowerCase().includes(req.query.firstName.toLowerCase()) || user.lastName.toLowerCase().includes(req.query.firstName.toLowerCase())) 
    }
    );
  }

  //console.log("query here:", req.query.firstName)
  console.log(filteredUsers)

  res.render("search", {
    title: "Search Results",
    users: filteredUsers,
  });
};