// Write your code here
import './index.css'

const Login = props => {
  const {isLogged} = props

  const isLoggedChanged = () => {
    isLogged()
  }

  return (
    <button className="btn" type="button" onClick={isLoggedChanged}>
      Login
    </button>
  )
}

export default Login
