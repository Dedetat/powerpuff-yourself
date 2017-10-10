const { types } = require('mobx-state-tree')

const Powerpuff = types
  .model({
    name: types.string,
    mood: types.enumeration(['happy', 'aggressive']),
  })
  .actions(self => ({
    setMood: (mood) => { self.mood = mood },
  }))

const powerpuff = Powerpuff.create({ name: 'Rebelle', mood: 'aggressive' })

// /!\ doesn't work since we don't use an action to mutate the model
// powerpuff.name = 'Belle'

// does work because we use an action
powerpuff.setMood('happy')

console.log(JSON.stringify(powerpuff.toJSON(), null, 2))
