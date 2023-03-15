import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes/Route'

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Home></Home>}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/contact" element={<Contact />}></Route> */}
                {
                    routes.map((currentValue, index, arr) => {
                        return <Route key={index} path={currentValue.path} element={currentValue.element} />

                    })

                }
            </Routes>
        </BrowserRouter>
    )
}

