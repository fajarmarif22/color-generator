import React, { useState, useEffect } from 'react'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  // console.log(hexColor)
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  // console.log(hex)
  const hexValue = `#${hexColor}`
  useEffect(() => {
    const timerout = setTimeout(() => {
      setAlert(false)
    }, 300)
    return () => clearTimeout(timerout)
  }, [alert])
  return (
    <>
      <article
        className={`color ${index > 10 && 'color-light'}`}
        style={{ backgroundColor: `rgb(${bcg})` }}
        onClick={() => {
          setAlert(true)
          navigator.clipboard.writeText(hexValue)
        }}
      >
        <p className='percent-value'>{weight}%</p>
        <p className='color-value'>{hexValue}</p>
        {alert && <p className='alert'>Copied to clipboard </p>}
      </article>
    </>
  )
}

export default SingleColor
