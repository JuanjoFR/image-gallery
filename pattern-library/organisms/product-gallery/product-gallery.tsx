"use client"

import React from "react"
import { InlineGallery } from "../inline-gallery"
import { ModalGallery } from "../modal-gallery"
import { ProductGalleryProperties } from "./types"

export default function ProductGallery({
  slideImages
}: ProductGalleryProperties) {
  const [open, setOpen] = React.useState(false)
  const [index, setIndex] = React.useState(0)

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
          slideImages={slideImages}
          onView={handleInlineGalleryView}
          onClick={handleInlineGalleryClick}
        />
      </div>
      <ModalGallery
        index={index}
        open={open}
        slideImages={slideImages}
        onClose={handleModalGalleryClose}
        onView={handleModalGalleryView}
      />
    </React.Fragment>
  )
}
