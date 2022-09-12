import React from 'react'
import './index.scss'
import Layout from '../../Layout'


export default function Login() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [showRegister, setShowRegister] = React.useState(false)
  const [name, setName] = React.useState('')
  
  
  




  if(showRegister) {
    return (
      <Layout>
        <div className='Login'>
          <form className='box'>
            <h1>Join Us</h1>
            <div className='toggle-register' onClick={() => setShowRegister(false)}>
              Already have an Account
            </div>
            <hr/>
  
            <div className='input-group'>
              <div className='label'>Email</div>
              <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
  
            <div className='input-group'>
              <div className='label'>Password</div>
              <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
            </div>

            <div className='input-group'>
              <div className='label'>Name</div>
              <input type='text' value={name} placeholder='Name' onChange={e => setName(e.target.value)}/>
            </div>
{/* 
			<div className='input-group'>
              <div className='label'>Profilbild</div>
              <input type='file' accept='image/*' placeholder='Profilbild' onChange={e => setFile(e.target.files[0])}/>
            </div> */}
  
            
  
            <button type='submit'>
              Create Account
            </button>
          </form>
        </div>
      </Layout>
    )
  }

  return (
    
      <div className='Login'>
        <div className='content-left'>
          <div className='logo'><img src='/img/logo.png' alt='logo'/></div>
          <div className='login-image'><img src='/img/login.svg' alt='login-img' /></div>
        </div>
        <div className='content-right'>
        
        <form className='box'>
          <div className='box-login'>
          <h1>Login</h1>
          <div className='toggle-register' onClick={() => setShowRegister(true)}>
            i don't have an Account !
          </div>
          <div className='line'><span></span>Or<span></span></div>
          </div>

          <div className='box-input'>
            
          <div className='input-group'>
            <div className='label'>email:</div>
            <input type='email' value={email} onChange={e => setEmail(e.target.value)}/>
          </div>

          <div className='input-group'>
            <div className='label'>password:</div>
            <input type='password'  value={password} onChange={e => setPassword(e.target.value)}/>
          </div>

       

          <button type='submit'>
            Login
          </button>
          </div>
         
          

        </form>
      
        </div>
      </div>
  
   
  )
 
}
