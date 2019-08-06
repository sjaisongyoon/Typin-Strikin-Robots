const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const mongoose = require('mongoose');

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

const userPojo = user => ({
  id: user.id,
  username: user.username,
  multiplayerWins: user.multiplayerWins,
  multiplayerLosses: user.multiplayerLosses,
  singleplayerWPM: user.singleplayerWPM,
})

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
      id: req.user.id,
      username: req.user.username,
    });
  })

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

    // Check to make sure nobody has already registered with a duplicate username
    User.findOne({ username: req.body.username })
      .then(user => {
        if (user) {
          // Throw a 400 error if the username already exists
          return res.status(400).json({username: "A user has already registered with this username"})
        } else {
          // Otherwise create a new user
          const newUser = new User({
            username: req.body.username,
            password: req.body.password
          })

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser.save()
                .then(user => {
                  const payload = { id: user.id, username: user.username };

                  jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                    res.json({
                      success: true,
                      token: "Bearer " + token,
                      user: payload
                    });
                  });
                })
                .catch(err => console.log(err));
            })
          })
        }
      })
  })

router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const username = req.body.username;
    const password = req.body.password;
  
    User.findOne({username})
      .then(user => {
        if (!user) {
          return res.status(404).json({username: 'This user does not exist'});
        }
  
        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if (isMatch) {
            const payload = {id: user.id, username: user.username};

            jwt.sign(
                payload,
                keys.secretOrKey,
                // Tell the key to expire in one hour
                {expiresIn: 3600},
                (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token,
                  user: payload
                });
              });
            } else {
                return res.status(400).json({password: 'Incorrect password'});
            }
        })
      })
  })

router.get('/', passport.authenticate('jwt', { session: false }),(req, res) => {
  User.find()
    .then(users => {
      let usersPojo = {};
      users.forEach( (user) => {
        // let userPojo = {
        //   id: user.id,
        //   username: user.username,
        //   multiplayerWins: user.multiplayerWins,
        //   multiplayerLosses: user.multiplayerLosses,
        //   singleplayerWPM: user.singleplayerWPM
        // };
        usersPojo[user.id] = userPojo(user);
      })
      res.json(usersPojo);
    })
    .catch(err => res.status(404).json({ nousersfound: 'No users found' }));
});

router.get('/leaderboard', passport.authenticate('jwt', { session: false }),(req, res) => {
  let leaderboardPojo = {};
  User.find()
    .sort({ multiplayerWins: -1 })
    .then( users => {
      let newArr = [];
      users.forEach((user) => {
        newArr.push(userPojo(user));
      })
      leaderboardPojo["multiplayerWins"] = newArr;
    })
    .then( () => {  //have to chain on second query because async results yield unpredictable output sometimes.
      User.find()
        .sort({ singleplayerWPM: -1 })
        .then(users => {
          let newArr = [];
          users.forEach((user) => {
            newArr.push(userPojo(user));
          })
          leaderboardPojo["singleplayerWPM"] = newArr;
          res.json(leaderboardPojo);
        })
        .catch(err => res.status(404).json({ nousersfound: 'No users found' }));
    })
    .catch(err => res.status(404).json({ nousersfound: 'No users found' }));
  // User.find()
  //   .sort({ singleplayerWPM: -1})
  //   .then( users => {
  //     leaderboardPojo["singleplayerWPM"] = users;
  //     res.json(leaderboardPojo);
  //   })
  //   .catch(err => res.status(404).json({ nousersfound: 'No users found' }));
});

router.patch('/:userId', passport.authenticate('jwt', { session: false }),(req, res) => {
  const user = { _id: mongoose.Types.ObjectId(req.params.userId)}
  User.findOne(user).then((fetchedUser) => {
    // fetchedUser.numMatches = fetchedUser.numMatches === 0 ? 1 : fetchedUser.numMatches + 1;
    if (req.body.singleplayerWPM) {
      fetchedUser.singleplayerWPM = fetchedUser.singleplayerWPM < req.body.singleplayerWPM ? req.body.singleplayerWPM : fetchedUser.singleplayerWPM
    }
    fetchedUser.multiplayerWins = (parseInt(req.body.multiplayerWins) === 1) ? fetchedUser.multiplayerWins + 1 : fetchedUser.multiplayerWins;
    fetchedUser.multiplayerLosses = (parseInt(req.body.multiplayerLosses) === 1) ? fetchedUser.multiplayerLosses + 1 : fetchedUser.multiplayerLosses;
    fetchedUser.save()
      .then(updatedUser => {
        // let updatedUserPojo = {
        //   id: updatedUser.id,
        //   username: updatedUser.username,
        //   multiplayerWins: updatedUser.multiplayerWins,
        //   multiplayerLosses: updatedUser.multiplayerLosses,
        //   singleplayerWPM: updatedUser.singleplayerWPM
        // };
        res.json(userPojo(updatedUser));
      })
      .catch(err => res.status(400).json({ updatefailed: 'Something wrong when updating user!' }));
  })
  .catch(err => res.status(404).json({ nousersfound: 'No user found' }));
    
});

module.exports = router;