const express = require('express')
const passport = require('passport')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy


const app = express();
app.set('view engine', 'ejs');
app.use(session({ // Set up session middleware
	secret: 'your_secret_key',
	resave: true,
	saveUninitialized: true
}));
app.set('views', __dirname + '/views');
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
passport.serializeUser(function (user, done) { // Serialize the user to the session
	done(null, user);
});
passport.deserializeUser(function (obj, done) { // Serialize the user to the session
	done(null, obj);
});
app.use(passport.initialize()); // Initialize Passport and restore authentication state, if any, from the session
app.use(passport.session()); // Initialize Passport and restore authentication state, if any, from the session


app.get('/', function (req, res) { // Set up the login route
	res.render('index', { user: req.user });
});

passport.use(new GoogleStrategy({
	// app: https://console.cloud.google.com/home/dashboard?project=directed-strata-379202
	clientID: '785413243023-e427jfj6cu6edsp9piqdtca1pft2sbfh.apps.googleusercontent.com', // clientID: 'your_google_client_id',
	clientSecret: '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', // clientSecret: 'your_google_client_secret',
	callbackURL: 'http://localhost:3000/auth/google/callback'
},
	function (accessToken, refreshToken, profile, done) {
		// This function is called after user has authenticated with Google. Use the profile info (or other info from the accessToken) to authenticate user in your database. For now, just return the profile info.
		return done(null, profile);
	}
));
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback',
	passport.authenticate('google', {
		successRedirect: '/',
		failureRedirect: '/login'
	})
);

passport.use(new FacebookStrategy({
	// app: https://developers.facebook.com/apps/722991649321585/dashboard/
	clientID: '722991649321585',  // clientID: 'your_facebook_app_id', 
	clientSecret: 'd4c1eb4e05421ef538bfe8f305cae58f',  // clientSecret: 'your_facebook_app_secret',
	callbackURL: 'http://localhost:3000/auth/facebook/callback',
	profileFields: ['id', 'displayName', 'photos', 'email']
},
	function (accessToken, refreshToken, profile, done) {
		// This function is called after user has authenticated with Facebook. Use the profile info (or other info from the accessToken) to authenticate user in your database. For now, just return the profile info.
		return done(null, profile);
	}
));
app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback',
	passport.authenticate('facebook', {
		successRedirect: '/',
		failureRedirect: '/login'
	})
);

app.get('/logout', function (req, res) {
	req.logout();
	res.redirect('/');
});

app.listen(3000, () => console.log('Server up'));
