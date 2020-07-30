const express = require('express')
const passport = require('passport')
const router = express.Router()

//Description : auth with google
//Route: GET /auth/google

router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

//Description : Google auth callback
//Route : GET /auth/google/callback

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/dashboard')
}
)

//Description : Logout user
//Route: /auth/logout
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})

module.exports = router