/**
 * Internal dependencies
 */
import { getClassNames } from './util';

/**
 * WordPress dependencies
 */
import { PlainText } from '@wordpress/block-editor';
import { Disabled, SandBox } from '@wordpress/components';

export default function WhateverEdit( props ) {
	const { attributes, isSelected, setAttributes } = props;

	const classes = isSelected
		? 'wp-block-whatever'
		: getClassNames( attributes.content, 'wp-block-whatever' );

	return (
		<div className={ classes }>
			<Disabled.Consumer>
				{ ( isDisabled ) =>
					! isSelected || isDisabled ? (
						<SandBox html={ attributes.content } type={ classes } />
					) : (
						<PlainText
							value={ attributes.content }
							onChange={ ( content ) =>
								setAttributes( { content } )
							}
							placeholder="Insert your embed code here"
							aria-label="HTML"
						/>
					)
				}
			</Disabled.Consumer>
		</div>
	);
}
