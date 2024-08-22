import React from 'react'
import { useEmailTranslationContext } from 'EmailTranslationContext/EmailTranslationContext'
import { showAlert } from 'tailwind-toastify'

const Translation: React.FC = () => {
  const {
    translateObject,
    emailTranslation,
    sendEmail,
    selectedEmail,
    emailSentMsg
  } = useEmailTranslationContext()
  const sendMail = () => {
    var fromEmail = selectedEmail?.from.substring(
      selectedEmail?.from.indexOf('<') + 1,
      selectedEmail?.from.lastIndexOf('>')
    )
    let formData = {
      recipient_email: fromEmail,
      subject: `RE: ${selectedEmail?.subject}`,
      body: translateObject.response_translate,
      type: 'send'
    }
    sendEmail(formData)
    if (emailSentMsg) handleShowAlert('success', 'success', emailSentMsg)
  }

  const handleShowAlert = (type: any, title: string, message: string) => {
    showAlert(type, title, message)
  }

  return (
    <>
      <div className="flex my-8 justify-center">
        <div className="max-w-full mx-10 bg-white rounded-xl shadow-md overflow-hidden md:w-full lg:w-full xl:w-full">
          <div className="md:flex">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Original Response
              </div>
              <p className="mt-2 text-slate-500">{translateObject?.response}</p>
            </div>
          </div>
        </div>
        <div className="flex-none w-14 m-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
            />
          </svg>
        </div>

        <div className="max-w-full mx-10 bg-white rounded-xl shadow-md overflow-hidden md:w-full lg:w-full xl:w-full">
          <div className="md:flex">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Translated Response
              </div>
              {/* <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Incredible accommodation for your team
              </a> */}
              <p className="mt-2 text-slate-500">
                {translateObject?.response_translate}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex jutify-center flex-col m-auto mb-8">
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            sendMail()
          }}
          className="inline-flex justify-center m-auto items-center mb-8 px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
        >
          Send Email
        </button>
        {emailSentMsg && (
          <React.Fragment>
            <div
              className="p-4 w-2/5 mb-4 m-auto mt-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
              role="alert"
            >
              <span className="font-medium">Mail Sent Successfully!</span>
            </div>
            <a
              href="#"
              onClick={() => (document.location.href = '/')}
              className="m-auto mt-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Back to Home
            </a>
          </React.Fragment>
        )}
      </div>
    </>
  )
}

export { Translation }
