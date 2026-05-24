import { useState, useCallback } from 'react'
import { Page, UserScores } from './types'
import { questions } from './data/questions'
import { tracks } from './data/tracks'
import { calcScores, findBestMatch } from './utils/scoring'
import HomePage from './components/HomePage'
import QuizPage from './components/QuizPage'
import ResultPage from './components/ResultPage'
import SpeedLines from './components/SpeedLines'

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [result, setResult] = useState<{
    track: typeof tracks[0]
    matchPercent: number
  } | null>(null)

  const handleStart = useCallback(() => {
    setAnswers({})
    setResult(null)
    setPage('quiz')
  }, [])

  const handleAnswer = useCallback((questionId: number, optionIndex: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }))
  }, [])

  const handleComplete = useCallback(() => {
    const scores = calcScores(questions, answers)
    const match = findBestMatch(scores, tracks)
    setResult({ track: match.track, matchPercent: match.matchPercent })
    setPage('result')
  }, [answers])

  const handleRestart = useCallback(() => {
    setAnswers({})
    setResult(null)
    setPage('quiz')
  }, [])

  const handleBackToHome = useCallback(() => {
    setPage('home')
  }, [])

  return (
    <div className="relative min-h-screen bg-f1-darker text-white overflow-hidden">
      {/* Background effects */}
      <SpeedLines />

      {/* Top scan line effect */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="absolute inset-0 bg-repeat-y opacity-[0.02]"
             style={{
               backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.03) 3px, rgba(255,255,255,0.03) 4px)',
             }} />
      </div>

      {/* Pages */}
      <div className="relative z-10">
        {page === 'home' && <HomePage onStart={handleStart} />}

        {page === 'quiz' && (
          <QuizPage
            questions={questions}
            answers={answers}
            onAnswer={handleAnswer}
            onBack={handleBackToHome}
            onComplete={handleComplete}
          />
        )}

        {page === 'result' && result && (
          <ResultPage
            track={result.track}
            matchPercent={result.matchPercent}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  )
}
