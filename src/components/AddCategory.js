import React,{useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategory}) => {

    const [InputValue, setInputValue] = useState('');

    const handleInputChange = (e)=>{
    
        setInputValue(e.target.value);
    }
    const handleSubmit=(e)=>{
      e.preventDefault();

      if(InputValue.trim().length>2){
        setCategory(cats=> [InputValue,...cats]);
        setInputValue('');
      }else{
          alert('Algo salio mal');
      }
      
    }

    return (
         
          <form onSubmit={handleSubmit}>
              <input 
               type="text"
               value={InputValue}
               onChange={ handleInputChange }
              />
          </form>

           
 
    )
}

AddCategory.prototype={
    setCategory: PropTypes.func.isRequired
}

