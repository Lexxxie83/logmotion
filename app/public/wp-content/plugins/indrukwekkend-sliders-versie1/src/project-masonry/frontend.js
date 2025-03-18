const { render } = wp.element;

import classNames from "classnames";
//eigen code staat in de folder, daar staan de instellingen, margin toegevoegd
import FrontendGallery from "./components/FrontendGallery";

const galleries = document.querySelectorAll(
	'.wp-block-indrukwekkend-masonry'
);

galleries.forEach((gallery, index) => {

  const direction = gallery.dataset.direction;
  const margin = parseInt(gallery.dataset.margin);
  const islightboxenabled = gallery.dataset.islightboxenabled;
  const images = gallery.querySelectorAll("img");
  const photos = [];
  
	images.forEach(image => {
    photos.push({
      src: image.src,
      width: image.width,
      height: image.height,
      alt: image.alt,
      caption: image.title,
      className: "galleryImage"
    });
  });

  render(
		<FrontendGallery
			photos={photos}
			direction={direction}
      margin={margin}
			islightboxenabled={islightboxenabled}
		/>,
    gallery
  );
});
