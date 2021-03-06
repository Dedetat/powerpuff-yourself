import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import List from './list'

const Router = ({ style, className, code = 'list' }) => {
  const classes = classnames(
    className,
  )

  const props = {
    className: classes,
    style,
  }

  switch (code) {
    case 'list': return <List {...props} />
    default: return null
  }
}

Router.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  code: PropTypes.string,
}

Router.defaultProps = {
  style: {},
  className: '',
  code: undefined,
}

export default Router
