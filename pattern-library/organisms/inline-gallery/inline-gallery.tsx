"use client"

import React from "react"
import Lightbox, { SlideImage } from "yet-another-react-lightbox"
import { ImageSlide } from "../../atoms/image-slide"
import Inline from "yet-another-react-lightbox/plugins/inline"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import { ThumbnailSlide } from "../../atoms/thumbnail-slide"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { InlineGalleryProperties } from "./types"
import { createBlurData } from "@/library/utilities"

export default function InlineGalery({
  index,
  photos,
  onView,
  onClick
}: InlineGalleryProperties) {
  const thumbnailsRef = React.useRef(null)

  console.log("render inline gallery", index)

  return (
    <Lightbox
      className="inline"
      index={index}
      // open={index >= 0}
      // close={() => setIndex(-1)}
      plugins={[Inline, Thumbnails]}
      thumbnails={{ ref: thumbnailsRef }}
      // open={index >= 0}
      // close={() => setIndex(-1)}
      slides={photos.map(
        (photo, index) =>
          ({
            index,
            src: photo.urls.regular,
            blurDataURL: createBlurData(photo.width, photo.height),
            width: photo.width,
            height: photo.height
          } as SlideImage)
      )}
      render={{
        // slide: CustomImage,
        // slide: ImageSlide,
        slide: (props) => {
          return <ImageSlide {...props} onClick={onClick} />
        },
        thumbnail: ThumbnailSlide,
        // buttonPrev: () => (
        //   <button
        //     className="h-4 w-4 rounded-full bg-red-800"
        //     onClick={(event) => {
        //       event.preventDefault()
        //       console.log("prev!")
        //     }}
        //   />
        // ),
        // iconPrev: () => <ChevronLeftIcon className="h-6 w-6 text-gray-500" />
        iconPrev: () => (
          <ChevronLeftIcon className="h-6 w-6 -translate-x-0.5" />
        ),
        iconNext: () => <ChevronRightIcon className="h-6 w-6 translate-x-0.5" />
      }}
      on={{
        view: ({ index }) => {
          onView(index)
        }
      }}
      // on={{
      //   view: ({ index }) => {
      //     console.log("on view", index)
      //   },
      //   click: ({ index }) => {
      //     console.log("click", index)
      //   }
      // }}
      // on={{
      //   entered: () => {
      //     console.log("entered")
      //   },
      //   click: () => {
      //     console.log("click")
      //     // if (thumbnailsRef.current?.visible) {
      //     //   thumbnailsRef.current?.hide()
      //     // } else {
      //     //   thumbnailsRef.current?.show()
      //     // }
      //   }
      // }}
    />
  )
}
