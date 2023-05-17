import { Basic } from "unsplash-js/dist/methods/photos/types"

export interface ModalGalleryProperties {
  index: number
  open: boolean
  photos: Basic[]
  onClose: () => void
  onView: (index: number) => void
}
