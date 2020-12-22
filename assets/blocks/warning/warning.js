( function( blocks, blockEditor, element ) {

	const el = wp.element.createElement;

	const { RichText } = blockEditor;
	const { registerBlockType } = wp.blocks;


	const { PlainText } = blockEditor;
 

	registerBlockType( 'alert/warning', {
		title: 'Warning Alert Box',
		icon:  {foreground: '#913944', background: '#ecd2d7', src: 'warning'},
		category: 'master-alerts',
		keywords: [ 'alert', 'master', 'warning' ],
    attributes: {
        content: {
            type: 'string',
            selector: '.content',
            default: '',
        },
        title: {
            type: 'string',
            selector: '.title',
            default: '',
        },
    },

		// The "edit" property must be a valid function.
		edit: function( props ) {
			var content = props.attributes.content;
			var title = props.attributes.title;

			// when text in RichText component has been changed
			function onChangeContent( newContent ) {
				props.setAttributes( { content: newContent } );
			}

			// when text in RichText component has been changed
			function onChangeTitle( newTitle ) {
				props.setAttributes( { title: newTitle } );
			}

			return (
				el( 'div', { className: props.className },
                    el('div', {className: 'shadow'},
                    	el('div', {className: 'info-tab warning-icon', title: 'Useful Warning Alert'},

                            el('i')
                            ),

                            el('div',{className: 'warning-box'},
                             el(
						RichText,
						{
							tagName: 'h5',
							format: 'string',
							className: 'warning-title',
							onChange: onChangeTitle,
							value: title,
							contenteditable: '',
							placeholder: 'Enter Warning Title',
							allowedFormats: [ 'core/bold', 'core/italic', 'core/code', 'core/italic', 'core/link', 'core/strikethrough', 'core/underline', 'core/text-color', 'core/subscript', 'core/superscript']

						}

                               ),

					el(
						RichText,
						{
							tagName: 'p',
							format: 'string',
							className: 'warning-content',
							onChange: onChangeContent,
							value: content,
							contenteditable: '',
							placeholder: 'Enter Warning Content',
							allowedFormats: [ 'core/bold', 'core/italic', 'core/code', 'core/italic', 'core/link', 'core/strikethrough', 'core/underline', 'core/text-color', 'core/subscript', 'core/superscript']

						}
					)


                ))


				)
			);
		},

		save: function( props ) {
			var content = props.attributes.content;
			var title = props.attributes.title;
			return (
				el('div', {className: 'color-box'},
                    el('div', {className: 'shadow'},
                    	el('div', {className: 'info-tab warning-icon', title: 'Useful Warning Alert'},

                            el('i')
                            ),

                            el('div',{className: 'warning-box'},
                             el(RichText.Content, {
                                tagName: 'h5',
                                className: 'warning-title',
                                value: title,
                            }),

                            el(RichText.Content, {
                                tagName: 'p',
                                className: 'warning-content',
                                value:  content
                            })
                    )
                )
				)
			);
		},
	example: {
		attributes: {
			backgroundType: 'gradient',
			backgroundGradient: 'linear-gradient(-225deg, rgb(255, 5, 124) 0%, rgb(141, 11, 147) 50%, rgb(50, 21, 117) 100%)',
			align: 'center',
			quoteStyle: 'quotes',
			paddingTop: 30,
			paddingBottom: 30,
			blockquoteAlign: 'left',
			textColor: '#FFFFFF',
			content: __( 'Alert Warning Preview...', 'alert-warning' ),
		},
	},
	} );
} )(
	window.wp.blocks,
	window.wp.blockEditor,
	window.wp.element,
);
