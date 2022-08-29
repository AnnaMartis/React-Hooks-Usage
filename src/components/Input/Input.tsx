import { useRef, useState } from 'react';

import CustomInput from '../CustomInput/CustomInput';

const Input = () => {

  const [customInputValue, setCustomInputValue] = useState("green");

  const inputRef = useRef<any>(null!);

  return (
    <div className='InputTest'>
      <CustomInput type="text" id='search' ref={inputRef} value={customInputValue} onChange={e => setCustomInputValue(e.target.value)} />
      <br/>
      <button onClick={() => inputRef.current.alerthi()}>Focus</button>
    </div>
  );
};

export default Input;