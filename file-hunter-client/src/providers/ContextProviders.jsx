import React, { createContext, useState } from 'react'

export const AuthContext = createContext(null)

const ContextProviders = ({children}) => {
    const [fonts, setFonts] = useState([])
    const value = {
        fonts, setFonts
    }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default ContextProviders
