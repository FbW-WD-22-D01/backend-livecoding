import User from "../models/User.js"
import Cart from "../models/Cart.js"

export async function createUser (req, res) {
  const user = new User(req.body)
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
  console.log(user)

  if (!user) {
    return next({ status: 401, message: 'You shall not pass!' })
  }

  const passwordsAreEqual = await user.checkPassword(req.body.password)

  if (!passwordsAreEqual) {
    return next({ status: 401, message: 'You shall not pass!' })
  }

  const token = user.generateAuthToken()
  await user.save()

  res.status(200).send(token)
  
}


export function getUser(req,res){
  const user = req.user
  res.send(user)
}
