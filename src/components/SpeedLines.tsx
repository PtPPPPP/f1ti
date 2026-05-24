import { useEffect, useState } from 'react'

interface SpeedLine {
  id: number
  delay: number
  duration: number
  top: number
  opacity: number
}

export default function SpeedLines() {
  const [lines, setLines] = useState<SpeedLine[]>([])

  useEffect(() => {
    const newLines: SpeedLine[] = []
    for (let i = 0; i < 8; i++) {
      newLines.push({
        id: i,
        delay: Math.random() * 3,
        duration: 1 + Math.random() * 2,
        top: Math.random() * 100,
        opacity: 0.1 + Math.random() * 0.15,
      })
    }
    setLines(newLines)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {lines.map(line => (
        <div
          key={line.id}
          className="absolute h-px bg-gradient-to-r from-transparent via-f1-red/30 to-transparent"
          style={{
            top: `${line.top}%`,
            left: '-100%',
            width: '120%',
            opacity: line.opacity,
            animation: `speedLine ${line.duration}s linear ${line.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
