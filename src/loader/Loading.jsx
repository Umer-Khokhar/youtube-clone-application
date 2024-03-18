import React from 'react'
import { Puff } from 'react-loader-spinner'


export const Loading = () => {
  return (
    <div style={{height: '95vh', display: 'flex',justifyContent: 'center', margin: 'auto', alignItems: 'center'}}>
    <Puff
  visible={true}
  height="80"
  width="80"
  color="#ff0004"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
  </div>
  )
}
