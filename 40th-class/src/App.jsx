import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
 
  const [phone, setPhone] = useState()

  const fetchPhones = async () => {
    try {
      
      const res = await axios.get('http://localhost:9000/phone/getPhones')
      setPhone(res.data.data)
      console.log('Phones', res.data.data)

    } catch (error) {
     console.log('error', error) 
    }
  }

  useEffect(()=>{
    fetchPhones()
  },[])
  return (
    <>
  <div className="flex gap-10 py-5 flex-wrap">
      {phone?.map((item) => {
      return(
        <div className="">
          <h1 className='text-2xl font-bold p-1'>Phone Name: {item.phoneName}</h1>
          <h2 className='text-2xl font-bold p-1'>Phone Description: {item.phoneDescription}</h2>
          <h3 className='text-2xl font-bold p-1'>Release Date: {item.releaseDate}</h3>
          <h3 className='text-2xl font-bold p-1'>Company Name: {item.phoneCompany}</h3>
        </div>
      )
    })}
  </div>
    </>
  )
}

export default App
