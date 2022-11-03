
const records = [
  {
    _id: '1',
    title: 'Title 1',
    price: 11
  },
  {
    _id: '2',
    title: 'Title 2',
    price: 10
  },
  {
    _id: '3',
    title: 'Title 3',
    price: 10
  }
]

const users = [
  {
    _id: '1',
    name: 'Manuel Jung'
  },
  {
    _id: '2',
    name: 'Foo Bar'
  }
]

const orders = [
  {
    _id: '1',
    user: '1',
    records: [
      '1',
      '2'
    ]
  },
  {
    _id: '2',
    user: '2',
    records: ['3']
  }
]