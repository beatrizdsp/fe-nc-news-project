import {Link} from 'react-router-dom'

function CustomErrors({message,status}){
    return(
        <div>
            <h1>
                {status} Error
            </h1>
            <h2>
                {message}
            </h2>
            <Link to='/'>Return to homepage</Link>
        </div>
    )
}
export default CustomErrors