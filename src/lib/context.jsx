import React, {createContext, useContext} from 'react'


const ArtContext = createContext();

export function useArtContext() {
  return useContext(ArtContext)
}

export function ArtProvider({children}){
  const scrollTo = () => {
    let element = document.getElementById('nav');

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }

  const value = {
    scrollTo
  }

  return (
    <ArtContext.Provider value={value}>
      {children}
    </ArtContext.Provider>
  )
}