/**
 * External dependencies
 */
import classnames from 'classnames';
import Gallery from "react-photo-gallery";

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { MediaPlaceholder, InspectorControls, BlockControls, MediaUpload, RichText } from '@wordpress/block-editor';
import { PanelBody, PanelRow, RadioControl, IconButton, Toolbar, RangeControl, ToggleControl } from '@wordpress/components';

/**
 * Internal dependencies
 */

import icon from './components/media-container-icon';

export default function textImageEdit( { attributes, className, setAttributes } ) {
	const { 
		images,
		direction,
		margin,
		isLightboxEnabled,
	} = attributes;


	const onSelectImages = newImages => {
		const images = newImages.map( img => {
			return {
				src: img.sizes.large.url,
				width: img.sizes.large.width,
				height: img.sizes.large.height,
				id: img.id,
				alt: img.alt,
				caption: img.caption,
			};
		} );
		setAttributes( { images } );
	};
	return [
		<Fragment
			key="mainBlock"
		>
			<InspectorControls
				key="inspector"
			>
				<PanelBody title={ __( 'Masonry Settings' ) }>
					
				<RadioControl
                label={__("Grid Style", "jsforwpadvblocks")}
                selected={direction}
                options={[
                  { label: "Rows", value: "row" },
                  { label: "Columns", value: "column" }
                ]}
                onChange={direction => setAttributes({ direction })}
          />
					
					<ToggleControl
                label={__("Enable / disable lightbox", "jsforwpadvblocks")}
                checked={isLightboxEnabled}
                onChange={isLightboxEnabled =>
                  setAttributes({ isLightboxEnabled })
                }
          />

					<RangeControl
						label={ __( 'Marge tussen afbeeldingen' ) }
						value={ margin }
						onChange={ margin => setAttributes({ margin })}
						min={ 2 }
						max={ 20 }
						required
					/>

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
					<Gallery photos={images} direction={direction} margin={margin} />

				) }
			</div>
		</Fragment>,

	];
}
