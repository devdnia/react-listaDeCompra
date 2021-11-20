import React from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ( { handleAddTodo }) => {

    const [ {description}, handleInputChange, reset ]=useForm({
        description : ''
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if ( description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id   : new Date().getTime(),
            desc : description,
            done : false
        };

        handleAddTodo( newTodo );
        reset();
    }
    return (
        <>
            <h4 className='text-primary'>
                Agregar producto a la lista
            </h4>
            <hr />                        
            <form onSubmit={ handleSubmit }>
                    <input 
                        type='text'
                        name= 'description'
                        className='form-control'
                        placeholder='Producto...'
                        autoComplete='off'
                        value={ description }
                        onChange={ handleInputChange }
                    />            
                    <button
                        type='submit'
                        className='btn btn-outline-primary mt-3 mb-3 btn-block'
                    >
                        Agregar
                    </button>

            </form>  
        </>
    )
}
