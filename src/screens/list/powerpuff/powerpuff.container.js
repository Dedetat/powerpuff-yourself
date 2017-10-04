import { compose } from 'recompose'
import { inject, observer } from 'mobx-react'
import Powerpuff from './powerpuff'

export default compose(
  inject(({ store }, { id }) => ({
    name: store.powerpuffs.find(p => p.id === id).name,
    onClick: () => { alert('open puff') },
  })),
  observer,
)(Powerpuff)
