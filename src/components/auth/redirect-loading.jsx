import { Spinner } from 'react-bootstrap'
import './redirect-loading.scss'

const RedirectLoading = () => {
  return (
    <div className="redirect-loading">
    <Spinner animation="border" />
  </div>
  )
}

export default RedirectLoading