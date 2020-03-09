import { getClassNames } from '../util';

describe( 'sortabrilliant/whatever', () => {
	test( 'getClassNames returns aspect ratio class names for iframes with width and height', () => {
		const html = '<iframe width="16" height="9"></iframe>';
		const expected = 'whatever wp-embed-aspect-16-9 wp-has-aspect-ratio';
		expect( getClassNames( html, 'whatever' ) ).toEqual( expected );
	} );
} );
