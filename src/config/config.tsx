import { EmailList } from 'interface/interface'

export const emailListConfig: EmailList = {
  // email_user: 'demo@mail.com',
  // email_pass: 'qwsdfghnjkdrfghj',
  type: 'get',
  search: 'ALL',
  topK: 20
}

export const fetchURL = {
  emailList:
    'https://dnzqfr5stvvnkmiok7k642epwe0lrkhj.lambda-url.us-west-2.on.aws/'
}
