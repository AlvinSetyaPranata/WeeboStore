import Alert from '@/components/Atoms/Alert'
import React, { createContext, useState } from 'react'

export const AlertContext = createContext({messege: "", title: ""})

export default function AlertProvider({children}) {
  const [state, setState] = useState(false)

  const updateValue = (values) => {
    
  }

  return (
    <AlertContext.Provider value={{state, updateValue}}>
      {state &&
        <Alert title={alertMessege.title} messege={alertMessege.messege} onClose={() => setState(false)}/>
      }
        {children}
    </AlertContext.Provider>
  )
}
