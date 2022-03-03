import React, { useState } from 'react'
import  {CopyToClipboard}  from 'react-copy-to-clipboard';

export const GifGridItem = ( { id, title, url } ) => {

  const [copia, setCopia] = useState(false);

  const copyLink = (url) => {
        const valor = document.createElement('input');
        valor.setAttribute("value",url);
        document.execCommand("copy");
  }
    
  return (
    <div className='card animate__animated animate__fadeInDown'>
        <img src={ url } alt={ title } />
        <p> { title } </p>
        <CopyToClipboard text={url} onCopy={ () => setCopia(true) }>
              <button className='btnCopiar'>Copiar link</button>
            </CopyToClipboard>
        {copia && <span>copiado!</span>}
    </div>
  )
}
