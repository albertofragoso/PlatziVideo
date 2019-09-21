import md5 from 'md5'

const gravatar = email => {
  const baseURL = 'https://www.gravatar.com/avatar/'
  const formattedEmail = email.trim().toLowerCase()
  const hash = md5(formattedEmail, { encoding: 'binary' })
  return `${baseURL}${hash}`
}

export default gravatar