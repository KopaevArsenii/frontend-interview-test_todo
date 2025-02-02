/* VENDOR */
import { FC, useEffect } from "react"
import { Route, Routes, Navigate, useNavigate } from "react-router-dom"

/* APPLICATION */
import { Header } from "./Header"
import { Tasks } from "../pages/Tasks"
import { Categories } from "../pages/Categories"
import { Login } from "../pages/Login"
import Registration from "../pages/Registration"

const App: FC = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route
                    path="/tasks"
                    element={
                        <>
                            <Header />
                            <Tasks />
                        </>
                    }
                />
                <Route
                    path="/categories"
                    element={
                        <>
                            <Header />
                            <Categories />
                        </>
                    }
                />
                <Route path="*" element={<Navigate to={"/tasks"} />} />
            </Routes>
        </div>
    )
}

export default App
