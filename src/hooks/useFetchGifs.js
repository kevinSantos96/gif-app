import { useState } from "react"
import { useEffect } from "react/cjs/react.development";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( categoria )=>{

 const [state, setstate] = useState( {
     data: [],
     loading : true 

 });

  useEffect(()=>{
       
    getGifs( categoria )
      .then(imgs => {

            setstate({
                data: imgs,
                loading : false
              });

        });
          


  },[]);
//  setTimeout(()=>{
//      setstate({
//          data:[1,2,3,4,5,6,],
//          loading: false
//      })
//  }, 3000);

 return state; //{data, loding}

}