import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'


export default function App() {
let [language,setLanguage]=useState("hi");
let [search ,setSearch]=useState()
  
   function changeLanguage(input){
   setLanguage(input)
  }
   function changeSearch(input){
   setSearch(input)
  }

 
    return (
    <BrowserRouter>
    <Navbar changeLanguage ={changeLanguage} changeSearch={changeSearch}/>
    <Routes>
         <Route path='' element={<Home language={language} search={search} q="All"/>}/>  
         <Route path='/All' element={<Home language={language} search={search} q="All"/>}/>
         <Route path='/Politices' element={<Home language={language} search={search} q="Politices"/>}/>
         <Route path='/Crime' element={<Home language={language} search={search} q="Crime"/>}/>
         <Route path='/Science' element={<Home language={language} search={search} q="Science"/>}/>
         <Route path='/Technology' element={<Home language={language} search={search} q="Technology"/>}/>
         <Route path='/Entertainment' element={<Home language={language} search={search} q="Entertainment"/>}/>
         <Route path='/Sports' element={<Home language={language} search={search} q="Sports"/>}/>
         <Route path='/Cricket' element={<Home language={language} search={search} q="Cricket"/>}/>
         <Route path='/IPL' element={<Home language={language} search={search} q="IPL"/>}/>
         <Route path='/Economics' element={<Home language={language} search={search} q="Economics"/>}/>
         <Route path='/International' element={<Home language={language} search={search} q="International"/>}/>
         <Route path='/India' element={<Home language={language} search={search} q="India"/>}/>
         <Route path='/Jokes' element={<Home language={language} search={search} q="Jokes"/>}/>
         <Route path='/*' element={<Home language={language} search={search} q="All"/>}/>
            
    </Routes>
    <Footer/>
    </BrowserRouter>
    )
    
}
