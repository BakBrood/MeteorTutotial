import React from "react"
import LogInPage from "/imports/ui/LogInPage"
import HomePage from "/imports/ui/HomePage"

export const publicRoutes = {
   login: {
      path: '/login',
      element:(<LogInPage />) as React.ReactNode
   },
   signup: {
      path: '/signup',
      element:(<LogInPage />) as React.ReactNode
   },
   home: {
      path: '/',
      element:(<HomePage />) as React.ReactNode
   },
   default: {
      path: '*',
      element:(<LogInPage />) as React.ReactNode
   },
}
// must be logged in to view
export const protectedRoutes = {}