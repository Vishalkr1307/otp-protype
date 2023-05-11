import React from 'react'
const style={
    width:10,
    backGroundColor: 'white',
    padding:10,
    margin:2
}

export const PinBox =React.forwardRef(({onChange,max,onBackspace},ref) => {
    
    const handleKeyUp=(e)=>{
        console.log(e.keyCode)
        console.log(e.target.value)
        switch(e.keyCode){
            case 8:{
                if(!e.target.value) {
                    onBackspace(e.target.value)
                }
                break

            }
            case 9:{
                e.preventDefault()
                break
            }
                
            default:{
                e.preventDefault()
            }
        }
        onChange(e.target.value)
        

    }
  return (
    <>
        <input type="text" onKeyUp={handleKeyUp}  maxLength={max} style={style} ref={ref}  />
    </>
  )
})
