import React from 'react';
import Image from "next/image";

const HeroCard = () => {
    return (
        <div className="relative flex items-center justify-center">
            <div
                className=" w-8/12 lg:w-7/12 p-6 z-20 
            -mt-32 md:-mt-44 lg:-mt-52 bg-white
            shadow-[-10px_15px_0px_0px_rgba(141,_186,_156,_1)]">
                <div className="relative flex-shrink-0 w-24 h-24 flex items-center justify-center">
                    <Image
                        src="/js.png"
                        alt="Monograma do casal"
                        fill
                        className="object-cover object-center mb-3"
                    />
                </div>
                <h1 className="capitalize mb-1 px-6 pt-6 text-3xl font-black text-[#394C40] tracking-tight ">
                    Janielle & Semaias
                </h1>
                <p className="mb-1 px-6 text-xl tracking-[0.27em] font-light text-[#394C40] ">
                    21 de junho de 2025
                </p>
                <p className="mb-1 px-6 font-medium text-[#394C40] ">
                    Estamos felizes em poder compartilhar esse momento com todos vocês!
                </p>
            </div>
        </div>
    );
};

export default HeroCard;
