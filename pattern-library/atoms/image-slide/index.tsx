import NextImage from "next/image"
import {
  isImageFitCover,
  isImageSlide,
  useLightboxProps
} from "yet-another-react-lightbox/core"
import { ImageSlideProperties } from "./types"

function ImageSlide({ slide, rect, onClick, ...rest }: ImageSlideProperties) {
  const { imageFit } = useLightboxProps().carousel
  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit)

  const width = !cover
    ? Math.round(
        Math.min(rect.width, (rect.height / slide.height) * slide.width)
      )
    : rect.width

  const height = !cover
    ? Math.round(
        Math.min(rect.height, (rect.width / slide.width) * slide.height)
      )
    : rect.height

  function handleClick() {
    if (onClick) {
      onClick(slide)
    }
  }

  return (
    <div
      style={{ position: "relative", width, height }}
      className="bg-slate-300"
      onClick={handleClick}
    >
      <NextImage
        fill
        alt=""
        src={slide}
        loading="eager"
        placeholder="blur"
        draggable={false}
        style={{ objectFit: cover ? "cover" : "contain" }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
      />
    </div>
  )
}

export default ImageSlide
