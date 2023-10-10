import { useEffect, useState } from 'react'

const GamersPage = () => {
  const [gamers, setGamers] = useState([])

  const fetchGamers = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users?_embed=playSessions`)
    if (response.ok) {
      const parsed = await response.json()
      setGamers(parsed)
    }
  }

  useEffect(() => {
    fetchGamers()
  }, [])

  return (
    <>
      <h1>All the gamers</h1>
      <ul>
        {gamers.length &&
          gamers.map(gamer => (
            <li key={gamer.id}>
              <h3>{gamer.firstname}</h3>
              <ul>
                {gamer.hobbies.map(hobby => (
                  <li key={hobby}>{hobby}</li>
                ))}
              </ul>
              <h4>Play Sessions</h4>
              <ul>
                {gamer.playSessions.map(playSession => (
                  <li key={playSession.id}>
                    <p>
                      {playSession.game} - {playSession.playTime} minutes
                    </p>
                    <p>{playSession.description}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </>
  )
}

export default GamersPage
