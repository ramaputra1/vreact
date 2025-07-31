import React from 'react'


const Counter = () => {
const handleMinus = () => {
    alert('Minus button clicked') // Placeholder for actual functionality
}
const handlePlus = () => {
    alert('Plus button clicked') // Placeholder for actual functionality
}

  return (
    <div className='flex gap-2'>
      <button className='bg-amber-400' onClick={handleMinus}>Minus</button>
      <p>0</p>
      <button className='bg-amber-950' onClick={handlePlus}>Plus</button>
    </div>
  )
}

export default Counter
