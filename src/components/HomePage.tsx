interface HomePageProps {
  onStart: () => void
}

export default function HomePage({ onStart }: HomePageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative">
      {/* Hero section */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* F1 badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-f1-red/30 bg-f1-red/5 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-f1-red animate-pulse-neon" />
          <span className="text-xs font-mono text-f1-red tracking-widest uppercase">
            FORMULA 1 PERSONALITY TEST
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 animate-slide-up"
          style={{ textShadow: '0 0 40px rgba(225,6,0,0.3)' }}
        >
          <span className="text-white">你是哪条</span>
          <br />
          <span className="text-f1-red">F1 赛道</span>
          <span className="text-white">？</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/60 font-light mb-3 animate-fade-in">
          不是测你会不会开车
        </p>
        <p className="text-base md:text-lg text-white/40 font-light mb-10 animate-fade-in">
          是测你的人生到底像哪条赛道一样离谱。
        </p>

        {/* Start button */}
        <button
          onClick={onStart}
          className="group relative inline-flex items-center gap-3 px-10 py-4 bg-f1-red hover:bg-red-700 text-white font-display font-bold text-lg rounded-sm transition-all duration-300 animate-slide-up hover:scale-105 active:scale-95"
          style={{ boxShadow: '0 0 30px rgba(225,6,0,0.4)' }}
        >
          <span>开始测试</span>
          <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </button>

        {/* Meta info */}
        <div className="mt-6 flex items-center justify-center gap-6 text-xs text-white/30 font-mono animate-fade-in">
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-f1-yellow" />
            24 道题
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-f1-neon" />
            16 条赛道
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-f1-green" />
            ≈ 3 分钟
          </span>
        </div>

        {/* Disclaimers */}
        <div className="mt-12 p-4 border border-white/5 rounded bg-white/[0.02] max-w-lg mx-auto">
          <p className="text-xs text-white/20 leading-relaxed">
            本测试纯属娱乐，不代表真实心理测评，也不代表 FIA 官方观点。
            所有赛车术语已尽量简化，没看过 F1 也能测。
            测试结果存储在本地浏览器，不会上传任何数据。
          </p>
        </div>
      </div>

      {/* Bottom decorative grid */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-f1-red/20 to-transparent" />
    </div>
  )
}
