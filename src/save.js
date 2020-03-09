/**
 * Internal dependencies
 */
import { getClassNames } from './util';

/**
 * WordPress dependencies
 */
import { RawHTML } from '@wordpress/element';

export default function save( { attributes } ) {
	const classes = getClassNames( attributes.content, 'wp-block-whatever' );

	return (
		<div className={ classes }>
			<RawHTML>{ attributes.content }</RawHTML>
		</div>
	);
}
