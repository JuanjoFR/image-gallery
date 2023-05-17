"use client"

import React from "react"
import Lightbox, { SlideImage } from "yet-another-react-lightbox"
import { ImageSlide } from "../../atoms/image-slide"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { ModalGalleryProperties } from "./types"

// shimmer project example: https://github.com/vercel/next.js/blob/canary/examples/image-component/pages/shimmer.tsx
// const shimmerDark = (w: number, h: number) => `
// <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//   <defs>
//     <linearGradient id="g">
//       <stop stop-color="#333" offset="20%" />
//       <stop stop-color="#222" offset="50%" />
//       <stop stop-color="#333" offset="70%" />
//     </linearGradient>
//   </defs>
//   <rect width="${w}" height="${h}" fill="#333" />
//   <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
//   <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
// </svg>`
const shimmerLight = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#ccc" offset="20%" />
      <stop stop-color="#ddd" offset="50%" />
      <stop stop-color="#ccc" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#ccc" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str)

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
      // open={index >= 0}
      open={open}
      // close={() => setIndex(-1)}
      // close={() => setOpen(false)}
      close={onClose}
      slides={photos.map(
        (photo) =>
          ({
            src: photo.urls.regular,
            blurDataURL: `data:image/svg+xml;base64,${toBase64(
              shimmerLight(photo.width, photo.height)
            )}`,
            width: photo.width,
            height: photo.height
          } as SlideImage)
      )}
      render={{
        slide: ImageSlide,
        // iconPrev: () => <ChevronLeftIcon className="h-6 w-6 text-blue-500" />
        iconPrev: () => <ChevronLeftIcon />,
        iconNext: () => <ChevronRightIcon />
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
