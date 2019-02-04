import React from 'react'
import ReactDOM from 'react-dom'

export const onClientEntry = async (_, pluginOptions = {}) => {
  const { showInProduction, axeOptions } = {
    showInProduction: false,
    axeOptions: {},
    ...pluginOptions,
  }

  if (process.env.NODE_ENV === 'development' || showInProduction) {
    const { default: axe } = await import('react-axe')
    axe(React, ReactDOM, 1000, axeOptions)
  }
}
