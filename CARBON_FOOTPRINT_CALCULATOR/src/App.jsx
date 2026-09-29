import { useState } from 'react'
import LoginPage from './Components/Login_page/loginpage'
import Calculator from './Components/Calculator_page/calculator'

const App = () => {
  const [showCalculator, setShowCalculator] = useState(() =>
    Boolean(localStorage.getItem('username') && localStorage.getItem('work'))
  )

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {showCalculator
        ? <Calculator onBack={() => setShowCalculator(false)} />
        : <LoginPage onLogin={() => setShowCalculator(true)} />}
    </div>
  )
}

export default App
