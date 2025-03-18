import { __ } from '@wordpress/i18n';
import {
	RichText,
} from '@wordpress/block-editor';
import {
	getBlockDefaultClassName,
} from '@wordpress/blocks';

//import CSS
import './index.scss';

//import JS
import edit from './edit';

/**
 * Constants
 */

export const name = 'indrukwekkend/slider';

export const settings = {
	title: __( 'Projecten slider', 'indrukwekkend' ),
	icon: 'slides',
	category: 'media',
	keywords: [ __( 'afbeeldingen' ), __( 'projecten' ), __( 'slider' ) ],
	supports: {
		inserter: true,
		align: [ 'wide', 'full'],
	},
	align: {
		type: 'string',
	},
	attributes: {
		images: {
			type: 'array',
			default: [],
		},
		imageSize: {
			type: 'string',
			default: 'large',
		},
		numberOfImages: {
			type: 'number',
			default: 3,
		},
		fade: {
			type: 'boolean',
			default: false,
		},
		pause: {
			type: 'boolean',
			default: false,
		},
		dots: {
			type: 'boolean',
			default: true,
		},
		slidesToShow: {
			type: 'number',
			default: 1,
		},
		slidesToScroll: {
			type: 'number',
			default: 1,
		},
		speed: {
			type: 'number',
			default: 500,
		},
		autoPlaySpeed: {
			type: 'number',
			default: 0,
		},
		autoplay: {
			type: 'boolean',
			default: false,
		},
	},
	edit,

	save: props => {
		const {
		  attributes: {
				images,
				imageSize,
				fade,
				dots,
				pause,
				speed,
				autoplay,
				autoPlaySpeed,
				slidesToShow,
				slidesToScroll,
		   },
		  className,
		} = props;

		const innerClass = getBlockDefaultClassName( 'indrukwekkend/slider' );

		return (
			<div className={ className } >
				<div
					className = { innerClass + '__icons' }
					data-fade = { fade }
					data-dots = { dots }
					data-pause = { pause }
					data-speed = { speed }
					data-autoplay = { autoplay }
					data-autospeed = { autoPlaySpeed }
					data-slidestoshow = { slidesToShow } 
					data-slidestoscroll = { slidesToScroll } 

				>
					{ images.map( ( img, i ) => (
						<figure className="afbeelding" key={ i } style="display:none">
							<img
								src={ img.src }
								alt={ img.alt }
								data-id={ img.id }
							/>
						</figure>
					) ) }
				</div>
			</div>
		);
	},
};
