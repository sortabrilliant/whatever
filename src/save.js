/**
 * WordPress dependencies
 */
import { RawHTML } from '@wordpress/element';

export default function save( { attributes } ) {
	return (
		<div className="wp-block-whatever">
			<RawHTML>{ attributes.content }</RawHTML>
		</div>
	);
}
