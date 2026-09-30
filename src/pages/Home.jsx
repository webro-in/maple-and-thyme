import './Home.scss';
import Hero from "../sections/Hero";
import Story from "../sections/Story";
import MenuPreview from "../sections/MenuPreview";
import GalleryPreview from "../sections/GalleryPreview";

export default function Home() {
  return (
    <main>
      <Hero />
      <Story />
      <MenuPreview />
      <GalleryPreview />
    </main>
  );
}