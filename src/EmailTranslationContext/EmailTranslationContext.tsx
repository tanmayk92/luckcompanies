import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction
} from 'react'
import axios from 'axios'
import { emailListConfig, fetchURL } from 'config/config'
import { strToArray, strToObj } from 'utils'

type Props = {
  children: React.ReactNode
}

type Context = {
  emailTranslation: EmailTranslation
  targetLanguage: string
  emailList: any
  selectedEmail: EmailList | null
  getEmailTranslation: (emailData: any) => void
  setSelectedEmail: ({}: EmailList) => void
  selectedPage: number | null
  setSelectedPage: Dispatch<SetStateAction<number>>
  postResponseTranslation: (requestData: any) => void
  translateObject: any
  sendEmail: (mailData: any) => void
  emailSentMsg: any
}

type EmailList = {
  subject: string
  from: string
  body: string
}

interface SentimentInterface {
  positive: number
  negative: number
  neutral: number
}

type EmailTranslation = {
  action: any
  language: string
  original: string
  profanity: string
  sentiment: any
  sentiment_tags: string
  summary: string
  translation: string
  word_count: number
  response: string
}

const EmailTranslationContext = createContext<Context | null>(null)

export const EmailTranslationProvider = ({ children }: Props) => {
  const [emailTranslation, setEmailTranslation] = useState<any>()
  const [targetLanguage, setTargetLanguage] = useState('en')
  const [emailList, setEmailList] = useState<any>(null)
  const [selectedEmail, setSelectedEmail] = useState<EmailList | null>(null)
  const [selectedPage, setSelectedPage] = useState<number>(1)
  const [translateObject, setTranslateObject] = useState(null)
  const [emailSentMsg, setEmailSentMsg] = useState(null)

  useEffect(() => {
    // call api here
    getEmailList()
    //getEmailTranslation()
  }, [])

  const getEmailList = async () => {
    return await axios({
      method: 'POST',
      url: fetchURL.emailList,
      data: emailListConfig
    })
      .then((result) => {
        //console.log('Email Lists : ', result)
        setEmailList(result.data)
        setSelectedEmail(result.data[0])
      })
      .catch((err) => {
        throw new Error('Error Fetching Emails')
      })
  }

  const getEmailTranslation = async (emailData: any) => {
    return await axios({
      method: 'post',
      url: 'https://nk4wnc6vi35ygpynmt7a2hc2yy0olecj.lambda-url.us-west-2.on.aws/',
      data: emailData
    })
      .then((result) => {
        if (result.data) {
          result.data.sentiment = strToObj(result.data.sentiment)
          result.data.action = strToArray(result.data.action)
        }
        setEmailTranslation(result.data)
      })
      .catch((err) => console.log('Error while fetching email translation'))
  }

  const postResponseTranslation = async (requestData: any) => {
    return await axios({
      method: 'POST',
      url: 'https://evfde2o2euuxtcucln4jtimyli0mptkm.lambda-url.us-west-2.on.aws/',
      data: requestData
    })
      .then((res) => {
        if (res.data) {
          setSelectedPage(3)
        }
        setTranslateObject(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const sendEmail = async (mailData: any) => {
    return await axios({
      method: 'POST',
      url: 'https://dnzqfr5stvvnkmiok7k642epwe0lrkhj.lambda-url.us-west-2.on.aws/',
      data: mailData
    })
      .then((res) => {
        console.log(res)
        setEmailSentMsg(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <EmailTranslationContext.Provider
      value={{
        emailTranslation,
        targetLanguage,
        emailList,
        selectedEmail,
        getEmailTranslation,
        setSelectedEmail,
        selectedPage,
        setSelectedPage,
        postResponseTranslation,
        translateObject,
        sendEmail,
        emailSentMsg
      }}
    >
      {children}
    </EmailTranslationContext.Provider>
  )
}

export const useEmailTranslationContext = () => {
  const context = useContext(EmailTranslationContext)

  if (!context) {
    throw new Error(
      'EmailContext must be called from within the EmailContextProvider'
    )
  }

  return context
}
