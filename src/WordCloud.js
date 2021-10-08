import ReactWordcloud from './ReactWordCloud'
import React, {useEffect} from 'react'

let initRender = true

export default React.memo(function WordCloud({ words }) {
  const TITLE_HEIGHT = 50
  const RATE = 0.6
  const totalArea = window.innerWidth * (window.innerHeight - TITLE_HEIGHT)
  const areaUnit = totalArea / words.length
  const fontSizeUnit = Math.sqrt(areaUnit) * RATE
  const maxFontSize = Math.min(Math.floor(fontSizeUnit), 300)
  const padding = Math.floor(maxFontSize / 10)

  console.log('words.length', words.length)
  console.log('totalArea', totalArea)
  console.log('areaUnit', areaUnit)
  console.log('fontSizeUnit', fontSizeUnit)
  console.log('maxFontSize', maxFontSize)
  console.log('padding', padding)

  const options = {
    enableOptimizations: true,
    deterministic: true,
    enableTooltip: false,
    padding, // 패딩 설정 시 버그가 좀 있음.. ;;
    fontSizes: [5, maxFontSize],
    // fontWeight: 'bold',
    fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif`,
    rotations: 0,
  }
  useEffect(() => {
    initRender = false
  }, [])

  console.log('initRender', initRender)

  return (
    <ReactWordcloud
      maxWords={1000}
      words={words}
      options={options}
      initRender={initRender}
    />
  )
})
