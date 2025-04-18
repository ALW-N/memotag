// src/App.tsx
import { NavbarDemo } from "./components/Navbar" // adjust path if needed
import { Hero } from "./components/sections/Hero.tsx"
import  Problem  from "./components/sections/Problem.tsx"
// import { Solution } from "./components/sections/Solution"
// import { Traction } from "./components/sections/Traction"
// import { CTA } from "./components/sections/CTA"

function App() {
  return (
    <div className="min-h-screen pt-12">
      <NavbarDemo /> 
      <main className="mt-32"> 
        <Hero />
        <Problem />
        {/* <Solution />
        <Traction />
        <CTA /> */}
      </main>
    </div>
  )
}

export default App
