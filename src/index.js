/**
 * WordPress dependencies
 */

import { registerBlockType } from '@wordpress/blocks';
/**
 * Internal dependencies
 */
import icon from './icon';
import edit from './edit';
import save from './save';
import metadata from './block.json';

const { name, category, attributes } = metadata;

registerBlockType( name, {
	title: 'Peculiar Pointers',
	description:
		'Make your WordPress site a little weird by adding a peculiar pointer.',
	keywords: [ 'container' ],
	icon,
	category,
	attributes,
	edit,
	save,
} );
