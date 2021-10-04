import getDefaultColors from './utils/getDefaultColors'
import { useEffect, useState } from 'react'

let start = 0

const COUNT = 20
const MAX = 40
const MIN = 20

export default function VipCloud3({ list }) {
  const colors = getDefaultColors()
  const vipList = list
  const [words, setWords] = useState(() =>
    vipList.map((name, idx) => ({
      text: name,
      value: MIN,
    })),
  )

  useEffect(() => {
    setTimeout(() => {
      setWords(list => {
        start = start + 1
        if (start * COUNT > vipList.length) {
          start = 0
        }
        return list.map((item, idx) => ({
          text: item.text,
          value: idx % COUNT === Math.floor(Math.random() * COUNT) ? MAX : MIN,
        }))
      })
    }, 5000)
  }, [words, vipList.length])

  return (
      <div style={{ display: 'flex', padding: '20px 10px 10px', flexWrap: 'wrap', flex: 1 }}>
      {words.map(({ text, value }, idx) => (
        <span
          style={{
            fontSize: 18,
            opacity: value > 20 ? 1 : 0.5,
            display: 'inline-block',
            transition: `transform 1s ease-in-out`,
            transform: value > 20 ? 'scale(3.0)' : 'scale(1.0)',
            padding: '0 20px',
            color: colors[Math.floor(Math.random() * 20)],
          }}
          key={idx}
        >
          {text}
        </span>
      ))}
    </div>
  )
}
