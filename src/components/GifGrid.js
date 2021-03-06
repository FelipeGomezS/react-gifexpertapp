import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {

    const { data:images,loading } = useFetchGifs( categoria );
 
  return (
      <>
    <h3>{ categoria }</h3>

    {loading && <p className='animate__animated animate__flash' >Loading...</p>}
    <div className='card-grid animate__animated animate__fadeInDown'>
            {
                images.map((img) => {
                return <GifGridItem 
                            key = { img.id }
                            { ...img } />
            })
            }
        
    </div>
    </>
  )
}
