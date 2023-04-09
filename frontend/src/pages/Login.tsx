import React, {useState} from 'react'
import Api from '../utils/Api'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await Api('GET', null, 'http://localhost:3000')
    console.log(result)
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='email' name='email' value={email} onChange={e => setEmail(e.target.value)}/>
        <input type='password' name='password' value={password} onChange={e => setPassword(e.target.value)} />
        <input type='submit' value='Login' />
      </form>
    </div>
  )
}

export default Login