import { UserScores, TrackResult, Question, Dimension } from '../types'

const DIMENSIONS: Dimension[] = [
  'risk', 'precision', 'chaos', 'glamour', 'speed', 'strategy', 'pressure', 'social'
]

export function createEmptyScores(): UserScores {
  return {
    risk: 0,
    precision: 0,
    chaos: 0,
    glamour: 0,
    speed: 0,
    strategy: 0,
    pressure: 0,
    social: 0,
  }
}

export function calcScores(questions: Question[], answers: Record<number, number>): UserScores {
  const scores = createEmptyScores()

  for (const question of questions) {
    const selectedIdx = answers[question.id]
    if (selectedIdx === undefined) continue

    const option = question.options[selectedIdx]
    if (!option) continue

    for (const [dim, value] of Object.entries(option.scores)) {
      scores[dim as Dimension] += value
    }
  }

  return scores
}

function cosineSimilarity(a: Record<Dimension, number>, b: Record<Dimension, number>): number {
  let dotProduct = 0
  let normA = 0
  let normB = 0

  for (const dim of DIMENSIONS) {
    dotProduct += a[dim] * b[dim]
    normA += a[dim] * a[dim]
    normB += b[dim] * b[dim]
  }

  if (normA === 0 || normB === 0) return 0
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB))
}

function normalizeScores(scores: UserScores): UserScores {
  const maxPossible = 24 * 5
  const normalized = { ...scores }

  for (const dim of DIMENSIONS) {
    normalized[dim] = Math.min(scores[dim] / maxPossible * 5, 5)
  }

  return normalized
}

export function findBestMatch(scores: UserScores, tracks: TrackResult[]): {
  track: TrackResult
  matchPercent: number
  allMatches: Array<{ track: TrackResult; score: number; percent: number }>
} {
  const normalizedScores = normalizeScores(scores)
  const similarities = tracks.map(track => ({
    track,
    score: cosineSimilarity(normalizedScores, track.vector),
    percent: 0,
  }))

  const maxScore = Math.max(...similarities.map(s => s.score), 0.0001)

  similarities.forEach(s => {
    s.percent = Math.round((s.score / maxScore) * 100)
  })

  similarities.sort((a, b) => b.score - a.score)

  const best = similarities[0]

  return {
    track: best.track,
    matchPercent: best.percent,
    allMatches: similarities,
  }
}
