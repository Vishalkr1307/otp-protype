import React, { useEffect, useRef, useState } from 'react'
import { PinBox } from './PinBox'
import propTypes from 'prop-types'
export const InputBox = ({length,label,perBox,onChange}) => {
    const [otp,setOtp]=useState(new Array(length).fill(""))
    const element=useRef(new Array(length).fill(""))
    
    
    
    const handleChange=(value,ind)=>{
        console.log(value.length)
        let val=[...otp]
        val[ind]=value
        
        
        setOtp(val)
        if(value.length>0 && value.length<=perBox && ind<length)
        
            element.current[ind+1]?.focus()

        
        
        onChange(val.join(''))
        
        

    }
    const handleBackspace=(val,ind)=>{
        if(ind>0){

            element.current[ind-1]?.focus()
        }

    }
    
    
    
  return (
    <div>
        <h1>{label}</h1>
        {otp.map((item,ind)=><PinBox key={ind} ref={(n)=>(element.current[ind]=n)} onChange={(val)=>handleChange(val,ind)} onBackspace={(val)=>handleBackspace(val,ind)} max={perBox}/>)}
        
    </div>
  )
}
InputBox.PropTypes={
    length:propTypes.number.isRequired,
    perBox:propTypes.number.isRequired,
    label:propTypes.string.isRequired

}
InputBox.defaultProps={
    label:"Label",
    perBox:1

}
