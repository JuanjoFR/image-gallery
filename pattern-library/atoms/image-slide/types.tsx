import { RenderSlideProps } from "yet-another-react-lightbox/dist/types"

interface ImageSlideProperties extends RenderSlideProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export type { ImageSlideProperties }
