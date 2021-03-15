import React from 'react'

export default function graphQl() {
  ;(async () => {
    const response = await fetch('/api/hello')
    const json = await response.json()
    console.log(json)
  })()

  return <div></div>
}
