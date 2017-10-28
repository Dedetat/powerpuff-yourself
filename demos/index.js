const { types } = require('mobx-state-tree')

const Store = types
  .model({
    name: 'a name'
  })

const store = Store.create()
console.log(store.toJSON())
