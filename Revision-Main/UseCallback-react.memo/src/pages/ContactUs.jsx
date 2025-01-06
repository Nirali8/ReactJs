import React, { useState,useCallback } from 'react'

const ContactUs = () => {
  return (
    <div>
      <h1 className="bg-purple-500 text-3xl">This is ContactUS PAge</h1>
      <ListData/>
    </div>
  );
}

export default ContactUs


const initialData = [
  {
    id:1,
    name:'Object-1'
  },
  {
    id:2,
    name:'Object-2'
  },
  {
    id:3,
    name:'Object-3'
  }
]


// const List = React.memo(
//   ({users , onRemove}) => {
  
//     console.log('List Component Renderd!!');
    
//     return(
//       <div>
//         <ul>
//           {
//             users.map((user) => <li key={user.id}>{user.name} <span onClick={() => onRemove(user.id)}>X</span></li>)
//           }
//         </ul>
//       </div>
//     )
//   }
// )

const List = 
  ({users , onRemove}) => {
  
    console.log('List Component Renderd!!');
    
    return(
      <div>
        <ul>
          {
            users.map((user) => <li key={user.id}>{user.name} <span onClick={() => onRemove(user.id)}>X</span></li>)
          }
        </ul>
      </div>
    )
  }

const MemoList = React.memo(List)

const ListData = () => {

  const [user , setUser] = useState(initialData)
  const [inputData , setInputData] = useState('')

  const handleRemove = useCallback(
    (userId) => {
      const filterUser = user.filter((user) => user.id !== userId)
      setUser(filterUser)
    }, [user])

  return(
    <div>
      <input type="text" name="" id="" value={inputData} className="border-black  border-4" onChange={(e) => setInputData(e.target.value)} />
      {/* <List users={user} onRemove={handleRemove}/> */}
      <MemoList users={user} onRemove={handleRemove}/>
    </div>
  )
}

