import React, {
 useState,
 useContext
} from 'react'
import sublinks from './data'

const AppContext = React.createContext();

//mainComponent-import at index.js
const AppProvider = ({
 children
}) => {
 //useState
 const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
 const [location, setLocation]=useState({})
 const [page, setPage]=useState({page:'',  links:[]})
 //functions
 const openSidebar = () => {
  setIsSidebarOpen(true)
 }

 const closeSidebar = () => {
  setIsSidebarOpen(false)
 }

 const openSubmenu = (text, coordinates) => {
  const page = sublinks.find((link)=>link.page === text)
  setPage(page)
  setLocation(coordinates)
  setIsSubmenuOpen(true)
 }

 const closeSubmenu = () => {
  setIsSubmenuOpen(false)
 }

 return ( 
 <AppContext.Provider value = {{
  isSidebarOpen,
  isSubmenuOpen,
  openSidebar,
  closeSidebar,
  openSubmenu,
  closeSubmenu,
  location,
  page
}}> {children} </AppContext.Provider>
 )
}

//customHook
export const useGlobalContext = ()=>{
 return useContext(AppContext)
}

//exporting
export {AppContext, AppProvider}