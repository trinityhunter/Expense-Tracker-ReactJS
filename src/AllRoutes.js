import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import AuthForm from './components/AuthForm/AuthForm'
import ExpenseForm from './components/ExpenseForm/ExpenseForm'
import CardList from './components/Card/CardList'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/auth' element={<AuthForm />}/>
            <Route path='/record' element={<ExpenseForm />}/>
            <Route path='/viewRecords' element={<CardList />}/>
        </Routes>
    </div>
  )
}

export default AllRoutes