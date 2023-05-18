import { SlideImage } from "yet-another-react-lightbox"

interface InlineGalleryProperties {
  index: number
  slideImages: SlideImage[]
  onView: (index: number) => void
  onClick: () => void
}
