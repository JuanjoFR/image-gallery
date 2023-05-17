"use client"

import React from "react"
import Lightbox, { SlideImage } from "yet-another-react-lightbox"
import { ImageSlide } from "../../atoms/image-slide"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon
} from "@heroicons/react/24/solid"
import { ModalGalleryProperties } from "./types"
import { createBlurData } from "@/library/utilities"

export default function ModalGallery({
  index,
  open,
  photos,
  onClose,
  onView
}: ModalGalleryProperties) {
  // const [currentInlineGalleryIndex, setCurrentInlineGalleryIndex] =
  //   React.useState(0)
  // // const [index, setIndex] = React.useState(-1)
  // const [images, setImages] = React.useState([])
  // const thumbnailsRef = React.useRef(null)
  // const [open, setOpen] = React.useState(false)

  return (
    <Lightbox
      index={index}
      className="modal"
      // open={index >= 0}
      open={open}
      // close={() => setIndex(-1)}
      // close={() => setOpen(false)}
      close={onClose}
      slides={photos.map(
        (photo) =>
          ({
            src: photo.urls.regular,
            blurDataURL: createBlurData(photo.width, photo.height),
            width: photo.width,
            height: photo.height
          } as SlideImage)
      )}
      render={{
        slide: ImageSlide,
        // iconPrev: () => <ChevronLeftIcon />,
        // iconNext: () => <ChevronRightIcon />
        iconPrev: () => (
          <ChevronLeftIcon className="h-6 w-6 -translate-x-0.5" />
        ),
        iconNext: () => (
          <ChevronRightIcon className="h-6 w-6 translate-x-0.5" />
        ),
        iconClose: () => <XMarkIcon className="h-6 w-6" />
      }}
      on={{
        view: ({ index }) => {
          onView(index)
          // if (index !== nextIndex) {
          //   console.log("set new index", nextIndex)
          //   onView(nextIndex)
          // }
        }
      }}
      // https://github.com/igordanchenko/yet-another-react-lightbox/issues/94
      // iconClose: () => <Iconify width={ICON_SIZE} icon="carbon:close" />,
      // iconZoomIn: () => <Iconify width={ICON_SIZE} icon="carbon:zoom-in" />,
      // iconZoomOut: () => <Iconify width={ICON_SIZE} icon="carbon:zoom-out" />,
      // iconSlideshowPlay: () => <Iconify width={ICON_SIZE} icon="carbon:play" />,
      // iconSlideshowPause: () => <Iconify width={ICON_SIZE} icon="carbon:pause" />,
      // iconPrev: () => <Iconify width={ICON_SIZE + 8} icon="carbon:chevron-left" />,
      // iconNext: () => <Iconify width={ICON_SIZE + 8} icon="carbon:chevron-right" />,
      // iconExitFullscreen: () => <Iconify width={ICON_SIZE} icon="carbon:center-to-fit" />,
      // iconEnterFullscreen: () => <Iconify width={ICON_SIZE} icon="carbon:fit-to-screen" />
    />
  )
}
