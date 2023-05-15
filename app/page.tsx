import LightboxExample from "@/pattern-library/organisms/lightbox-example"
import { createApi } from "unsplash-js"
import { InitParams } from "unsplash-js/dist/helpers/request"
import { Header } from "@/pattern-library/organisms/header"
import { Footer } from "@/pattern-library/organisms/footer"
import { ProductMetadata } from "@/pattern-library/organisms/product-metadata"
import { ProductDescription } from "@/pattern-library/organisms/product-description"

async function Home() {
  const api = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY
  } as InitParams)

  // const request = await api.topics.get({ topicIdOrSlug: "super mario" })
  const request = await api.search.getPhotos({
    query: "super mario",
    page: 1,
    perPage: 10,
    orderBy: "relevant"
  })

  // console.log("request", request.response.results)
  console.log("render page")

  return (
    <main className="min-h-screen bg-yellow-200">
      <div className="container mx-auto sm:min-h-screen">
        <Header />
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2">
          <div className="bg-teal-100">
            <div className="sticky top-0">
              {request.type === "success" ? (
                <LightboxExample photos={request.response.results} />
              ) : undefined}

              {/* <div className=" grid grid-cols-1 sm:grid-cols-6">
              <ul className="flex overflow-scroll sm:col-span-1 sm:flex-col">
                <li className="min-w-full">
                  <img src="https://fakeimg.pl/691x921/" />
                </li>
                <li className="min-w-full">
                  <img src="https://fakeimg.pl/691x921/" />
                </li>
                <li className="min-w-full">
                  <img src="https://fakeimg.pl/691x921/" />
                </li>
                <li className="min-w-full">
                  <img src="https://fakeimg.pl/691x921/" />
                </li>
              </ul>
              <div className="hidden sm:col-span-5 sm:block">
                <img src="https://fakeimg.pl/691x921/" />
              </div>
              <ul className="flex items-center justify-center sm:hidden">
                <li className="cursor-pointer p-1">o</li>
                <li className="cursor-pointer p-1">o</li>
                <li className="cursor-pointer p-1">o</li>
                <li className="cursor-pointer p-1">o</li>
              </ul>
            </div> */}
            </div>
          </div>
          <div className="overflow-hidden px-2 py-8 sm:p-0">
            <ProductMetadata />
          </div>
        </div>
        <div className="overflow-hidden px-2 pt-8 sm:px-0">
          <ProductDescription />
        </div>
        <div className="w-full overflow-hidden px-2 sm:px-0">
          <Footer />
        </div>
      </div>
    </main>
  )

  // return (
  //   <main className="min-h-screen bg-yellow-200">
  //     <div className="container mx-auto grid grid-cols-1 sm:min-h-screen sm:grid-cols-2 sm:gap-2">
  //       <div className="bg-red-100">
  //         <div className="grid grid-cols-1 bg-teal-100 sm:grid-cols-6 sm:gap-2">
  //           <div className="col-span-1 bg-teal-400">
  //             <div className="mb-2 flex items-center justify-center bg-teal-500">
  //               <img className="object-fill" src="https://fakeimg.pl/200x300" />
  //             </div>
  //             <div className="mb-2 flex items-center justify-center">
  //               <img className="object-fill" src="https://fakeimg.pl/200x300" />
  //             </div>
  //             <div className="mb-2 flex items-center justify-center">
  //               <img className="object-fill" src="https://fakeimg.pl/200x300" />
  //             </div>
  //             <div className="flex items-center justify-center">
  //               <img className="object-fill" src="https://fakeimg.pl/200x300" />
  //             </div>
  //           </div>
  //           <div className="col-span-5 hidden bg-teal-500 sm:block">
  //             <div className="flex aspect-[2/3] bg-green-800">
  //               <img
  //                 className="aspect-[2/3] object-fill"
  //                 src="https://fakeimg.pl/200x300"
  //               />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="bg-red-200">
  //         <p>Hello World</p>
  //       </div>
  //     </div>
  //   </main>
  // )
  /* return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  ) */
}

export default Home
