/**
 * WordPress dependencies
 */
import { IconButton, Toolbar, withNotices } from '@wordpress/components';
import {
	BlockControls,
	BlockIcon,
	InnerBlocks,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import { Component } from '@wordpress/element';

/**
 * Internal dependencies
 */
import icon from './icon';

const ALLOWED_MEDIA_TYPES = [ 'image' ];

class PeculiarPointersEdit extends Component {
	constructor() {
		super( ...arguments );

		this.onSelectImage = this.onSelectImage.bind( this );
	}

	onSelectImage( image ) {
		if ( ! image || ! image.url ) {
			this.props.setAttributes( { url: undefined, id: undefined } );
			return;
		}

		this.props.setAttributes( { url: image.url, id: image.id } );
	}

	render() {
		const {
			attributes,
			className,
			noticeOperations,
			noticeUI,
		} = this.props;
		const { id, url } = attributes;
		const hasPointer = !! url;

		if ( ! hasPointer ) {
			return (
				<MediaPlaceholder
					icon={ <BlockIcon icon={ icon } /> }
					className={ className }
					labels={ {
						title: 'Peculiar Pointers',
						instructions:
							'Upload an image or pick one from your media library.',
					} }
					onSelect={ this.onSelectImage }
					accept="image/*"
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					notices={ noticeUI }
					onError={ noticeOperations.createErrorNotice }
				/>
			);
		}

		return (
			<>
				<BlockControls>
					<MediaUploadCheck>
						<Toolbar>
							<MediaUpload
								onSelect={ this.onSelectImage }
								allowedTypes={ ALLOWED_MEDIA_TYPES }
								value={ id }
								render={ ( { open } ) => (
									<IconButton
										className="components-toolbar__control"
										label="Edit pointer"
										icon="edit"
										onClick={ open }
									/>
								) }
							/>
						</Toolbar>
					</MediaUploadCheck>
				</BlockControls>
				<div
					className="wp-block-peculiar-pointers-container"
					style={ { cursor: `url(${ url }),auto` } }
				>
					<InnerBlocks />
				</div>
			</>
		);
	}
}

export default withNotices( PeculiarPointersEdit );
