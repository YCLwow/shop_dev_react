import React, {  useEffect, useState, useContext,ReactNode } from 'react'
const GlobalContext = React.createContext<{user:string}|undefined>(undefined); // 创建context对象

GlobalContext.displayName = 'GlobalContext'


// Provider
export const GlobalProvider= ({ children }: { children: ReactNode }) => {
  let user:string = 'lyc'
  return (
    <GlobalContext.Provider
      children={children}
      value={{user}}
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