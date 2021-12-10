import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpert = ()=>{
 
   
    // const categorias =['Fc Barcelona','Man U','Dragon Ball', 'One Piece', 'Shingeki no Kyojin'];

    const [categorias, setCategorias] = useState([ 'one piece' ])
     
    //eventoclick
    // const handleAdd = ()=>setCategorias([...categorias,'Buko no Hero']);//agg uin elemento mas aun arreglo

    return(
             <>
             <h1>GifExpert</h1>
             <AddCategory  setCategory={setCategorias}/>
             <hr/>

             <ol>
                 {
                  categorias.map( category => (
                //   <li key={ category }> { category }</li>
                  <GifGrid 
                  key ={category}
                  categoria={category}/>
                    ))
                 }
             </ol>
             </>
    );
  
}
export default GifExpert;