/* eslint-disable */
import debounce from 'lodash.debounce'
import React, { useEffect, useRef } from 'react'

import { useResponsiveSvgSelection } from './hooks'
import { layout } from './layout'
import { getDefaultColors } from './utils'

export const defaultCallbacks = {
  getWordTooltip: ({ text, value }) => `${text} (${value})`,
}

export const defaultOptions = {
  colors: getDefaultColors(),
  deterministic: false,
  enableOptimizations: false,
  enableTooltip: true,
  fontFamily: 'times new roman',
  fontSizes: [4, 32],
  fontStyle: 'normal',
  fontWeight: 'normal',
  padding: 1,
  rotationAngles: [-90, 90],
  scale: 'sqrt',
  spiral: 'rectangular',
  tooltipOptions: {},
  transitionDuration: 600,
}

function ReactWordCloud({
  callbacks,
  maxWords = 100,
  minSize,
  options,
  size: initialSize,
  words,
  initRender,
  ...rest
}) {
  const mergedCallbacks = { ...defaultCallbacks, ...callbacks }
  const mergedOptions = { ...defaultOptions, ...options }

  const [ref, selection, size] = useResponsiveSvgSelection(
    minSize,
    initialSize,
    options.svgAttributes,
  )

  const render = useRef(debounce(layout, 100))

  useEffect(() => {
    if (selection) {
      render.current({
        callbacks: mergedCallbacks,
        maxWords,
        options: mergedOptions,
        selection,
        size,
        words,
        initRender,
      })
    }
  }, [initRender, maxWords, mergedCallbacks, mergedOptions, selection, size, words])

  return <div ref={ref} style={{ height: '100%', width: '100%' }} {...rest} />
}

ReactWordCloud.defaultProps = {
  callbacks: defaultCallbacks,
  maxWords: 100,
  minSize: [300, 300],
  options: defaultOptions,
}

export default ReactWordCloud
