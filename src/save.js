/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';

const save = ( { attributes } ) => {
	const { url } = attributes;

	return (
		<div
			className="wp-block-peculiar-pointers-container"
			style={ { cursor: `url(${ url }),auto` } }
		>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
