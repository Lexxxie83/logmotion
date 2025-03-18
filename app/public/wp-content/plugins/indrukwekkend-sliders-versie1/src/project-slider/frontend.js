const { render } = wp.element;

//eigen code staat in de folder, daar staan de instellingen
import AsNavFor from './components/slicslider';

const galleries = document.querySelectorAll(
	'.wp-block-indrukwekkend-slider__icons'
);

galleries.forEach( gallery=> {
	// console.log(gallery);

	const images = gallery.querySelectorAll( 'img' );
	var slideCount = images.length;
	const fade = gallery.dataset.fade;
	const dots = gallery.dataset.dots;
	const speed = gallery.dataset.speed;
	const autoplay = gallery.dataset.autoplay;
	const autospeed = gallery.dataset.autospeed;
	const pause = gallery.dataset.pause;

	const slidesToShow = gallery.dataset.slidestoshow;
	const slidesToScroll = gallery.dataset.slidestoscroll;


	const iconsSources = [];
	images.forEach( img => {
		iconsSources.push( {
			src: img.src,
		} );
	} );

	render( 
		<AsNavFor 
			dots = { dots }
			images={ iconsSources }
			fade={fade}
			pause={pause}
			speed={speed}
			autoplay={autoplay}
			autoPlaySpeed={autospeed}
			slidesToShow={slidesToShow}
			slidesToScroll={slidesToScroll}
			slideCount={slideCount}

		/>, gallery );
} );
