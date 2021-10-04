import getDefaultColors from './utils/getDefaultColors'

export default function VipCloud3({ list }) {
  const colors = getDefaultColors()
  return (
    <div style={{ display: 'flex', padding: '20px 10px 10px', flexWrap: 'wrap', flex: 1 }}>
      {list.map((name, idx) => (
        <div
          style={{ fontSize: 20, padding: '0 10px', color: colors[Math.floor(Math.random() * 20)] }}
          key={idx}
        >
          {name}
        </div>
      ))}
    </div>
  )
}
