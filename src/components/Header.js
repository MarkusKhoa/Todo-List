import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () =>{
        console.log('Clicked')
    }
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button 
            color="red"
            text="Add new task" 
            onClick={onClick}></Button>
        </header>
    )
}

Header.defaultProps ={
    title: 'Task tracker',
}

Header.propTypes ={
    title: PropTypes.string.isRequired,
}

export default Header