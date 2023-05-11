import { useState } from 'react'
import qrLogo from './assets/app-qr.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Divider, Stack, Typography } from '@mui/joy'
import options from './options'

function App() {
  const [count, setCount] = useState("1")
  const [decisions, setDecisions] = useState(options)
  const [delay, setDelay] = useState(true)
  const [lang, setLang] = useState('Finnish')

  const handleChoose = (number) => {
    console.log(number, count)
    setCount(count + '-' + number)
  }

  const handleContinue = () => {
    let treeParent = count ? parseInt(count.split('-')[0]) + 1 : 1
    setCount(treeParent.toString())
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
          ? <p>{decisions[count].text}</p>
          : 'Kiitos pelaamisesta!'}
      </div>
      <div className="card">
        <Stack direction={'column'} spacing={2} justifyContent={'center'} alignItems={'center'} divider={<Divider orientation="horizontal" >Tai</Divider>}>
          {decisions[count]?.options && decisions[count]?.options["1"] && <Button onClick={() => handleChoose('1')}>{decisions[count]['options']['1']}</Button>}  
          {decisions[count]?.options && decisions[count]?.options["2"] && <Button onClick={() => handleChoose('2')}>{decisions[count]['options']['2']}</Button>}
          {decisions[count] && !decisions[count].options && <Button onClick={handleContinue}>Jatka</Button>}
        </Stack>
        
        <Button sx={{m: 5}} onClick={() => setCount('1')}>Aloita alusta</Button>
      </div>

    </>
  )
}

export default App
