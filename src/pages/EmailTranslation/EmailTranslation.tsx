import ContentArea from 'components/ContentArea/ContentArea'
import React, { useEffect } from 'react'
import WelcomeEmailImg from '../../assets/email-img.png'
import RichTextEditor from 'components/RichTextEditor/RichTextEditor'
import { useEmailTranslationContext } from 'EmailTranslationContext/EmailTranslationContext'

const EmailTranslation: React.FC = () => {
  const {
    selectedEmail,
    emailTranslation,
    getEmailTranslation,
    targetLanguage
  } = useEmailTranslationContext()

  useEffect(() => {
    window.scrollTo(0, 0)
    translateEmail()
  }, [selectedEmail])

  const translateEmail = () => {
    let emailData = {
      targetLanguage,
      text: selectedEmail?.body.trim()
    }
    getEmailTranslation(emailData)
  }

  return (
    <div className="grid grid-cols-2 gap-2 mt-5 divide-x">
      <div className="col pl-8">
        <ContentArea />
      </div>
      <div className="col">
        <div className="email-editor">
          <img
            src={WelcomeEmailImg}
            className="m-auto h-32"
            alt="Welcome Email"
          />
          <h2 className="text-center subpixel-antialiased text-xl mb-2 text-heading font-semibold">
            Agent Email Reply
          </h2>
          <RichTextEditor />
        </div>
      </div>
    </div>
  )
}

export { EmailTranslation }
