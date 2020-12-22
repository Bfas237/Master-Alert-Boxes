( function( blocks, blockEditor, element ) {

	const el = wp.element.createElement;

	const { RichText } = blockEditor;
	const { registerBlockType } = wp.blocks;

	const { PlainText } = blockEditor;


	registerBlockType( 'alert/tip', {
		title: 'Tips Alert Box',
		icon: { foreground: '#2e5014', background: '#d5efc2', src: 'lightbulb' },
		category: 'master-alerts',
		keywords: [ 'alert', 'master', 'tip' ],
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
                    	el('div', {className: 'info-tab tip-icon', title: 'Master Alert Tip'},
                        
                            el('i')
                            ),
                        
                            el('div',{className: 'tip-box'},
                             el(
						RichText,
						{
							tagName: 'h5',
							format: 'string',
							className: 'tip-title',
							onChange: onChangeTitle,
							value: title,
							contenteditable: '',
							placeholder: 'Enter Tip Title',
							allowedFormats: [ 'core/bold', 'core/italic', 'core/code', 'core/italic', 'core/link', 'core/strikethrough', 'core/underline', 'core/text-color', 'core/subscript', 'core/superscript']
						
						}
                                 
                               ),
                            
					el(
						RichText,
						{
							tagName: 'p',
							format: 'string',
							className: 'tip-content',
							onChange: onChangeContent,
							value: content,
							contenteditable: '',
							placeholder: 'Enter Tip Content',
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
                    	el('div', {className: 'info-tab tip-icon', title: 'Useful Tip Alert'},
                        
                            el('i')
                            ),
                        
                            el('div',{className: 'tip-box'},
                             el(RichText.Content, {
                                tagName: 'h5',
                                className: 'tip-title',
                                value: title,
                            }),

                            el(RichText.Content, {
                                tagName: 'p',
                                className: 'tip-content',
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
			align: 'left',
			quoteStyle: 'quotes',
			paddingTop: 30,
			paddingBottom: 30,
			blockquoteAlign: 'left',
			textColor: '#FFFFFF',
			content: __( 'Alert Tip Preview...', 'alert-tip' ),
		},
	},
	} );
} )(
	window.wp.blocks,
	window.wp.blockEditor,
	window.wp.element,
);
