import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Stack } from '@mui/joy'
import options from './options'

function App() {
  const [count, setCount] = useState("1")
  const [decisions, setDecisions] = useState(options)

  const handleChoose = (number) => {
    setCount(count + '-' + number)
    
  }

  return (
    <>
      <div>
        <a href="https://github.com/mhtoin/moral-dilemma" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        
      </div>
      <h1>Moral Dilemma</h1>
      <div className='card'>
        {decisions[count].text}
      </div>
      <div className="card">
        <Stack direction={'row'} spacing={1} justifyContent={'center'}>
        <Button onClick={() => handleChoose('1')}>{decisions[count]['options']['1']}</Button>
        <Button onClick={() => handleChoose('2')}>{decisions[count]['options']['2']}</Button>
        </Stack>
        <p>
          Choose your option
        </p>
        <Button onClick={() => setCount('1')}>Reset</Button>
      </div>
     
    </>
  )
}

export default App
