import React, {useContext, createContext, useState} from 'react'
const LoadingContext = createContext()

export const MyLoader = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
  return (
    <LoadingContext.Provider value={{isLoading, setIsLoading}}>
        { children }
    </LoadingContext.Provider>
  )
}

export const useLoading = () => {
    return useContext(LoadingContext);
};