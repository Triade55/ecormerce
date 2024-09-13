"use client"
import React, { useEffect, useState } from 'react'
import { TableCell, TableRow } from './ui/table'
import Image from 'next/image'
import clsx from 'clsx'

type Invoice = {
    image:string,
    name: string,
    price:number,
    qte:number
}
type Props ={
    invoice:Invoice
}

const InvoiceRow = ({invoice}: Props) => {
    const [qte,setQte] = useState<number>(invoice.qte)
    function handlerMoins() {
        if(qte>1){
            setQte(qte-1)
        }
    }
  return (
    <TableRow >
    <TableCell className="font-medium">
      <Image src={invoice.image} alt="" width={100} height={100} />
    </TableCell>
    <TableCell>{invoice.name}</TableCell>
    <TableCell>{invoice.price} FCFA</TableCell>
    <TableCell className="flex items-center">
      <div className={clsx("bg-primary py-2 px-4 text-white rounded-s-full cursor-pointer",qte <=1  && "bg-red-500 cursor-not-allowed")} onClick={()=>handlerMoins()}>-</div>
      <div className="py-2 px-6 bg-white">{qte}</div>
      <div className="bg-primary py-2 px-4 text-white rounded-e-full cursor-pointer" onClick={()=>setQte(qte+1)}>+</div>
    </TableCell>
    <TableCell className="text-right">
      {invoice.price * invoice.qte} FCFA
    </TableCell>
  </TableRow>
  )
}

export default InvoiceRow