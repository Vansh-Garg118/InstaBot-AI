import React from 'react'
import Image from 'next/image'; 
import { createAvatar } from '@dicebear/core';
import { rings } from '@dicebear/collection';


function Avatar({seed,className}:{seed:string; className?:string}) {

    const avatar=createAvatar(rings,{
        seed,
    });
    const svg=avatar.toString();
    const dataurl= `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
  return (
    // <div>Avatar</div>
    <Image
    src={dataurl} 
    alt="user Avatar"
    width={100}
    height={100}
    className={className}
    >

    </Image>
  )
}

export default Avatar