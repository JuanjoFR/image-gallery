# Image Gallery

## Motivation

The goal of this project is to show the use of an image gallery as it is used in multiple e-commerce websites, with synchronization between the inline gallery and the second gallery that is displayed when clicking on an image.

## Technical details

This project uses [NextJS 13][nextjs-13] along with Tailwind for styling. The image galleries have been created using the [Yet Another React Lightbox][yet-another-react-lightbox] module customized to work synchronously between two independent galleries and with the styles modified with [Tailwind][tailwind].

Images are dynamically downloaded the first time the project is built using the [official JavaScript wrapper][official unsplash javascript wrapper] for the [Unsplash API][unsplash api].

## Run locally

To run this project locally you must clone the repository, create a `.env.local` file with your Unsplash access key (see the `.env.local.example` file) and run it with npm like any other NextJS project:

```sh
npm run dev
```

One of the best ways to learn and improve is by sharing knowledge, so you can use this project to study and improve. I hope you find it useful!

[nextjs-13]: https://nextjs.org
[yet-another-react-lightbox]: https://yet-another-react-lightbox.com
[tailwind]: https://tailwindcss.com
[official unsplash javascript wrapper]: https://www.npmjs.com/package/unsplash-js
[unsplash api]: https://unsplash.com/developers
