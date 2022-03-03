import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( categoria ) => {

    const [first, setfirst] = useState({
        data: [],
        loading: true,
    });

    useEffect( () => {

            getGifs( categoria )
                .then(imgs => {
                setfirst({
                    data: imgs,
                    loading: false
                });
                })
      

    },[categoria])

    return first;

}