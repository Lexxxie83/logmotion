/**
 * External dependencies
 */
import classnames from 'classnames';
import Slider from 'react-slick';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { MediaPlaceholder, InspectorControls, BlockControls, MediaUpload, RichText } from '@wordpress/block-editor';
import { PanelBody, PanelRow, RadioControl, IconButton, Toolbar, RangeControl, ToggleControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import icon from './components/media-container-icon';

/** TODO:
 * 1. Add the option to select the image size
 * 2. Mobile: 1 or 2 images in the slider
 */

export default function textImageEdit( { attributes, className, setAttributes } ) {
	const { 
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
		numberOfImages,
	} = attributes;

	const settings = {
		dots,
		infinite: true,
		fade,
		pauseOnHover: pause,
		speed,
		autoplay,
		autoplaySpeed : autoPlaySpeed,
		slidesToShow,
    slidesToScroll,
	};

	const [ option, setOption ] = useState( 'large' );

	const onSelectImages = newImages => {
		// console.log(newImages);
		const images = newImages.map( img => {

			// console.log(imageSize);
			if ( imageSize === 'small' ) {
				return {
					src: img.sizes.sliderSmallImg.url,
					width: img.sizes.sliderSmallImg.width,
					height: img.sizes.sliderSmallImg.height,
					id: img.id,
					alt: img.alt,
					caption: img.caption,
				} 
			} else {
					return {
						src: img.sizes.sliderLargeImg.url,
						width: img.sizes.sliderLargeImg.width,
						height: img.sizes.sliderLargeImg.height,
						id: img.id,
						alt: img.alt,
						caption: img.caption,
					};
				}
		} );
	setAttributes( { images, numberOfImages : images.length } );

	};

	// TODO: Add onSelectAutoplay
	const onSelectAutoplay = newValue => {
		console.log(newValue);
		setAttributes( { autoplay: newValue } );
		// also set the dots to false
		if ( newValue === true ) {
			setAttributes( { dots: false } );
		}
	}


	return [
		<Fragment
			key="mainBlock"
		>
			
			<InspectorControls
				key="inspector"
			>
				<PanelBody title={ __( 'Image Settings' ) }>
					<PanelRow>
						<RadioControl
							label={ __( 'Grootte afbeeldingen' ) }
							help="Afbeelding grootte veranderd NA het updaten van de afbeeldingen."
							selected={ imageSize }
							options={ [
								{ label: __( 'Klein' ), value: 'small' },
								{ label: __( 'Groot' ), value: 'large' },
							] }
							onChange={ ( value ) => setAttributes( { imageSize: value } ) }
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title={ __( 'Slider Settings' ) }>
					
					<ToggleControl
						label={ __( 'Automatisch scrollen' ) }
						checked={ autoplay }
						onChange={ onSelectAutoplay }
					/>
					{ autoplay &&
						<ToggleControl
							label={ __( 'Pause on hover' ) }
							checked={ pause }
							onChange={ ( value ) => setAttributes( { pause: value } ) }
						/>
					}

						<ToggleControl
							label={ __( 'Fade' ) }
							checked={ fade }
							onChange={ ( value ) => setAttributes( { fade: value } ) }
						/>
					
					{ !autoplay &&
						<ToggleControl
							label={ __( 'Dots' ) }
							checked={ dots }
							onChange={ ( value ) => setAttributes( { dots: value } ) }
						/>
					}
					<RangeControl
						label={ __( 'Snelheid Overgangen' ) }
						value={ speed }
						onChange={ ( value ) => setAttributes( { speed: value } ) }
						min={ 500 }
						max={ 8000 }
						step={100}
					/>
					{ autoplay &&
						<RangeControl
							label={ __( 'Pauze tussen elke auto scroll (ms)' ) }
							value={ autoPlaySpeed }
							onChange={ ( value ) => setAttributes( { autoPlaySpeed: value } ) }
							min={ 0 }
							max={ 1000 }
							step={50}
						/>
					}
					{ !fade &&
					<Fragment>
						<RangeControl
							label={__('Slides naast elkaar')}
							value={slidesToShow}
							onChange={(value) => setAttributes({slidesToShow: value})}
							min={1}
							max={ numberOfImages }
						/>
						{ !autoplay &&
							<RangeControl
								label={__('Aantal Slides per overgang')}
								value={slidesToScroll}
								onChange={(value) => setAttributes({slidesToScroll: value})}
								min={1}
								max={ numberOfImages }
							/>
						}
					</Fragment>
					}

				</PanelBody>
			</InspectorControls>

			{ !! images.length && (
				<BlockControls
					key="block"
				>
					<Toolbar>
						<MediaUpload
							allowedTypes={ [ 'images' ] }
							multiple
							gallery
							value={ images.map( img => img.id ) }
							onSelect={ onSelectImages }
							render={ ( { open } ) => (
								<IconButton
									className="components-toolbar__control"
									label={ __( 'Edit Gallery', 'indrukwekkend' ) }
									icon="edit"
									onClick={ open }
								/>
							) }
						/>
					</Toolbar>
				</BlockControls>
			) }

			<div
				key="content"
				className={ className }
			>
				{ !!! images.length ? (
					<MediaPlaceholder
						labels={ {
							title: __( 'Gallery' ),
							instructions: __(
								'Drag images, upload new ones or select files from your library'
							),
						} }
						icon={ icon }
						accept="images/*"
						multiple
						onSelect={ onSelectImages }

					/>

				) : (
					<Slider { ...settings }>
						{ images.map( ( img, i ) => (
							<div key={ i }>
								<img
									src={ img.src }
									alt={ img.alt }
									data-id={ img.id }
								/>
							</div>
						) ) }
					</Slider>

				) }
			</div>
		</Fragment>,

	];
}
