// Write your code here
import './index.css'

const Logout = props => {
  const {isLogged} = props

  const isLoggedChanged = () => {
    isLogged()
  }

  return (
    <button className="btn" type="button" onClick={isLoggedChanged}>
      Logout
    </button>
  )
}

export default Logout
