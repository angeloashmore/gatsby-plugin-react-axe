import React from 'react'
import ReactDOM from 'react-dom'

export const onInitialClientRender = async (_, pluginOptions = {}) => {
  const { showInProduction, axeOptions, axeContext } = {
    showInProduction: false,
    axeOptions: {},
    axeContext: undefined,
    ...pluginOptions,
  }

  if (process.env.NODE_ENV === 'development' || showInProduction) {
    const { default: axe } = await import('react-axe')
    axe(React, ReactDOM, 1000, axeOptions, axeContext)
  }
}
