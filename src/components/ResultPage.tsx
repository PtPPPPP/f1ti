import { useState } from 'react'
import { TrackResult } from '../types'
import ShareCard from './ShareCard'

interface ResultPageProps {
  track: TrackResult
  matchPercent: number
  onRestart: () => void
}

export default function ResultPage({ track, matchPercent, onRestart }: ResultPageProps) {
  const [copied, setCopied] = useState(false)
  const [showCard, setShowCard] = useState(false)

  const handleShare = async () => {
    const text = `${track.shareText}\n\n找到你的 F1 赛道人格：`
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback: show the card for screenshot
      setShowCard(true)
    }
  }

  const getPercentColor = (pct: number) => {
    if (pct >= 95) return 'text-f1-green'
    if (pct >= 80) return 'text-f1-neon'
    if (pct >= 65) return 'text-f1-yellow'
    return 'text-white/60'
  }

  return (
    <div className="min-h-screen px-4 py-8 max-w-2xl mx-auto">
      {/* Result header */}
      <div className="text-center mb-10 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-f1-red/20 bg-f1-red/5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-f1-green animate-pulse-neon" />
          <span className="text-[10px] font-mono text-f1-green tracking-widest uppercase">
            RESULT COMPLETE
          </span>
        </div>

        <h1 className="font-display text-3xl md:text-4xl font-black text-white mb-2"
            style={{ textShadow: '0 0 30px rgba(225,6,0,0.3)' }}>
          你的赛道人格
        </h1>

        <div className="font-display text-6xl md:text-8xl font-black text-f1-red mt-4 mb-2"
             style={{ textShadow: '0 0 40px rgba(225,6,0,0.3)' }}>
          {track.name}
        </div>

        <div className="text-xl md:text-2xl text-white/50 font-light tracking-widest mb-4">
          {track.englishName}
        </div>

        {/* Match percent gauge */}
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-f1-neon/20 bg-f1-neon/5">
          <span className="text-xs text-white/40 font-mono">MATCH</span>
          <span className={`font-display text-2xl font-bold ${getPercentColor(matchPercent)}`}
                style={matchPercent >= 80 ? { textShadow: '0 0 20px rgba(0,240,255,0.4)' } : {}}>
            {matchPercent}%
          </span>
        </div>
      </div>

      {/* Keywords */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 animate-slide-up">
        {track.keywords.map(kw => (
          <span
            key={kw}
            className="px-3 py-1 rounded-sm bg-f1-red/5 border border-f1-red/10 text-xs text-f1-red/70 font-mono"
          >
            #{kw}
          </span>
        ))}
      </div>

      {/* Subtitle / verdict */}
      <div className="text-center mb-10 animate-slide-up">
        <div className="inline-block relative">
          <div className="absolute -left-3 -right-3 -top-2 -bottom-2 border border-f1-red/10 rounded" />
          <p className="relative text-lg md:text-xl text-white/80 font-medium italic px-4">
            「{track.subtitle}」
          </p>
        </div>
      </div>

      {/* Personality description */}
      <div className="space-y-6 mb-10 animate-slide-up">
        {/* Description */}
        <div className="p-5 rounded-sm border border-white/5 bg-white/[0.02]">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-f1-red" />
            <h3 className="font-display text-xs text-f1-red tracking-wider uppercase">赛道人格</h3>
          </div>
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            {track.description}
          </p>
        </div>

        {/* Driver style */}
        <div className="p-5 rounded-sm border border-white/5 bg-white/[0.02]">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-f1-yellow" />
            <h3 className="font-display text-xs text-f1-yellow tracking-wider uppercase">驾驶风格</h3>
          </div>
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            {track.driverStyle}
          </p>
        </div>

        {/* Social style */}
        <div className="p-5 rounded-sm border border-white/5 bg-white/[0.02]">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-f1-neon" />
            <h3 className="font-display text-xs text-f1-neon tracking-wider uppercase">社交风格</h3>
          </div>
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            {track.socialStyle}
          </p>
        </div>

        {/* Weakness */}
        <div className="p-5 rounded-sm border border-f1-orange/20 bg-f1-orange/[0.02]">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-f1-orange" />
            <h3 className="font-display text-xs text-f1-orange tracking-wider uppercase">隐藏缺点</h3>
          </div>
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            {track.weakness}
          </p>
        </div>

        {/* Teammates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-sm border border-f1-green/10 bg-f1-green/[0.02]">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-f1-green" />
              <h3 className="font-display text-[10px] text-f1-green tracking-wider uppercase">
                最佳队友赛道
              </h3>
            </div>
            <p className="text-sm text-white/60">
              {track.bestMatch}
            </p>
          </div>

          <div className="p-4 rounded-sm border border-red-500/10 bg-red-500/[0.02]">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <h3 className="font-display text-[10px] text-red-400 tracking-wider uppercase">
                互相折磨赛道
              </h3>
            </div>
            <p className="text-sm text-white/60">
              {track.worstMatch}
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8 animate-slide-up">
        <button
          onClick={handleShare}
          className="flex-1 py-3 bg-f1-red hover:bg-red-700 text-white font-display font-bold text-sm rounded-sm transition-all active:scale-95 flex items-center justify-center gap-2"
          style={{ boxShadow: '0 0 20px rgba(225,6,0,0.3)' }}
        >
          {copied ? (
            <>
              <span>✓</span> 已复制分享文案
            </>
          ) : (
            <>
              <span>↗</span> 分享结果
            </>
          )}
        </button>

        <button
          onClick={onRestart}
          className="flex-1 py-3 border border-white/10 hover:border-white/30 text-white/60 hover:text-white font-mono text-sm rounded-sm transition-all"
        >
          重新测试 ↻
        </button>
      </div>

      {/* Share card preview */}
      {showCard && (
        <div className="mb-8 animate-slide-up">
          <div className="text-center mb-3">
            <span className="text-xs text-white/30 font-mono">长按或截图保存分享卡片</span>
          </div>
          <ShareCard track={track} matchPercent={matchPercent} />
        </div>
      )}

      {/* Footer */}
      <div className="text-center pt-6 border-t border-white/5">
        <p className="text-xs text-white/15 font-mono">
          Formula 1 Track Personality Test &middot; 纯属娱乐 &middot; 不代表 FIA 官方观点
        </p>
      </div>
    </div>
  )
}
