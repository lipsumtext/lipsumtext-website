import './BaseContainer.styles.css'

export const BaseContainer = ({ children }) => {
    return <div className='base-container'>
        {children}
    </div>
}