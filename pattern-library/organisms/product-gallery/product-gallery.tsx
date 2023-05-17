"use client"

import React from "react"
import { InlineGallery } from "../inline-gallery"
import { ModalGallery } from "../modal-gallery"
import { ProductGalleryProperties } from "./types"

// TODO
// Global: integrate with nextjs
//   https://yet-another-react-lightbox.com/examples/nextjs
// Global: create a hook to store the current index? I don't want to use "use client" in all the gallery component
// Step 1: add inline yarl with thumbnails plugin
//   https://yet-another-react-lightbox.com/plugins/inline
//   https://yet-another-react-lightbox.com/plugins/thumbnails
// Step 2: open full yarl when an image is pressed
// Extra: create a nice skeleton: https://flowbite.com/docs/components/skeleton/

export default function ProductGallery({ photos }: ProductGalleryProperties) {
  const [open, setOpen] = React.useState(false)
  const [index, setIndex] = React.useState(0)

  console.log("render lightbox example")

  function handleInlineGalleryView(nextIndex: number) {
    setIndex(nextIndex)
  }

  function handleInlineGalleryClick() {
    setOpen(true)
  }

  function handleModalGalleryClose() {
    setOpen(false)
  }

  function handleModalGalleryView(nextIndex: number) {
    if (index !== nextIndex) {
      setIndex(nextIndex)
    }
  }

  return (
    <React.Fragment>
      <div className="mx-auto aspect-square w-full px-2 pt-8 md:px-0 md:pb-8">
        <InlineGallery
          index={index}
          photos={photos}
          onView={handleInlineGalleryView}
          onClick={handleInlineGalleryClick}
        />
      </div>
      <ModalGallery
        index={index}
        open={open}
        photos={photos}
        onClose={handleModalGalleryClose}
        onView={handleModalGalleryView}
      />
    </React.Fragment>
  )
}
