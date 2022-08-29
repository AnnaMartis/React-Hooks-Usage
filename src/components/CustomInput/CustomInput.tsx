import React, {useImperativeHandle} from 'react';

import { CustomInputProps } from '../../common/Types';

const CustomInput = (props: CustomInputProps, ref: any) => {
  useImperativeHandle(ref, ()=> {
    return {alerthi: () => alert("hi")};
  }, []);

  return (
    <input  type = {props.type}
      id = {props.id}
      ref = {ref}
      value = {props.value}
      onChange = {props.onChange}   
    />
  );
};

export default React.forwardRef(CustomInput);