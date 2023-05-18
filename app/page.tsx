import { createApi } from "unsplash-js"
import { InitParams } from "unsplash-js/dist/helpers/request"
import { Header } from "@/pattern-library/organisms/header"
import { Footer } from "@/pattern-library/organisms/footer"
import { ProductMetadata } from "@/pattern-library/organisms/product-metadata"
import { ProductDescription } from "@/pattern-library/organisms/product-description"
import { ProductGallery } from "@/pattern-library/organisms/product-gallery"

async function Home() {
  const api = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY
  } as InitParams)

  const request = await api.search.getPhotos({
    query: "super mario",
    page: 1,
    perPage: 10,
    orderBy: "relevant"
  })

  return (
    <main className="min-h-screen">
      <div className="md:min-h-screen">
        <div className="bg-white dark:bg-gray-900">
          <div className="container mx-auto">
            <Header />
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
              <div className="">
                <div className="sticky top-0">
                  {request.type === "success" ? (
                    <ProductGallery photos={request.response.results} />
                  ) : undefined}
                </div>
              </div>
              <div className="overflow-hidden px-2 py-8 md:px-0">
                <ProductMetadata />
              </div>
            </div>
            <div className="overflow-hidden px-2 py-8 md:px-0">
              <ProductDescription />
            </div>
          </div>
        </div>
        <div className="bg-gray-200 dark:bg-gray-700">
          <div className="container mx-auto">
            <div className="w-full overflow-hidden px-2 md:px-0">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
