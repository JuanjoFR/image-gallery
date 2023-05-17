import { RenderSlideProps } from "yet-another-react-lightbox/dist/types"

export interface ImageSlideProperties extends RenderSlideProps {
  onClick?: (slideImage: SlideImage) => void
}

export interface Coords {
  x: number
  y: number
}
