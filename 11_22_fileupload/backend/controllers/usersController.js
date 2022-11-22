// import * as dotenv from 'dotenv'
import User from "../models/User.js"
import Cart from "../models/Cart.js"
import cloudinary from 'cloudinary'
// dotenv.config()




export async function createUser (req, res) {
  
// Konfiguration cloudinary
  cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
  });


  const {avatar, ...userData} = req.body

  
if(avatar){
  const upload = await cloudinary.v2.uploader.upload(avatar)
  userData.avatar_url = upload.secure_url
}
 

  const user = new User(userData)
  await user.save()

  // Cart für neuen User erstellen
  const cart = await Cart.create({ user: user._id, products: [] })


  // User und Cart zurückschicken
  res.status(200).send({
    message: 'user created',
    user,
    cart
  })
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

  const token = user.generateAuthToken()
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

export async function upload(req, res){


}
