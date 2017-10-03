/* eslint-disable no-param-reassign */
import { types, onPatch } from 'mobx-state-tree'
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

      // fetch
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

  return store
}
