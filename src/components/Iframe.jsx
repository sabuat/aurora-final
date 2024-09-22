import React from 'react'

export default function Iframe({imagen}) {
  return (
   <iframe src={`https://drive.google.com/file/d/${imagen}/preview`} width="300" height="300" border="none"></iframe>
  );
}
