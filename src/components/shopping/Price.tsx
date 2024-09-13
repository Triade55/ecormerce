"use client"
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type Props = {};

export default function Price({}: Props) {
    const [min,setMin]=useState("0")
    const [max,setMax]=useState("100")
    const [value,setValue]=useState<string>(min)
    
  return (
    <div className="bg-white shadow-md mt-0.5">
      <div className="uppercase font-semibold pt-2 px-4 text-sm flex justify-between items-center">
        Prix (FCFA) 
        <button className="text-primary hover:bg-blue-500/20 p-1.5">OK</button>
      </div>
      <div className="relative px-5">
        <Input type="range" className="p-0 bg-red-500" min={min} max={max} value={value} onChange={(e)=>setValue(e.target.value)}/>
      </div>
      <div className="flex gap-2 px-4 pb-4">
        <Input type="number" className="p-1" value={min}  onChange={(e)=>setMin(e.target.value)}/> 
        -
        <Input type="number" className="p-1" value={max} onChange={(e)=>setMax(e.target.value)}/>
      </div>
    </div>
  );
}
