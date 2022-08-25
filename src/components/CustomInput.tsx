import React, {useImperativeHandle} from 'react'


type Props = {
    type : string,
    id : string,
    value : string,
    onChange : (e : any) => any   
}

const CustomInput = (props: Props, ref: any) => {
        useImperativeHandle(ref, ()=>{
            return {alerthi: () => alert("hi")}
        }, [])


  return (
    <input  type = {props.type}
     id = {props.id}
    ref = {ref}
    value = {props.value}
    onChange = {props.onChange}   />

  )
}

export default React.forwardRef(CustomInput)