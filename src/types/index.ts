export type Dimension =
  | 'risk'       // 风险偏好
  | 'precision'  // 精准控制
  | 'chaos'      // 混乱程度
  | 'glamour'    // 戏剧感/华丽程度
  | 'speed'      // 速度欲望
  | 'strategy'   // 策略脑
  | 'pressure'   // 抗压能力
  | 'social'     // 社交能量

export interface Option {
  text: string
  scores: Partial<Record<Dimension, number>>
}

export interface Question {
  id: number
  text: string
  options: Option[]
}

export interface TrackResult {
  id: string
  name: string
  englishName: string
  subtitle: string
  keywords: string[]
  description: string
  driverStyle: string
  socialStyle: string
  weakness: string
  bestMatch: string
  worstMatch: string
  shareText: string
  /** Dimension vector for scoring, values 1-5 */
  vector: Record<Dimension, number>
}

export interface UserScores extends Record<Dimension, number> {}

export type Page = 'home' | 'quiz' | 'result'
