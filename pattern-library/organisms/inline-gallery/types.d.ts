import { Basic } from "unsplash-js/dist/methods/photos/types"

export interface InlineGalleryProperties {
  index: number
  photos: Basic[]
  onView: (index: number) => void
  onClick: () => void
}
