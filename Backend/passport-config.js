const LocalStrategy = require("passport-local").Strategy;
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "e-commerce"
});

function initialize(passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      const sql = "SELECT * FROM `customers` WHERE Email = ?";

      // Find the user by email
      db.query(sql, [email], (err, data) => {
        if (err) return done(err); // Pass error to done
        if (data.length === 0) {
          return done(null, false, { message: "No user with that email" });
        }

        const user = data[0];
        console.log(user);

        // Compare the plain-text password with the stored password
        if (password === user.Password) {
          return done(null, user); // Password matches, return the user
        } else {
          return done(null, false, { message: "Incorrect password" });
        }
      });
    })
  );

  // Serialize user into session
  passport.serializeUser((user, done) => {
    // console.log(user)
    done(null, user.Id); // Assuming `Id` is the primary key in the customers table
  });

  // Deserialize user from session
  passport.deserializeUser((id, done) => {
    const sql = "SELECT * FROM `customers` WHERE Id = ?";
    db.query(sql, [id], (err, data) => {
      if (err) return done(err); // Pass error to done
      if (data.length > 0) {
        const user = data[0];
        done(null, user); // Pass user to done
      } else {
        done(new Error("User not found"), null);
      }
    });
  });
}

module.exports = initialize;
