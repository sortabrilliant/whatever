/**
 * Internal dependencies
 */
import icon from './icon';
import edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

const { name, category, attributes } = metadata;

registerBlockType( name, {
	title: 'Whatever',
	description: 'With Whatever you can embed whatever you want in your WordPress site.',
	keywords: [ 'embed' ],
	supports: {
		align: true,
		alignWide: true,
		customClassName: false,
		className: false,
		html: false,
	},
	icon,
	category,
	attributes,
	edit,
	save,
} );
