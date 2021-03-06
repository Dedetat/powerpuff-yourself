/* eslint-disable no-param-reassign */
import { types, onPatch, flow } from 'mobx-state-tree'
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
    load: flow(function* load() {
      // reinit
      self.powerpuffs = []

      // fetch
      const powerpuffs = yield fetch('/api').then(data => data.json())

      // save
      self.powerpuffs = powerpuffs
    }),
  }))
  .actions(self => ({
    afterCreate: () => {
      self.load()
    },
  }))

export default () => {
  const store = Store.create({
    router: {},
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
