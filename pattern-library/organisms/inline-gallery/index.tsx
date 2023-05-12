"use client"

import React from "react"
import Lightbox from "yet-another-react-lightbox"
import ImageSlide from "../../atoms/image-slide"
import Inline from "yet-another-react-lightbox/plugins/inline"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import ThumbnailSlide from "../../atoms/thumbnail-slide"
import { useLightboxProps } from "yet-another-react-lightbox/core"

// shimmer project example: https://github.com/vercel/next.js/blob/canary/examples/image-component/pages/shimmer.tsx
const shimmerDark = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`
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

function InlineGalery({ index, photos, onView, onClick }) {
  const thumbnailsRef = React.useRef(null)

  console.log("render inline gallery", index)

  return (
    <div className="aspect-[3/2] w-full">
      <Lightbox
        className="inline"
        index={index}
        // open={index >= 0}
        // close={() => setIndex(-1)}
        plugins={[Inline, Thumbnails]}
        thumbnails={{ ref: thumbnailsRef }}
        // open={index >= 0}
        // close={() => setIndex(-1)}
        slides={photos.map((photo, index) => ({
          index,
          src: photo.urls.regular,
          blurDataURL: `data:image/svg+xml;base64,${toBase64(
            shimmerLight(photo.width, photo.height)
          )}`,
          width: photo.width,
          height: photo.height
        }))}
        render={{
          // slide: CustomImage,
          // slide: ImageSlide,
          slide: (props) => {
            return <ImageSlide {...props} onClick={onClick} />
          },
          thumbnail: ThumbnailSlide
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
    </div>
  )
}

export default InlineGalery
