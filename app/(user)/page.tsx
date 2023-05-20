import { previewData } from "next/headers";
import Image from "next/image";
import { groq } from "next-sanity";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { sanityClient } from "@/lib/sanity.client";

const inter = Inter({ subsets: ['latin'] });

const query = groq`
  *[_type == "post"] {
    ...,
    author->,
    categories[]->,
  } | order(publishedAt desc)
`;

export default async function Home() {
  if (previewData()) {
    console.log("😙: Hola");
    console.log("previewData: ✅");
    console.log(`😑: ${previewData()} || ${previewData() ? true : false}`);
    return (
      // <div> Preview Mode </div>
      <main className="flex w-100v h-100v flex-col items-center justify-center">
        <div className="z-10 w-100v h-100v items-center justify-center">
          <h2 className="mb-3 text-2xl text-white font-semibold">¡Hola Mundo!</h2>
        </div>
      </main>
    );
  } else {
  };

  console.log("😡: Hola");
  console.log("!previewData: ❌");
  console.log(`😑: ${previewData()} || ${previewData() ? true : false}`);

  const posts = await sanityClient.fetch(query);
  console.log(posts);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <Header />
      </div>
      <div id="home_footer" className="bottom-0 flex flex-col-reverse h-80v w-full items-center bg-gradient-to-t from-white via-white pb-5   dark:from-black dark:via-black   lg:static lg:h-auto lg:w-auto lg:flex-col lg:bg-none lg:pb-0">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8   lg:pointer-events-auto lg:p-20"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{' '}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </a>
        <div id="home_footer_links" className="grid grid-cols-2 text-inherit text-center mb-14   dark:text-white   lg:grid-cols-4 lg:text-left lg:mb-14">
          <a
            href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border-2 border-transparent px-5 py-4 transition-colors duration-2000 ease-in-out hover:border-blue-300 hover:border-opacity-50 hover:bg-gray-100 hover:dark:border-blue-700 hover:dark:border-opacity-25 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Docs {``}
              <span className="inline-block transition-transform group-hover:translate-x-2 duration-200 delay-75 motion-reduce:transform-none">
                {`-->`}
              </span>
              <span className="inline-block transition-transform group-hover:translate-x-1 duration-100 motion-reduce:transform-none">
                &nbsp;{`->`}
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border-2 border-transparent px-5 py-4 transition-colors duration-2000 ease-in-out hover:border-blue-300 hover:border-opacity-50 hover:bg-gray-100 hover:dark:border-blue-700 hover:dark:border-opacity-25 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
            >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Learn {``}
              <span className="inline-block transition-transform group-hover:translate-x-[0.65rem] motion-reduce:transform-none">
                {`-`}
              </span>
              <span className="inline-block transition-transform group-hover:translate-x-1 duration-200 motion-reduce:transform-none">
                {`->`}
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border-2 border-transparent px-5 py-4 transition-colors duration-2000 ease-in-out hover:border-blue-300 hover:border-opacity-50 hover:bg-gray-100 hover:dark:border-blue-700 hover:dark:border-opacity-25 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Templates {``}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                {` ->`}
              </span>
              <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                &nbsp;{`<-- `}
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Explore the Next.js 13 playground.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border-2 border-transparent px-5 py-4 transition-colors duration-2000 ease-in-out hover:border-blue-300 hover:border-opacity-50 hover:bg-gray-100 hover:dark:border-blue-700 hover:dark:border-opacity-25 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Deploy {``}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                {`->`}
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </div>
    </main>
  );
};
