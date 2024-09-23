import React from 'react'

export default function Iframe2({imagen}) {
  return (
   <iframe className="w-100" src={`https://drive.google.com/file/d/${imagen}/preview`} width="800" height="800" border="none"></iframe>
  );
}
