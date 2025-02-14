
'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Overview } from "./overview"
import { ChartBar } from "./barChart"
import { Chart } from "./pieChart"

const slides = [
  { id: "overview", component: <Overview /> },
  { 
    id: "second-chart", 
    component: (
      <div className="flex w-full gap-4">
        <div className="w-1/2"><ChartBar /></div>
        <div className="w-1/2"><Chart /></div>
      </div>
    ) 
  }
];

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.id}>
            <div className="p-5">
              <Card>
                <CardContent className="flex justify-center items-center w-full">
                  {slide.component}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
