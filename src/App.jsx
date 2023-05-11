import { useState } from 'react'
import qrLogo from './assets/app-qr.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Divider, Stack, Typography } from '@mui/joy'
import options from './options'
import Typewriter from 'typewriter-effect';

function App() {
  const [count, setCount] = useState("1")
  const [decisions, setDecisions] = useState(options)
  const [delay, setDelay] = useState(true)

  const handleChoose = (number) => {
    console.log(number, count)
    setCount(count + '-' + number)
    

  }


  return (
    <>
      <div>
        <a href="https://github.com/mhtoin/moral-dilemma" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

      </div>
      <h1>Moral Dilemma</h1>
      <div className='card'>
        {decisions[count]
          ? <Typewriter
            options={{
              strings: decisions[count].text.split(),
              autoStart: true,
              loop: delay,
              delay: 40,
              pauseFor: 1000000
              
            }}
          />
          : 'Congratulations you... won?'}
      </div>
      <div className="card">
        <Stack direction={'column'} spacing={2} justifyContent={'center'} alignItems={'center'} divider={<Divider orientation="horizontal" >Tai</Divider>}>
          {decisions[count].options && <Button onClick={() => handleChoose('1')}>{decisions[count]['options']['1']}</Button>}
         
          {decisions[count].options && <Button onClick={() => handleChoose('2')}>{decisions[count]['options']['2']}</Button>}
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
