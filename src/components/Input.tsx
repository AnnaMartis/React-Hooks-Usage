import { useRef, useState} from 'react';
import CustomInput from './CustomInput';


const Input = () => {

    const [value, setValue] = useState("green");

    const inputRef = useRef<any>(null!);

   

  return (
    <div className='InputTest'>
        <CustomInput type="text" id='search' ref={inputRef} value={value} onChange={e => setValue(e.target.value)} />
        <br/>
        <button onClick={() => 
          
           inputRef.current.alerthi()
          }>Focus</button>
    </div>
  )
}

export default Input