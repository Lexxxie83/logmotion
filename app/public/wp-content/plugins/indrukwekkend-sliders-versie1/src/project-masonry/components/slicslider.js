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
		return (
			<div>
				<Slider
					className="slick-main"
					asNavFor={ this.state.nav2 }
                    ref={ slider => ( this.slider1 = slider ) }
					adaptiveHeight={ true }
					arrows ={true}
					prevArrow={ null }
					nextArrow={ null }
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
				</Slider>
				<Slider
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
				</Slider>
			</div>
		);
	}
}

