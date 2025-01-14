import React from 'react'
import Image from "next/image";

const HeroCard = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="max-w-lg w-8/12 p-6 z-40 -mt-52 bg-white border border-gray-200 shadow-[-10px_15px_0px_0px_rgba(34,_197,_94,_1)]">
                <div className="relative flex-shrink-0 w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center">
                    <Image
                        src="/js.jpg"
                        alt="Monograma do casal"
                        fill
                        className="object-cover object-center rounded-full"
                    />
                </div>
                <a href="#">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
                        Janielle & Semaias
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-500 ">
                    Estamos felizes em poder compartilar esse momento com todos vocês
                </p>
            </div>
        </div>
    )
}

export default HeroCard
