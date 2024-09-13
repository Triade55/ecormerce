

import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import Image from 'next/image';
import InvoiceRow from './invoiceRow';
const invoices = [
    {
      image: "/one.jpg",
      name: "Lorem, ipsum dolor.",
      price: 1.0,
      qte: 7,
    },
    {
      image: "/one.jpg",
      name: "Paid iqsjkqs yuhqsj",
      price: 1000,
      qte: 7,
    },
    {
      image: "/one.jpg",
      name: "ouqjsiklqso uqsidkjbnqs qigduskjb",
      price: 1000,
      qte: 7,
    },
    {
      image: "/one.jpg",
      name: "Paid",
      price: 1000,
      qte: 7,
    },
  ];
export default function CartTable() {
  return (
    <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]"></TableHead>
            <TableHead>Produits</TableHead>
            <TableHead>Prix</TableHead>
            <TableHead className="text-center w-10">Qte</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, i) => (
            <InvoiceRow invoice={invoice} key={i}  />
          ))}
        </TableBody>
      </Table>
  )
}
