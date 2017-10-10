const { types } = require('mobx-state-tree')

const Powerpuff = types
  .model({
    name: types.string,
    mood: types.enumeration(['happy', 'aggressive']),
  })

const powerpuff = Powerpuff.create({ name: 'Rebelle', mood: 'aggressive' })

// /!\ doesn't work since we don't use an action to mutate the model
// powerpuff.name = 'Belle'

console.log(JSON.stringify(powerpuff.toJSON(), null, 2))
