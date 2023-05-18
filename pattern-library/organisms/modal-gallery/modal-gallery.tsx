import React from "react"
import Lightbox from "yet-another-react-lightbox"
import { ImageSlide } from "../../atoms/image-slide"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon
} from "@heroicons/react/24/solid"
import { ModalGalleryProperties } from "./types"

export default function ModalGallery({
  index,
  open,
  slideImages,
  onClose,
  onView
}: ModalGalleryProperties) {
  return (
    <Lightbox
      index={index}
      className="modal"
      open={open}
      close={onClose}
      slides={slideImages}
      render={{
        slide: ImageSlide,
        iconPrev: () => (
          <ChevronLeftIcon className="h-6 w-6 -translate-x-0.5" />
        ),
        iconNext: () => (
          <ChevronRightIcon className="h-6 w-6 translate-x-0.5" />
        ),
        iconClose: () => <XMarkIcon className="h-6 w-6" />
      }}
      on={{
        view: ({ index }) => onView(index)
      }}
    />
  )
}
