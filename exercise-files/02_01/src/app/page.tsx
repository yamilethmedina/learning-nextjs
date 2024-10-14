import styles from "../app/ui/styles/home.module.css";
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 relative">
        <div className="bg-white border-2 border-purple-100 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center">
            <h1 className={`text-4xl font-bold mb-4 ${styles.text_pumpkin}`}>Welcome</h1>

            <p className="text-lg text-gray-700 mb-4">
              Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra, ac porttitor orci.
            </p>
            <a href="/blog/posts" className={`outline outline-1 outline-offset-2 border-orange-700 hover:text-white py-2 px-4 rounded hover:bg-orange-800 md:w-auto ${styles.fit_content}`}>
              Go to Blog
            </a>
            <Image
              src="/image-mobile.png"
              width={560}
              height={620}
              className="block rounded-md md:hidden py-5"
              alt="test image mobile"
            />
          </div>
        </div>

      </div>
      <Image
        src="/image-desktop.png"
        width={1000}
        height={760}
        className="hidden rounded-lg md:block z-10"
        alt="test image"
      />

      <div className={`hidden md:block absolute top-0 right-0 bottom-0 left-2/3 z-0 ${styles.bg_pumpkin}`}>

      </div>
    </main>
  );
}
