import Header from './Header/Header'
import Footer from './Footer/Footer'
import { EmailTranslationProvider } from 'EmailTranslationContext/EmailTranslationContext'
import logoSrc from '../assets/luckcompany-logo.png'
import AltLogo from '../assets/intervision_logo.png'
import EmailTranslationApp from './EmailTranslationApp'

function App() {
  return (
    <EmailTranslationProvider>
      <div className="luck-companies-email-translation-app">
        <Header />
        <EmailTranslationApp />
        <Footer logoAltSrc={AltLogo} logoSrc={logoSrc} />
      </div>
    </EmailTranslationProvider>
  )
}

export default App
