import React,{ useState, Fragment } from 'react';



function RegisterPage() {
    const [ name, setName ] = useState('');
    const [ id, setId ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();

        const data = {
            name: name,
            id: id,
            password: password,
            email: email,
        }
        console.log(data);

    }

    const idChangeHandler = (event) => {
        setId(event.target.value);
    }
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }
    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }
    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }
    return (
        <div>
            <Fragment>
            <h2>Register</h2>
            <form onSubmit={submitHandler}>
                <div className='form__content'>
                    <input
                    type='name'
                    placeholder='Enter name'
                    value={name}
                    onChange={nameChangeHandler} 
                    />
                    <div></div>
                    <input 
                    type='id'
                    placeholder='Enter id'
                    value={id}
                    onChange={idChangeHandler}
                    />
                    <div></div>
                    <input 
                    type='password'
                    placeholder='Enter password'
                    value={password}
                    onChange={passwordChangeHandler}
                    />
                    <div></div>
                    <input 
                    type='email'
                    placeholder='Enter email'
                    value={email}
                    onChange={emailChangeHandler}
                    />
                </div>
                <button className='btn'>Sign In</button>
            </form>
        </Fragment>
        </div>
    )
}

export default RegisterPage
