import jwt from 'jsonwebtoken'

const info = {user: 'Christoph', role: 'admin'}
const secret = 'ichbineingeheimnis'

const token = jwt.sign(info, secret, { expiresIn: 1 })

const verify = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiQ2hyaXN0b3BoIiwiaWF0IjoxNjY4NDIxMDg3LCJleHAiOjE2Njg0MjEwODh9.XsJ-dSEv3JW9vIYvivhIgN-g1XZ7BuTUb8hWOSRk_cw" ,secret)

console.log(verify)
console.log(token)