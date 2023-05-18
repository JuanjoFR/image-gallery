import React from "react"
import Lightbox from "yet-another-react-lightbox"
import { ImageSlide } from "../../atoms/image-slide"
import Inline from "yet-another-react-lightbox/plugins/inline"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import { ThumbnailSlide } from "../../atoms/thumbnail-slide"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { InlineGalleryProperties } from "./types"

export default function InlineGalery({
  index,
  slideImages,
  onView,
  onClick
}: InlineGalleryProperties) {
  const thumbnailsRef = React.useRef(null)

  return (
    <Lightbox
      className="inline"
      index={index}
      plugins={[Inline, Thumbnails]}
      thumbnails={{ ref: thumbnailsRef }}
      slides={slideImages}
      render={{
        slide: (props) => {
          return <ImageSlide {...props} onClick={onClick} />
        },
        thumbnail: ThumbnailSlide,
        iconPrev: () => (
          <ChevronLeftIcon className="h-6 w-6 -translate-x-0.5" />
        ),
        iconNext: () => <ChevronRightIcon className="h-6 w-6 translate-x-0.5" />
      }}
      on={{
        view: ({ index }) => onView(index)
      }}
    />
  )
}
