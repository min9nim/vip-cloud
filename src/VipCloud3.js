import getDefaultColors from './utils/getDefaultColors'
import {useEffect, useState} from 'react'

let start = 0

const COUNT = 20
const MAX = 40
const MIN = 20


export default function VipCloud3({ list }) {
  const colors = getDefaultColors()
  const vipList = list
  const [words, setWords] = useState(() => vipList.map(
      (name, idx) => ({
        text: name,
        value: idx < COUNT ? MAX : MIN
      })))

  useEffect(() => {
    setTimeout(() => {
      setWords(list => {
        start = start + COUNT
        if(start > vipList.length){
          start = 0
        }
        return list.map((item, idx) => ({text: item.text, value: start <= idx && idx < (start + COUNT) ? MAX : MIN}))
      })
    }, 5000)
  }, [words, vipList.length])

  return (
    <div style={{ display: 'flex', padding: '20px 10px 10px', flexWrap: 'wrap', flex: 1 }}>
      {words.map(({text, value}, idx) => (
        <div
          style={{ fontSize: value, padding: '0 10px', color: colors[Math.floor(Math.random() * 20)] }}
          key={idx}
        >
          {text}
        </div>
      ))}
    </div>
  )
}
