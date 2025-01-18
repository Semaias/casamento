import React from 'react'
import Image from "next/image";

const HeroCard = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="w-8/12 p-6 z-40 -mt-36 sm:-mt-40 md:-mt-44 lg:-mt-52 bg-white border border-gray-200 shadow-[-10px_15px_0px_0px_rgba(141,_186,_156,_1)]">
                <div className="relative flex-shrink-0 w-24 h-24 bg-indigo-100 flex items-center justify-center">
                    <Image
                        src="/js.png"
                        alt="Monograma do casal"
                        fill
                        className="object-cover object-center"
                    />
                </div>
                <a href="#">
                    <h5 className="mb-2 text-2xl font-black text-[#394C40] tracking-tight ">
                        Janielle & Semaias
                    </h5>
                </a>
                <p className="mb-3 font-normal text-[#394C40] ">
                    Estamos felizes em poder compartilhar esse momento com todos vocês!
                </p>
            </div>
        </div>
    )
}

export default HeroCard
