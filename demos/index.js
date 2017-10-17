const { types } = require('mobx-state-tree')

const Powerpuff = types
  .model({
    name: types.string,
    mood: types.enumeration(['happy', 'aggressive']),
  })

const rebelle = Powerpuff.create({ name: 'Rebelle', mood: 'aggressive' })

// /!\ doesn't work since we don't use an action to mutate the model
// rebelle.mood = 'happy'

console.log(JSON.stringify(rebelle.toJSON(), null, 2))
