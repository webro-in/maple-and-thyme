import { business } from '../data/business';
import './GalleryArt.scss';

export default function GalleryArt({ item }) {
  return (
    <div
      className={`gallery-art gallery-art--${item.art} gallery-art--${item.id}`}
      aria-hidden="true"
    >
      <span className="gallery-art__shape" />
      <span className="gallery-art__word">
        {business.name.toUpperCase()}
      </span>
    </div>
  );
}