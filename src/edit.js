/**
 * WordPress dependencies
 */
import {
	IconButton,
	ExternalLink,
	Toolbar,
	withNotices,
} from '@wordpress/components';
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
const LABELS = {
	title: 'Peculiar Pointers',
	instructions:
		'Upload an image or pick one from your media library. The recommended image size is 64x64px and the max is 128x128px.',
};

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
					labels={ LABELS }
					onSelect={ this.onSelectImage }
					accept="image/*"
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					notices={ noticeUI }
					onError={ noticeOperations.createErrorNotice }
				>
					<div className="components-placeholder__discover">
						<span className="components-placeholder__label">
							Where can I find cursors?
						</span>
						<span>
							Our mission is to make WordPress weird so we’ve
							created a gallery of cursors for you to use here:{ ' ' }
							<ExternalLink href="https://weirdpress.club/pointers">
								https://weirdpress.club/pointers
							</ExternalLink>
						</span>
					</div>
				</MediaPlaceholder>
			);
		}

		const styles = {
			cursor: `url(${ url }) 0 0, pointer`,
			cursor: `-webkit-image-set(url(${ url }) 1x, url(${ url }) 2x) 0 0, pointer`,
		};

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
					style={ styles }
				>
					<InnerBlocks />
				</div>
			</>
		);
	}
}

export default withNotices( PeculiarPointersEdit );
