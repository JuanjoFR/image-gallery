import { SlideImage } from "yet-another-react-lightbox"

interface ModalGalleryProperties {
  index: number
  open: boolean
  slideImages: SlideImage[]
  onClose: () => void
  onView: (index: number) => void
}
