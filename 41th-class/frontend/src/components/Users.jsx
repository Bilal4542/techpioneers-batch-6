
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Users = () => {

      const [users, setUser] = useState([])

      const getUsers = async () => {
        try {
            const res = await axios.get('http://localhost:3000/user/getusers')
            console.log(res.data.data)
            setUser(res.data.data)
        } catch (error) {
            console.log('Error', error)
        }
    }
    useEffect(()=>{
        getUsers()
    },[])
  return (
    <div className="">
        <table className='border leading-10 indent-4'>
            <thead>
                <tr className='border '>
                    <th className='border'>Name</th>
                    <th className='border '>Email</th>
                    <th className='border '>Age</th>
                    <th className='border '>Phone</th>
                </tr>
            </thead>
            <tbody>
               {users.map((item)=>{
                return(
                    <tr className='border '>
                        <td className='border'>{item.userName}</td>
                        <td className='border '>{item.userEmail}</td>
                        <td className='border '>{item.userAge}</td>
                        <td className='border '>{item.userPhone}</td>
                    </tr>
                    
                )
               })}
            </tbody>
        </table>
    </div>
  )
}

export default Users
