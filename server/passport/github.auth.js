import passport from "passport";

import dotenv from 'dotenv'

import GitHubStrategy from 'passport-github2'
import User from "../models/user.model.js";

dotenv.config()

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });
  

  passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "/api/auth/github/callback"
  },
  async function(accessToken, refreshToken, profile, done) {
    
    const user = await User.findOne({username:profile.username})

    if(!user){
        const newUser = new User({
            username:profile.username,
            fullname:profile.displayName,
            profileurl:profile.profileUrl,
            avatarurl:profile.photos[0].value,
            likedprofiles:[],
            likedby:[]
        })
        await newUser.save()
        done(null,newUser)
    }

    else{
        done(null,user)
    }
   
  }
));