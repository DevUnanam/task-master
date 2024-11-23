const bcrypt = require('bcryptjs');

// Replace with the password you used during registration
const enteredPassword = "password123"; 

// Replace with the hashed password from the database
const storedHashedPassword = "$2a$10$i/O8F.DUhkbeBHiSmaEY7.K6YFSkCwe38RJHpIwLtn6QeMU9KK3PC"; 

bcrypt.compare(enteredPassword, storedHashedPassword)
  .then(isMatch => console.log("Password Match:", isMatch))
  .catch(err => console.error("Error:", err));
