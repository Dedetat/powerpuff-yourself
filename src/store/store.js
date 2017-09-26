/* eslint-disable no-param-reassign */
import { types, onPatch } from 'mobx-state-tree'
import { connectReduxDevtools } from 'mobx-state-tree/middleware/redux'
import Powerpuff from './powerpuff'
import Router from './router'

const Store = types
  .model({
    router: Router,
    edited: types.maybe(Powerpuff),
    powerpuffs: types.array(Powerpuff),
  })
  .named('store')
  .actions(self => ({
    fetch: () => {
      // reinit
      self.powerpuffs = []

      // fetch (TODO)
      const powerpuffs = [
        { id: 'powerpuff-1', name: 'Delphine' },
        { id: 'powerpuff-2', name: 'Fabien' },
      ]

      // save
      self.powerpuffs = powerpuffs.map(powerpuff => Powerpuff.create(powerpuff))
    },
  }))

export default () => {
  const store = Store.create({
    router: Router.create({}),
    powerpuffs: [],
  })

  // eslint-disable-next-line no-console
  console.log('[store-init]', store.toJSON())

  // on each patch
  onPatch(store, (patch) => {
    // eslint-disable-next-line no-console
    console.log('[store-patch]', patch)
  })

  // redux-dev-tools
  // eslint-disable-next-line global-require
  connectReduxDevtools(require('remotedev'), store)

  return store
}
