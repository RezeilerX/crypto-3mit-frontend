import type { FunctionComponent } from 'react'
import type { AuthContext, AuthData } from 'types/auth'
import { createContext, useContext, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const AppContext = createContext({} as AuthContext)

const AppContextProvider: FunctionComponent = (props) => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const [authData, setAuthData] = useState({} as AuthData)

  return (
    <AppContext.Provider value={{ authData, setAuthData }}>
      {props.children}
    </AppContext.Provider>
  )
}

const useStoreData = (): AuthContext => useContext(AppContext)

export {
  AppContextProvider,
  useStoreData
}
