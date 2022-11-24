// number -> number
// symbol -> symbol
// string -> string
// boolean -> boolean
// null -> null
// undefined -> undefined
// object/array
//  -> any

/** simple types */
// let myNumber:number

// myNumber = 4
// myNumber = 'Hello World'

// console.log(myNumber)

let myVar:number|string = 3

myVar = ''


/** object */

type User = { 
  name: string
  age: number
}

type Account = {
  user: null | undefined | User
  value: string
  timestamp?: number
  friends: User[]
}

let obj1:Account = {
  user: {
    name: 'Manu',
    age: 10,
  },
  value: '',
  timestamp: 0,
  friends: [
    {
      name: 'Name1',
      age: 20
    },
    {
      name: 'Name2',
      age: 22
    },
  ],
}

let obj2:Account = {
  user: null,
  value: '3',
  friends: [],
}



function logUser (obj:Account) {
  if(obj.user) {
    const user = obj.user
    console.log(user.name)
    return obj.user
  }
  else {
    const user = obj.user
    console.log('no user found')
    return null
  }
}

type LogUserReturn = ReturnType<typeof logUser>

const result = logUser(obj2)
const timestamp = obj1.timestamp
const myName = obj1.user?.name

if(result) {
  console.log(result.name)
}


for(const friend of obj1.friends) {
  console.log(friend.name)
}

// own setState implementation via Genrerics

function setState <MyGeneric>(value:MyGeneric) {
  return value
}

const myValue = setState<User>({
  name: 'Peter',
  age: 10
})

const user = { name: 'User', age: 12 }

type NewUser = typeof user

const promise = Promise.resolve('foo')

type PromiseValue = Awaited<typeof promise>
