// src/App.tsx
import { NavbarDemo } from "./components/Navbar" // adjust path if needed
import { Hero } from "./components/sections/Hero.tsx"
import  Problem  from "./components/sections/Problem.tsx"

import Solution from "./components/sections/Solution.tsx"
// import { Traction } from "./components/sections/Traction"
// import { CTA } from "./components/sections/CTA"

function App() {
  return (
    <div className="min-h-screen mt-30">
      <NavbarDemo /> 
      <main className=""> 
        <Hero />
        <Problem />
        <Solution />
        {/* <Traction />
        <CTA /> */}
      </main>
    </div>
  )
}

export default App
