/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';

const save = ( { attributes } ) => {
	const { url } = attributes;

	const styles = {
		cursor: `url(${ url }), pointer`,
		cursor: `-webkit-image-set(url(${ url }) 1x, url(${ url }) 2x), pointer`,
	};

	return (
		<div className="wp-block-peculiar-pointers-container" style={ styles }>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
