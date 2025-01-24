"use client"
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Certificate1 from "../../../public/1.jpg"
import Certificate2 from "../../../public/2.jpg"
import Certificate3 from "../../../public/3.jpg"
import Certificate4 from "../../../public/4.jpg"
import Certificate5 from "../../../public/5.jpg"
import Certificate6 from "../../../public/6.jpeg"
import Certificate7 from "../../../public/7.jpeg"
import Certificate8 from "../../../public/8.jpeg"


import Image from "next/image"
import { StaticImageData } from "next/image"

interface Certificate {
    img?: StaticImageData;
    title?: string;
    description?: string;
    date?: string;
}

export default function CarouselDemo() {

    const Certificates: Certificate[] = [
        {
            img: Certificate1
        },
        {
            img: Certificate2
        },
        {
            img: Certificate3
        },
        {
            img: Certificate4
        },
        {
            img: Certificate5
        },
        {
            img: Certificate6
        },
        {
            img: Certificate8
        },
        {
            img: Certificate7
        },

    ]
    return (
        <div className="w-full h-full flex items-center justify-center">
            <Carousel className="w-full max-w-2xl">
                <CarouselContent className="gap-6">
                    {Certificates.map((certificate, index) => (
                        <CarouselItem key={index} className="flex-shrink-0 w-96">
                            <Card className="shadow-lg">
                                <CardContent className="p-4">
                                    <Image
                                        src={certificate.img!}
                                        alt="Certificate"
                                        className="rounded-lg"
                                        layout="responsive"
                                        width={400}
                                        height={300}
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
