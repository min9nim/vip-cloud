import {useEffect, useState} from 'react'
import ReactWordcloud from 'react-wordcloud';

let start = 0

const COUNT = 20
const MAX = 10
const MIN = 1

export default function VipCloud2({list}) {
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


    const options = {
        enableOptimizations: true,
        deterministic: true,
        enableTooltip: false,
        padding: 5, // 패딩 설정 시 버그가 좀 있음.. ;;
        fontSizes: [18, 80],
        // fontWeight: 'bold',
        fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif`,
        rotations: 0,
    }

  return <ReactWordcloud words={words} options={options} maxWords={1000}/>
}
