import React, { useState, useEffect } from 'react';

export default function Alert(props) {

  const classs = `alert alert-${props.type}`;

  return (
    <div>
        <div className={classs} role="alert">{props.message}</div>
    </div>
  );
}
