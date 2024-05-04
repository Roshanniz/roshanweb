import Image from "next/image";

export default function Home() {
  return (
  <div className="m-10">
    <h1 className=" px-4 py-4 pt-4  w-1/2">Hello To World From Roshan Nizamani</h1>
    <Image src="/p1.jpg"
      width={500}
      height={500}
      alt="Picture of the author" />
  </div>
      );
}
