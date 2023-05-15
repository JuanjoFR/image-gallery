"use client"

import React from "react"
import Lightbox from "yet-another-react-lightbox"
import CustomImage from "../../atoms/image"
import Inline from "yet-another-react-lightbox/plugins/inline"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import { InlineGallery } from "../inline-gallery"
import { ImageSlide } from "../../atoms/image-slide"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

// TODO
// Global: integrate with nextjs
//   https://yet-another-react-lightbox.com/examples/nextjs
// Global: create a hook to store the current index? I don't want to use "use client" in all the gallery component
// Step 1: add inline yarl with thumbnails plugin
//   https://yet-another-react-lightbox.com/plugins/inline
//   https://yet-another-react-lightbox.com/plugins/thumbnails
// Step 2: open full yarl when an image is pressed
// Extra: create a nice skeleton: https://flowbite.com/docs/components/skeleton/
// TODO declare ts slide (see Custom Slides section): https://yet-another-react-lightbox.com/advanced
// Example here of custom stye ts declaration: https://yet-another-react-lightbox.com/examples/custom-slides

// function convertImageToBase64(imgUrl, callback) {
//   const image = new Image()
//   image.crossOrigin = "anonymous"
//   image.onload = (event) => {
//     console.log("image loaded")
//     // const canvas = document.createElement('canvas');
//     // const ctx = canvas.getContext('2d');
//     // canvas.height = image.naturalHeight;
//     // canvas.width = image.naturalWidth;
//     // ctx.drawImage(image, 0, 0);
//     // const dataUrl = canvas.toDataURL();

//     callback && callback(event.target)
//   }
//   image.src = imgUrl
// }

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

function LightboxExample({ photos }) {
  // const [open, setOpen] = React.useState(false)
  const [currentInlineGalleryIndex, setCurrentInlineGalleryIndex] =
    React.useState(0)
  const [index, setIndex] = React.useState(-1)
  const [images, setImages] = React.useState([])
  const thumbnailsRef = React.useRef(null)
  const [open, setOpen] = React.useState(false)
  const [inlineGalleryIndex, setInlineGalleryIndex] = React.useState(2)

  console.log("render lightbox example")

  function handleInlineGalleryView(index) {
    setInlineGalleryIndex(index)
  }

  // console.log("photos", photos)

  // React.useEffect(() => {
  //   console.log("load images")

  //   convertImageToBase64(photos[0].urls.regular, (image) => {
  //     console.log("add image to array", image)
  //     setImages([image])
  //   })
  // }, [photos])

  return (
    <React.Fragment>
      <InlineGallery
        index={inlineGalleryIndex}
        photos={photos}
        onView={handleInlineGalleryView}
        onClick={(slide) => {
          console.log("TODO open image", slide.index)
          // setIndex(slide.index)
          setOpen(true)
        }}
      />

      {/* <button type="button" onClick={() => setIndex(2)}>
        Open Lightbox
      </button> */}

      {/* <div className="grid grid-cols-1 overflow-hidden sm:grid-cols-6">
        <ul className="flex sm:col-span-1 sm:flex-col">
          <li className="min-w-full">
            <img src="https://fakeimg.pl/691x921/ffffff" />
          </li>
          <li className="min-w-full">
            <img src="https://fakeimg.pl/691x921/ff0000" />
          </li>
          <li className="min-w-full">
            <img src="https://fakeimg.pl/691x921/00ff00" />
          </li>
          <li className="min-w-full">
            <img src="https://fakeimg.pl/691x921/0000ff" />
          </li>
        </ul>
        <div className="hidden sm:col-span-5 sm:block">
          <img src="https://fakeimg.pl/691x921/ffffff" />
        </div>
        <ul className="absolute bottom-0 flex w-full items-center justify-center bg-black/20 sm:hidden">
          <li className="m-1 h-1 w-8 cursor-pointer rounded-full bg-slate-500 hover:bg-slate-600" />
          <li className="m-1 h-1 w-4 cursor-pointer rounded-full bg-slate-400 hover:bg-slate-600" />
          <li className="m-1 h-1 w-4 cursor-pointer rounded-full bg-slate-400 hover:bg-slate-600" />
          <li className="m-1 h-1 w-4 cursor-pointer rounded-full bg-slate-400 hover:bg-slate-600" />
        </ul>
      </div> */}

      <Lightbox
        index={inlineGalleryIndex}
        // open={index >= 0}
        open={open}
        // close={() => setIndex(-1)}
        close={() => setOpen(false)}
        slides={photos.map((photo) => ({
          src: photo.urls.regular,
          blurDataURL: `data:image/svg+xml;base64,${toBase64(
            shimmerLight(photo.width, photo.height)
          )}`,
          width: photo.width,
          height: photo.height
        }))}
        render={{
          slide: ImageSlide,
          // iconPrev: () => <ChevronLeftIcon className="h-6 w-6 text-blue-500" />
          iconPrev: () => <ChevronLeftIcon />,
          iconNext: () => <ChevronRightIcon />
        }}
        on={{
          view: ({ index }) => {
            if (inlineGalleryIndex !== index) {
              console.log("set new index", index)
              setInlineGalleryIndex(index)
            }
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
    </React.Fragment>
  )
}

export default LightboxExample
