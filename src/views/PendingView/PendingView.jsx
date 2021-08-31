import React from 'react';
import s from './PendingView.module.css';

import Spinner from 'react-loader-spinner';

export default function Loader() {
  return (
    <Spinner
      className={s.Loader}
      type="Grid"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />
  );
}
