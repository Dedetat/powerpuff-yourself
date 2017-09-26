import { types } from 'mobx-state-tree'

export const Style = types
  .model({
    eye: 'eye',
  })

const Powerpuff = types
  .model({
    id: types.identifier(types.string),
    name: types.string,
    style: Style,
  })
  .named('Powerpuff')
  .preProcessSnapshot((snapshot) => {
    if (!snapshot) return snapshot
    if (snapshot.style) return snapshot

    return { ...snapshot, style: Style.create({}) }
  })

export default Powerpuff
