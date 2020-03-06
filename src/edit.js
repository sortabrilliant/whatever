/**
 * WordPress dependencies
 */
import { PlainText } from '@wordpress/block-editor';
import { Disabled, SandBox } from '@wordpress/components';

export default function WhateverEdit( props ) {
	const { attributes, isSelected, setAttributes } = props;

	return (
		<div className="wp-block-whatever">
			<Disabled.Consumer>
				{ ( isDisabled ) =>
					! isSelected || isDisabled ? (
						<>
							<SandBox html={ attributes.content } />
						</>
					) : (
						<PlainText
							value={ attributes.content }
							onChange={ ( content ) =>
								setAttributes( { content } )
							}
							placeholder="Paste your embeds..."
							aria-label="HTML"
						/>
					)
				}
			</Disabled.Consumer>
		</div>
	);
}
