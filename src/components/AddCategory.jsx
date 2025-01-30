import {useState} from 'react'

export const AddCategory = ({newCategory}) => {

const [inputValue, setInputValue] = useState('');

// Recibe el valor ingresado a traves del input
const onChangeValue = ({target}) => {
    setInputValue(target.value)
}

// Cambia el valor recibido en el input al dar enter
const onSubmit = (event) => {
    event.preventDefault();

    if(inputValue.trim().length <= 1) return;

    newCategory(inputValue.trim())
    setInputValue('');
}

  return (
    <form onSubmit={(event) => onSubmit(event)}>
        <input  type="text"
                placeholder='Buscar gifs'
                value={inputValue}
                onChange={onChangeValue}
        />
    </form>  
  )
}
