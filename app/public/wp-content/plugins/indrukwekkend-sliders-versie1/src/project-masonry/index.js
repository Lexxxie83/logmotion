import { __ } from '@wordpress/i18n';
import {
	RichText,
} from '@wordpress/block-editor';
import {
	getBlockDefaultClassName,
} from '@wordpress/blocks';

import './style.scss';
import './editor.scss';
import icon from "./components/icon";

//import JS
import edit from './edit';

/**
 * Constants
 */

export const name = 'indrukwekkend/masonry';

export const settings = {
	title: __( 'Masonry grid', 'indrukwekkend' ),
	icon,
	category: 'media',
	keywords: [ __( 'afbeeldingen' ), __( 'projecten' ), __( 'masonry' ) ],
	supports: {
		inserter: true,
		align: [ 'wide', 'full' ],
	},
	align: {
		type: 'string',
		default: 'wide',
	},
	attributes: {
		images: {
			type: 'array',
			default: [],
		},
		direction: {
			default: 'row',
		},
		isLightboxEnabled: {
      type: "boolean",
      default: true
    },
		margin: {
      type: "number",
      default: 2
    }
	},
	edit,

	save: props => {
		const {
		  attributes: {
				images,
				margin,
				direction, 
				isLightboxEnabled
		   },
		  className,
		} = props;

		return (
			<div
        className={`${direction}`}
        data-direction={direction}
				data-margin={margin}
        data-isLightboxEnabled={isLightboxEnabled}
      >
        <div className="react-photo-gallery--gallery server-render">
          <div style="display: flex; flex-flow: row wrap">
            {images.map(img => (
              <img
                src={img.src}
                alt={img.alt}
                title={img.caption}
                width={img.width}
                height={img.height}
                data-id={img.id}
                style={{
                  width: img.width,
                  height: img.height
                }}
              />
            ))}
          </div>
        </div>
      </div>
		);
	},
};
