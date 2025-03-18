const { Component } = wp.element;
import Slider from 'react-slick';

export default class AsNavFor extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			nav1: null,
			nav2: null,
		};
	}

	componentDidMount() {
		this.setState( {
			nav1: this.slider1,
			nav2: this.slider2,
		} );
	}

	render() {
		var slideCount = +this.props.slideCount;
		let slidesToShow = +this.props.slidesToShow;

		const { 
			// images,
			// imageSize,
			// fade,
			dots,
			pause,
			speed,
			// autoplay,
			autoPlaySpeed,
			// // slidesToShow,
			// slidesToScroll,
			// numberOfImages,
		} = this.props;

		if ( slideCount < slidesToShow ) {
			slidesToShow = +slideCount;
		}

		// omzetten van de string naar een boolean en nummer
		var randomStart = Math.floor(Math.random() * slideCount);
		var autoplay = (this.props.autoplay === 'true') ? true : false;
		var dotsB = (dots === 'true');

		var settings = {
			dots: dotsB,
			infinite: true,
			// centerMode: true,
			autoplay,
      autoplaySpeed: Number(autoPlaySpeed), //pause tussen de slidesovergangen
			slidesToShow: slidesToShow,
			// variableWidth: true,
			speed: Number(speed), // snelheid van de slidesovergangen
			pauseOnHover: (pause === 'true') ? true : false,
			initialSlide: randomStart,
			// slidesToShow: 6,
			slidesToScroll: 1,
			cssEase: "linear",

			responsive: [
        // {
        //   breakpoint: 1024,
        //   settings: {
        //     slidesToShow: 3,
        //     slidesToScroll: 3,
        //     infinite: true,
        //     dots: true
        //   }
        // },
        // {
        //   breakpoint: 600,
        //   settings: {
        //     slidesToShow: 2,
        //     slidesToScroll: 2,
        //     initialSlide: 2
        //   }
        // },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
		};


		if(!autoplay) {
			settings.slidesToScroll =  this.props.slidesToScroll;
			settings.fade = (this.props.fade === 'true') ? true : false;
			settings.dots = (this.props.dots === 'true') ? true : false;
		}


		// console.dir( settings );

		return (
			<div>
				<Slider { ...settings }	>

					{ this.props.images.map( ( img, i ) => (
						<div key={ i }>
							<img
								src={ img.src }
								alt={ img.alt }
								data-id={ img.id }
							/>
						</div>
					) ) }
				</Slider>

{/* Todo: toevoegen van de juiste code om dit goed weer te geven:
		1. if Dots = true, dan niet tonen.
		2. Als het aantal slides lager is dan het aantal dat vertoond wordt dan ook niet tonen
		3. 
*/}

				{/* <Slider
					className="slick-nav"
					asNavFor={ this.state.nav1 }
					ref={ slider => ( this.slider2 = slider ) }
					slidesToShow={ 2 }
					swipeToSlide={ true }
					focusOnSelect={ true }
					variableWidth={ true }
					arrows ={false}
				>
					{ this.props.images.map( ( img, i ) => (
						<div key={ i }>
							<img
								src={ img.src }
								alt={ img.alt }
								data-id={ img.id }
							/>
						</div>
					) ) }
				</Slider> */}
			</div>
		);
	}
}

