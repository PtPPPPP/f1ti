import { TrackResult } from '../types'

interface ShareCardProps {
  track: TrackResult
  matchPercent: number
}

export default function ShareCard({ track, matchPercent }: ShareCardProps) {
  return (
    <div className="w-full max-w-md mx-auto" id="share-card">
      <div
        className="relative overflow-hidden rounded-lg border border-white/10 p-6"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a0a 50%, #0a0a0a 100%)',
        }}
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
          <div className="text-8xl font-display font-black text-f1-red">F1</div>
        </div>
        <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-f1-red/5 blur-xl" />
        <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-f1-neon/5 blur-xl" />

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-f1-red/20 bg-f1-red/5 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-f1-red animate-pulse-neon" />
              <span className="text-[10px] font-mono text-f1-red/60 tracking-wider uppercase">
                F1 TRACK PERSONALITY
              </span>
            </div>
            <h2 className="font-display text-lg font-bold text-white/40">
              你是哪条 F1 赛道？
            </h2>
          </div>

          {/* Result */}
          <div className="text-center mb-4">
            <div className="font-display text-4xl md:text-5xl font-black text-white mb-1"
                 style={{ textShadow: '0 0 30px rgba(225,6,0,0.4)' }}>
              {track.name}
            </div>
            <div className="text-base text-f1-red/80 font-mono mb-2">
              {track.englishName}
            </div>
            <div className="inline-block px-3 py-1 rounded bg-f1-red/10 border border-f1-red/20">
              <span className="text-xs font-mono text-f1-neon">
                匹配度 {matchPercent}%
              </span>
            </div>
          </div>

          {/* Keywords */}
          <div className="flex flex-wrap justify-center gap-1.5 mb-4">
            {track.keywords.map(kw => (
              <span
                key={kw}
                className="px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 text-[10px] text-white/50 font-mono"
              >
                #{kw}
              </span>
            ))}
          </div>

          {/* Subtitle */}
          <p className="text-center text-sm text-white/60 italic mb-4 px-2">
            "{track.subtitle}"
          </p>

          {/* Share CTA */}
          <div className="text-center pt-3 border-t border-white/5">
            <p className="text-[10px] text-white/20 font-mono">
              来测测你是哪条赛道 → f1-track-personality.vercel.app
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
