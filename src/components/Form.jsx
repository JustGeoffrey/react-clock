import { useRef } from 'react'

const Form = ({ nameRef, emailRef, ageRef, handleAddUser }) => {
    nameRef = useRef()
    emailRef = useRef()
    ageRef = useRef()

    return (
        <form >
            <h4>Add A new User</h4>

            <label htmlFor="name-input">Name</label>
            <input type="text" ref={nameRef} id='name-input' />
            <br />
            <label htmlFor="email-input">Email</label>
            <input type="text" ref={emailRef} id='Eeail-input' />
            <br />
            <label htmlFor="age-input">Age</label>
            <input type="text" ref={ageRef} id='age-input' />
            <br />

            <button type='submit' className='add-user-btn' onClick={(event) => {
                event.preventDefault()
                handleAddUser(nameRef.current.value, emailRef.current.value, ageRef.current.value)
                nameRef.current.value = ""
                emailRef.current.value = ""
                ageRef.current.value = ""
            }}>Add User</button>
        </form>
    )
}

export default Form