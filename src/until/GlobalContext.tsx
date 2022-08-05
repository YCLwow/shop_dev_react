import React, {  useEffect, useState, useContext,ReactNode } from 'react'


interface GlobaltType {
  user?:string,
  token?:string,
  setUser?:Function,
  setToken?:Function
}


const GlobalContext = React.createContext<GlobaltType|undefined>(undefined); // 创建context对象

GlobalContext.displayName = 'GlobalContext'


// Provider
export const GlobalProvider= ({ children }: { children: ReactNode }) => {
  const [user,setUser] = useState()
  const [token,setToken] = useState()
  return (
    <GlobalContext.Provider
      children={children}
      value={{
        user:user,
        token:token,
        setUser:setUser,
        setToken:setToken
      }}
    />
  );
}

// 对应的hook
export const useGlobal = ()=>{
  const context = React.useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal必须在GlobalProvider中使用");
  }
  return context;
}