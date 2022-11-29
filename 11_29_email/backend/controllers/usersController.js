import User from "../models/User.js"
import Cart from "../models/Cart.js"
import httpErrors  from 'http-errors'
import sendMail from "../sendEmail.js"

export async function createUser (req, res) {
  const user = new User(req.body)
  
  // Cart für neuen User erstellen
  const cart = await Cart.create({ user: user._id, products: [] })
  
  // token für Email Validierung erzeugen
  const emailToken = user.generateAuthToken("30min") // token für 600 Sekunden erzeugen
  await user.save()
  
  //Email an User schicken mit Link
  const mail = await sendMail(user.email, emailToken)

  console.log(mail)
  // User und Cart zurückschicken
  res.status(200).send({
    message: 'user created',
    user,
    cart
  })
}

export async function verification(req, res){
  const {token} = req.params
  if(!token) throw httpErrors.Unauthorized('You shall not pass!')
  
  const user = await User.findByAuthToken(token)
  if(!user) throw httpErrors.Unauthorized('You shall not pass!')
  
  // Nachdem der User gefunden wurde, wird bestätigt, dass der user die Email bestätigt hat
  user.isConfirmed = true
  await user.save()

res.send('Email ist bestätigt, sie können sich jetzt einloggen')
}


export async function login(req, res, next) {
  const user = await User.findByEmail(req.body.email)


  if (!user) {
    return next({ status: 401, message: 'You shall not pass!' })
  }

  const passwordsAreEqual = await user.checkPassword(req.body.password)

  if (!passwordsAreEqual) {
    return next({ status: 401, message: 'You shall not pass!' })
  }

  const token = user.generateAuthToken('2h')
  await user.save()

  // Optionen für Cookie 
  const cookieOptions = {
    httpOnly: true,     // cookie vom js im frontend verborgen
    secure: true,       // nur https Verbindungen
    sameSite: 'lax'     // "none", "lax" --> default, "strict"
  }

  // Cookie erzeugen
  res
    .cookie('token', token, cookieOptions)
    .status(200)
    .send('Hello, you are logged in')
  
}


export async function getUser(req,res){
  const user = req.user
  res.send(user)
}


export async function isLoggedIn( req, res){
  res.status(200).send(true)
}


export async function logout(req, res){
  const user = req.user
  const token = req.cookies.token

  const filteredTokens = user.tokens.filter( el => el !== token )
 
  user.tokens= filteredTokens
  await user.save()
  res
    .clearCookie('token')
    .status(200)
    .send('Logout erfolgreich')
}
