type HangmanWordProps = {
    GuessedLetters: string[] // Modifica il nome della props in GuessedLetters
    wordToGuess: string
  }
  
  export function HangmanWord({ GuessedLetters, wordToGuess }: HangmanWordProps) {
  
    return (
      <div style={{
        display: 'flex',
        gap: '.25em',
        fontSize: '6rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'monospace',
      }}>
        {wordToGuess.split("").map((letter, index) => (
          <span style={{
            borderBottom: '.1em solid black'
          }} key={index}>
            <span style={{
              visibility: GuessedLetters.includes(letter)
                ? 'visible'
                : 'hidden',
            }}>
              {letter}
            </span>
          </span>
        ))}
      </div>
    )
  }
  