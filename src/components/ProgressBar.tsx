interface ProgressBarProps {
  current: number
  total: number
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = Math.round((current / total) * 100)

  return (
    <div className="w-full">
      {/* Stats */}
      <div className="flex justify-between items-center mb-2 font-mono text-xs">
        <span className="text-white/40">
          Q{current} / {total}
        </span>
        <span className="text-f1-neon">{percent}%</span>
      </div>

      {/* Track */}
      <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
        {/* Base track */}
        <div className="absolute inset-0 rounded-full" />

        {/* Progress fill */}
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-f1-red via-red-500 to-f1-neon transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />

        {/* Sector markers */}
        <div className="absolute inset-y-0 left-0 w-full flex justify-between px-1">
          {[25, 50, 75].map(sector => (
            <div
              key={sector}
              className="relative h-full"
              style={{ left: `${sector}%` }}
            >
              <div className={`absolute top-0 bottom-0 w-px ${percent >= sector ? 'bg-white/30' : 'bg-white/10'}`} />
            </div>
          ))}
        </div>

        {/* Glowing dot at the front */}
        {percent > 0 && (
          <div
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-lg transition-all duration-500 ease-out"
            style={{
              left: `calc(${percent}% - 4px)`,
              boxShadow: '0 0 10px rgba(0, 240, 255, 0.6), 0 0 20px rgba(0, 240, 255, 0.3)',
            }}
          />
        )}
      </div>

      {/* DRS zones indicator */}
      <div className="flex justify-between mt-1.5 px-1">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`w-12 h-0.5 rounded-full transition-colors duration-300 ${
              i < Math.ceil((current / total) * 4) ? 'bg-f1-green/60' : 'bg-white/5'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
