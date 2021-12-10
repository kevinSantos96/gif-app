import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGriditem } from './GifGriditem';

export const GifGrid = ({categoria}) => {
    
    
    // const [Images, setImages] = useState([]);
     const {data:images,loading} = useFetchGifs( categoria );

    // useEffect(()=>{
    //     getGifs( categoria )
    //     .then( setImages );
    // }, [ categoria ]); //arr de dependencias, si la categoria cambia va volver a ejecutarse
  
    // getGifs();

    return (
        <>
        <h3 className='animate__rubberBand'>{ categoria }</h3> 
        {loading && <p className='animate__animated animate__flash'> Loading</p>}
        <div className='card-grid'>
          
        {/* <h4>{ count }</h4> */}
          {/* <button onClick={()=>setcount(count + 1)}></button> } */}

                {images.map(img =>(
                                <GifGriditem
                                key ={img.id}
                                // img ={ img.title}
                                {...img}
                                />
                            ))
                            }
        </div>
        </>
    )
}
