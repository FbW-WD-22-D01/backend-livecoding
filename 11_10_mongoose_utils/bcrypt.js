import bcrypt from 'bcrypt'

// bcrypt.hash('123456', 10).then(result => {
//   console.log(result)
// })

// const hash = '$2b$10$VsJPFPXG3spPlPZ5t9DvkeuLsBoib5hrGhXIffCw3C.w64vKwynhO'

// user registriert sich: 123456
// wir wandeln passwort in hash um: $2b$10$a3q0zT3biRtHs0vZuCsz3.G8H8UqrGQ69SO4mcejZOi4u9x0XRtQu
// user will sich einloggen: 123456
// wir wandeln das zweite passwort in hash um: $2b$10$NhEyRHvRL.39vfPjuk/QauJgbncv2UG/pY1YI/SZLtmjUDhdcI3KS
// wir vergleichen die zwei hashes

bcrypt.compare('123456', '$2b$10$NhEyRHvRL.39vfPjuk/QauJgbncv2UG/pY1YI/SZLtmjUDhdcI3KS').then(
  result => console.log(result)
)