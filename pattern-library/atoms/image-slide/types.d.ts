import { RenderSlideProps } from "yet-another-react-lightbox/dist/types"

interface ImageSlideProperties extends RenderSlideProps {
  onClick?: (slideImage: SlideImage) => void
}

interface Coords {
  x: number
  y: number
}
