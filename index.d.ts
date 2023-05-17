// https://yet-another-react-lightbox.com/advanced
declare module "yet-another-react-lightbox" {
  interface SlideImage {
    index?: number
  }
}

export interface Image {
  index: number
  src: string
  blurDataURL: string
  width: number
  height: number
}
