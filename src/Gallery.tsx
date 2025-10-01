import { chillingImagePaths, eatingImagePaths, runningImagePaths, sleepingImagePaths } from "./imagePaths.ts";

type galleryProps = {
  category: string;
}

export function Gallery({category}: galleryProps) {
  console.log(chillingImagePaths)
  return (
    <>
      {category === 'chilling' && chillingImagePaths.map((imgPath) => [crypto.randomUUID(), imgPath]).map((curImage) => <img key={curImage[0]} src={curImage[1]}/>)}
      {category === 'eating' && eatingImagePaths.map((imgPath) => [crypto.randomUUID(), imgPath]).map((curImage) => <img key={curImage[0]} src={curImage[1]}/>)}
      {category === 'running' && runningImagePaths.map((imgPath) => [crypto.randomUUID(), imgPath]).map((curImage) => <img key={curImage[0]} src={curImage[1]}/>)}
      {category === 'sleeping' && sleepingImagePaths.map((imgPath) => [crypto.randomUUID(), imgPath]).map((curImage) => <img key={curImage[0]} src={curImage[1]}/>)}
    </>
  )
}

export default Gallery;