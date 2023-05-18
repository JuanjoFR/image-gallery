import dynamic from "next/dynamic"

// By using next/dynamic, the ProductGallery component will not be included in the page's initial JavaScript bundle.
// The page will render the Suspense fallback first, followed by the ProductGallery component when the Suspense boundary is resolved:
// https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading

export default dynamic(() => import("./product-gallery"), {
  loading: () => (
    <p className="text-sm text-gray-900 dark:text-white">Loading...</p>
  ),
  ssr: false
})
