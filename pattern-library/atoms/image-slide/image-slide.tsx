import NextImage, { StaticImageData } from "next/image"
import {
  isImageFitCover,
  isImageSlide,
  useLightboxProps
} from "yet-another-react-lightbox/core"
import { Coords, ImageSlideProperties } from "./types"
import React from "react"

const DELTA = 6

export default function ImageSlide({
  slide,
  rect,
  onClick
}: ImageSlideProperties) {
  const { imageFit } = useLightboxProps().carousel
  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit)
  const [mouseCoords, setMouseCoords] = React.useState<Coords>()

  const width =
    !cover && slide.width && slide.height
      ? Math.round(
          Math.min(rect.width, (rect.height / slide.height) * slide.width)
        )
      : rect.width

  const height =
    !cover && slide.width && slide.height
      ? Math.round(
          Math.min(rect.height, (rect.width / slide.width) * slide.height)
        )
      : rect.height

  function handleMouseDown(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    setMouseCoords({
      x: event.pageX,
      y: event.pageY
    })
  }

  function handleMouseUp(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (mouseCoords) {
      const diffX = Math.abs(event.pageX - mouseCoords.x)
      const diffY = Math.abs(event.pageY - mouseCoords.y)

      if (diffX < DELTA && diffY < DELTA && onClick) {
        onClick(slide)
      }
    }

    setMouseCoords(undefined)
  }

  return (
    <div
      style={{ position: "relative", width, height }}
      className="bg-slate-300"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <NextImage
        fill
        alt=""
        src={slide as StaticImageData}
        loading="eager"
        placeholder="blur"
        draggable={false}
        style={{ objectFit: cover ? "cover" : "contain" }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
      />
    </div>
  )
}
