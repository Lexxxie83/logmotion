/**
 * BLOCK: indrukwekkend-blocks
 *
 * Registering a basic block with Gutenberg.
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

//  Import CSS.
import './editor.scss';
import './style.scss';
/**
 * Internal dependencies
 */ 
import edit from './edit';
// import action from './action.js';
//import Collapse from './action.js';

export const name = 'indrukwekkend/faq-alt';

export const settings = {
	title: __( 'FAQ' ),
	icon: 'format-chat',
	category: 'indrukwekkend',
	keywords: [ __( 'faq' ), __( 'post' ) ],
	supports: {
		align: [ 'wide', 'full' ],
		html: false,
	},
	edit,
	//Collapse,
};

