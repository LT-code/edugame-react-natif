import * as React from 'react';
import ChooseType from './auth/ChooseType';

export default (props) => {
  const { navigation } = props;

  console.log(props);

  return (
    <ChooseType/>
  );
}
