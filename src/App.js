import { oneOf } from '@madup-inc/utils'
import WordCloud from './WordCloud'
import list from './list'
import VipCloud2 from './VipCloud2'
import VipCloud3 from './VipCloud3'

export default function App() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
        2021 전도데이 1024, 작정 123명 & VIP 439명
      </div>
      {oneOf(
        [
          [window.location.pathname === '/2', () => <VipCloud2 list={vipList} />],
          [window.location.pathname === '/3', () => <VipCloud3 list={vipList} />],
        ],
        () => (
          <WordCloud words={vipList.map(name => ({ text: name, value: 1 }))} />
        ),
      )}
    </div>
  )
}

const vipList = list
    .split('\t')
    .filter(name => Boolean(name.trim()))
    .map(name => name.trim())
