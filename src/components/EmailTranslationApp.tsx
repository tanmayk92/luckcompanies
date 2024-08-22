import { EmailList, EmailTranslation, Translation } from 'pages'
import { useEmailTranslationContext } from 'EmailTranslationContext/EmailTranslationContext'

function EmailTranslationApp() {
  const { selectedPage } = useEmailTranslationContext()

  const renderComponent = () => {
    switch (selectedPage) {
      case 1:
        return <EmailList />
      case 2:
        return <EmailTranslation />
      case 3:
        return <Translation />
      default:
        return <EmailList />
    }
  }

  return renderComponent()

  // return <>{selectedPage === 1 ? <EmailList /> : <EmailTranslation />}</>
}

export default EmailTranslationApp
