import { Navigate, Route, Routes } from "react-router-dom"

import { LoginPage } from "../auth/pages/LoginPage"
import { DCPages } from "../heroes/pages/DCPages"
import { MarvelPage } from "../heroes/pages/MarvelPage"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="marvel" element={<MarvelPage />} />
            <Route path="dc" element={<DCPages />} />

            <Route path="login" element={<LoginPage />} />

            <Route path="/" element={<Navigate to="/marvel" />} />

        </Routes>
    </>
  )
}
