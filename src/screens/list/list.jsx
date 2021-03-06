import React from 'react'
import PropTypes from 'prop-types'
import { PropTypes as MobxPropTypes, observer } from 'mobx-react'
import classnames from 'classnames'
import Powerpuff from './powerpuff'
import './list.css'

const List = ({ style, className, powerpuffs }) => {
  const classes = classnames(
    className,
    'list',
  )

  return (
    <div style={style} className={classes}>
      {powerpuffs.map(({ id }) => <Powerpuff key={id} id={id} />)}
    </div>
  )
}

List.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  powerpuffs: MobxPropTypes.observableArrayOf(PropTypes.shape({
    id: PropTypes.string,
  })),
}

List.defaultProps = {
  style: {},
  className: '',
  powerpuffs: [],
}

export default observer(List)
