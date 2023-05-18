"use client"

import NextImage, { StaticImageData } from "next/image"
import {
  isImageFitCover,
  isImageSlide,
  useLightboxProps
} from "yet-another-react-lightbox/core"
import { ThumbnailSlideProperties } from "./types"

export default function ThumbnailSlide({
  slide,
  rect
}: ThumbnailSlideProperties) {
  const { imageFit } = useLightboxProps().carousel
  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit)
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

  return (
    <div
      style={{ position: "relative", width, height }}
      className="bg-slate-300"
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
