import React from 'react'

function page({params}) {
    const storeId = params.storeId
  return (
    <div>
        <p>{storeId}</p>
        <p>yosef</p>
    </div>
  )
}

export default page