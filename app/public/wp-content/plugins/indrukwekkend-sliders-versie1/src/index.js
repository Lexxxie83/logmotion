/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 *//**
 * Internal dependencies
 * Hier kan een extra blok toegevoegd worden, die moet hieronder geregistreerd worden.
 */

import * as projectSlider from './project-slider';
import * as projectMasonry from './project-masonry';

// basic css settings for all blocks
import './index.scss';

/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 */

const registerBlock = ( block ) => {
	if ( ! block ) {
		return;
	}
	const { settings, name } = block;
	wp.blocks.registerBlockType( name, settings );
};

/**
 * Function to register core blocks provided by the block editor.
 * 
 * Common blocks are grouped at the top to prioritize their display in the inserter.
 */
export const registerIndrukwekkendBlocks = () => {
	[
		projectSlider,
		projectMasonry,
		
	].forEach( registerBlock );
};

registerIndrukwekkendBlocks();
