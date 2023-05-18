import { createApi } from "unsplash-js"
import { InitParams } from "unsplash-js/dist/helpers/request"
import { Header } from "@/pattern-library/organisms/header"
import { Footer } from "@/pattern-library/organisms/footer"
import { ProductMetadata } from "@/pattern-library/organisms/product-metadata"
import { ProductDescription } from "@/pattern-library/organisms/product-description"
import { DynamicProductGallery } from "@/pattern-library/organisms/product-gallery"
import { createBlurData } from "@/library/utilities"

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

  console.log("...", request)

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
                    <DynamicProductGallery
                      slideImages={request.response.results.map(
                        (photo, index) => ({
                          index,
                          src: photo.urls.regular,
                          blurDataURL: createBlurData(
                            photo.width,
                            photo.height
                          ),
                          width: photo.width,
                          height: photo.height
                        })
                      )}
                    />
                  ) : (
                    <div className="px-2 py-8 text-sm text-red-700 dark:text-red-300 md:px-0">
                      <p>{`Error fetching Unsplash photos:`}</p>
                      <ol>
                        {request.errors.map((error, index) => (
                          <li key={index}>{error}</li>
                        ))}
                      </ol>
                    </div>
                  )}
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
