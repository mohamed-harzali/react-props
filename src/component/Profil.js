import React from 'react'
import PropTypes from 'prop-types';


const Profil = ({age,fullname,style,alert})=> {
  return (
    <div style={style}>Profil
    <div className='ag'>{age}</div>
    <div className='fl'> {fullname}</div>
    <div className='alt'><button onClick={alert}>alertme</button></div>
    
    </div>
  )
}

Profil.PropTypes={age:PropTypes.string}
Profil.PropTypes={fullname:PropTypes.string}

export default Profil
