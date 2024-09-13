import { Star } from 'lucide-react'
import React from 'react'

type Props = {
    n: number
}

export default function Stars({ n }: Props) {
    const Total = 5
    const sans = Total - n

    return (
        <div className="flex items-center">
            {/* Étoiles pleines */}
            {Array.from({ length: n }).map((_, index) => (
                <Star fill='yellow' key={index+"z"}  />
            ))}
            {/* Étoiles vides */}
            {Array.from({ length: sans }).map((_, index) => (
                <Star key={index+"a"} />
            ))}
        </div>
    )
}
