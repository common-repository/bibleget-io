/**
 * This file adds some LIVE to the Theme Customizer live preview. To leverage
 * this, set your custom settings to 'postMessage' and then add your handling
 * here. Your javascript should grab settings from customizer controls, and 
 * then make any necessary changes to the page using jQuery.
 */
const vsdecorations = [],
	bcdecorations   = [],
	vndecorations   = [],
	vtdecorations   = [];

const handleParagraphStyles = (BibleGetGlobal,key) => {
	const { BGET, BGETConstants } = BibleGetGlobal;
	switch(key){
		case 'PARAGRAPHSTYLES_FONTFAMILY': {
			const fontType = parent.jQuery('#bibleget-googlefonts').attr('data-fonttype');
			const font = BGET[key].replace(/\+/g, ' ').split(':');
			if(fontType == 'googlefont'){
				let link = 'https://fonts.googleapis.com/css?family=' + BGET[key];
				if (jQuery("link[href*='" + font + "']").length > 0){
					jQuery("link[href*='" + font + "']").attr('href', link)
				}
				else{
					jQuery('link:last').after('<link href="' + link + '" rel="stylesheet" type="text/css">');
				}
			}
			jQuery('.bibleQuote.results').css('font-family', font[0] );
			break;
		}
		case 'PARAGRAPHSTYLES_LINEHEIGHT':
			jQuery('.bibleQuote.results .versesParagraph').css('line-height', BGET.PARAGRAPHSTYLES_LINEHEIGHT+'em' );
		break;
		case 'PARAGRAPHSTYLES_PADDINGTOPBOTTOM':
		//nobreak;
		case 'PARAGRAPHSTYLES_PADDINGLEFTRIGHT':
			jQuery('.bibleQuote.results').css('padding', BGET.PARAGRAPHSTYLES_PADDINGTOPBOTTOM+'px '+BGET.PARAGRAPHSTYLES_PADDINGLEFTRIGHT+'px');
		break;
		case 'PARAGRAPHSTYLES_MARGINTOPBOTTOM':
		//nobreak;
		case 'PARAGRAPHSTYLES_MARGINLEFTRIGHT':
		//nobreak;
		case 'PARAGRAPHSTYLES_MARGINLEFTRIGHTUNIT':
			if(BGET.PARAGRAPHSTYLES_MARGINLEFTRIGHTUNIT === 'auto'){
				jQuery('.bibleQuote.results').css('margin', BGET.PARAGRAPHSTYLES_MARGINTOPBOTTOM+'px auto');
			}
			else{
				jQuery('.bibleQuote.results').css('margin', BGET.PARAGRAPHSTYLES_MARGINTOPBOTTOM+'px '+BGET.PARAGRAPHSTYLES_MARGINLEFTRIGHT+BGET.PARAGRAPHSTYLES_MARGINLEFTRIGHTUNIT );            
			}
		break;
		case 'PARAGRAPHSTYLES_PARAGRAPHALIGN':
			jQuery('.bibleQuote.results .versesParagraph').css('text-align', BGETConstants.CSSRULE.ALIGN[BGET[key]] );
		break;
		case 'PARAGRAPHSTYLES_WIDTH':
			jQuery('.bibleQuote.results').css('width', BGET[key]+'%' );
		break;
		case 'PARAGRAPHSTYLES_NOVERSIONFORMATTING':
			//should anything happen here?
		break;
		case 'PARAGRAPHSTYLES_BORDERWIDTH':
			jQuery('.bibleQuote.results').css('border-width', BGET[key]+'px' );
		break;
		case 'PARAGRAPHSTYLES_BORDERCOLOR':
			jQuery('.bibleQuote.results').css('border-color', BGET[key] );
		break;
		case 'PARAGRAPHSTYLES_BORDERSTYLE':
			jQuery('.bibleQuote.results').css('border-style', BGETConstants.CSSRULE.BORDERSTYLE[BGET[key]] );
		break;
		case 'PARAGRAPHSTYLES_BORDERRADIUS':
			jQuery('.bibleQuote.results').css('border-radius', BGET[key]+'px' );
		break;
		case 'PARAGRAPHSTYLES_BACKGROUNDCOLOR':
			jQuery('.bibleQuote.results').css('background-color', BGET[key] );
		break;
	}
}

const handleVersionStyles = (BibleGetGlobal, key) => {
	const { BGET } = BibleGetGlobal;
	switch( key ) {
		case 'VERSIONSTYLES_BOLD': {
			const fontweight = BGET.VERSIONSTYLES_BOLD ? 'bold' : 'normal';
			jQuery('.bibleQuote.results .bibleVersion').css('font-weight',fontweight);
			break;
		}
		case 'VERSIONSTYLES_ITALIC': {
			const fontstyle = BGET.VERSIONSTYLES_ITALIC ? 'italic' : 'normal';
			jQuery('.bibleQuote.results .bibleVersion').css('font-style',fontstyle);
			break;
		}
		case 'VERSIONSTYLES_UNDERLINE': {
			const idx = vsdecorations.indexOf('underline');
			if(BGET.VERSIONSTYLES_UNDERLINE && idx === -1) {
				vsdecorations.push('underline');
			}
			else if(!BGET.VERSIONSTYLES_UNDERLINE && idx !== -1) {
				vsdecorations.splice(idx,1);
			}
			const textdecoration = vsdecorations.length === 0 ? 'none' : vsdecorations.join(' ');
			jQuery('.bibleQuote.results .bibleVersion').css('text-decoration',textdecoration);
			break;
		}
		case 'VERSIONSTYLES_STRIKETHROUGH': {
			const idx = vsdecorations.indexOf('line-through');
			if(BGET.VERSIONSTYLES_STRIKETHROUGH && idx === -1) {
				vsdecorations.push('line-through');
			}
			else if(!BGET.VERSIONSTYLES_STRIKETHROUGH && idx !== -1) {
				vsdecorations.splice(idx,1);
			}
			const textdecoration = vsdecorations.length === 0 ? 'none' : vsdecorations.join(' ');
			jQuery('.bibleQuote.results .bibleVersion').css('text-decoration',textdecoration);
			break;
		}
		case 'VERSIONSTYLES_TEXTCOLOR':
			jQuery('.bibleQuote.results .bibleVersion').css('color', BGET[key] );
		break;
		case 'VERSIONSTYLES_FONTSIZE':
		//nobreak;
		case 'VERSIONSTYLES_FONTSIZEUNIT': {
			const fontsize = BGET.VERSIONSTYLES_FONTSIZEUNIT === 'em'
				? BGET.VERSIONSTYLES_FONTSIZE / 10
				: BGET.VERSENUMBERSTYLES_FONTSIZE;
			jQuery('.bibleQuote.results .bibleVersion').css('font-size', fontsize+BGET.VERSIONSTYLES_FONTSIZEUNIT );
			break;
		}
		/*
		case 'VERSIONSTYLES_VALIGN':
			//this really only makes sense for verse numbers
		break;
		*/
	}
}

const handleBookChapterStyles = (BibleGetGlobal,key) => {
	const { BGET } = BibleGetGlobal;
	switch( key ) {
		case 'BOOKCHAPTERSTYLES_BOLD': {
			const fontweight = BGET.BOOKCHAPTERSTYLES_BOLD ? 'bold' : 'normal';
			jQuery('.bibleQuote.results .bookChapter').css('font-weight', fontweight);
			break;
		}
		case 'BOOKCHAPTERSTYLES_ITALIC': {
			const fontstyle = BGET.BOOKCHAPTERSTYLES_ITALIC ? 'italic' : 'normal';
			jQuery('.bibleQuote.results .bookChapter').css('font-style', fontstyle);
			break;
		}
		case 'BOOKCHAPTERSTYLES_UNDERLINE': {
			const idx = bcdecorations.indexOf('underline');
			if(BGET.BOOKCHAPTERSTYLES_UNDERLINE && idx === -1) {
				bcdecorations.push('underline');
			}
			else if(!BGET.BOOKCHAPTERSTYLES_UNDERLINE && idx !== -1) {
				bcdecorations.splice(idx,1);
			}
			const textdecoration = bcdecorations.length === 0 ? 'none' : bcdecorations.join(' ');
			jQuery('.bibleQuote.results .bookChapter').css('text-decoration',textdecoration);
			break;
		}
		case 'BOOKCHAPTERSTYLES_STRIKETHROUGH': {
			const idx = bcdecorations.indexOf('line-through');
			if(BGET.BOOKCHAPTERSTYLES_STRIKETHROUGH && idx === -1) {
				bcdecorations.push('line-through');
			}
			else if(!BGET.BOOKCHAPTERSTYLES_STRIKETHROUGH && idx !== -1) {
				bcdecorations.splice(idx,1);
			}
			const textdecoration = bcdecorations.length === 0 ? 'none' : bcdecorations.join(' ');
			jQuery('.bibleQuote.results .bookChapter').css('text-decoration',textdecoration);
			break;
		}
		case 'BOOKCHAPTERSTYLES_TEXTCOLOR':
			jQuery('.bibleQuote.results .bookChapter').css('color', BGET[key] );
		break;
		case 'BOOKCHAPTERSTYLES_FONTSIZE':
		//nobreak;
		case 'BOOKCHAPTERSTYLES_FONTSIZEUNIT': {
			const fontsize = BGET.BOOKCHAPTERSTYLES_FONTSIZEUNIT === 'em'
				? BGET.BOOKCHAPTERSTYLES_FONTSIZE / 10
				: BGET.BOOKCHAPTERSTYLES_FONTSIZE;
			jQuery('.bibleQuote.results .bookChapter').css('font-size', fontsize+BGET.BOOKCHAPTERSTYLES_FONTSIZEUNIT ); 
			break;
		}
		/*
		case 'BOOKCHAPTERSTYLES_VALIGN':
			//this really only makes sense for verse numbers
		break;
		*/
	}
}

const handleVerseNumberStyles = (BibleGetGlobal,key) => {
	const { BGET, BGETConstants } = BibleGetGlobal;
	switch(key) {
		case 'VERSENUMBERSTYLES_BOLD': {
			const fontweight = BGET.VERSENUMBERSTYLES_BOLD ? 'bold' : 'normal';
			jQuery('.bibleQuote.results .versesParagraph .verseNum').css('font-weight', fontweight);
			break;
		}
		case 'VERSENUMBERSTYLES_ITALIC': {
			const fontstyle = BGET.VERSENUMBERSTYLES_ITALIC ? 'italic' : 'normal';
			jQuery('.bibleQuote.results .versesParagraph .verseNum').css('font-style', fontstyle);
			break;
		}
		case 'VERSENUMBERSTYLES_UNDERLINE': {
			const idx = vndecorations.indexOf('underline');
			if(BGET.VERSENUMBERSTYLES_UNDERLINE && idx === -1){
				vndecorations.push('underline');
			}
			else if (!BGET.VERSENUMBERSTYLES_UNDERLINE && idx !== -1 ) {
				vndecorations.splice(idx,1);
			}
			const textdecoration = vndecorations.length === 0 ? 'none' : vndecorations.join(' ');
			jQuery('.bibleQuote.results .versesParagraph .verseNum').css('text-decoration',textdecoration);
			break;
		}
		case 'VERSENUMBERSTYLES_STRIKETHROUGH': {
			const idx = vndecorations.indexOf('line-through');
			if(BGET.VERSENUMBERSTYLES_STRIKETHROUGH && idx === -1) {
				vndecorations.push('line-through');
			}
			else if(!BGET.VERSENUMBERSTYLES_STRIKETHROUGH && idx !== -1 ) {
				vndecorations.splice(idx,1);
			}
			const textdecoration = vndecorations.length === 0 ? 'none' : vndecorations.join(' ');
			jQuery('.bibleQuote.results .versesParagraph .verseNum').css('text-decoration',textdecoration);
			break;
		}
		case 'VERSENUMBERSTYLES_TEXTCOLOR':
			jQuery('.bibleQuote.results .versesParagraph .verseNum').css('color', BGET[key] );
		break;
		case 'VERSENUMBERSTYLES_FONTSIZE':
		//nobreak;
		case 'VERSENUMBERSTYLES_FONTSIZEUNIT': {
			const fontsize = BGET.VERSENUMBERSTYLES_FONTSIZEUNIT == 'em'
				? BGET.VERSENUMBERSTYLES_FONTSIZE / 10
				: BGET.VERSENUMBERSTYLES_FONTSIZE;
			jQuery('.bibleQuote.results .versesParagraph .verseNum').css('font-size', fontsize+BGET.VERSENUMBERSTYLES_FONTSIZEUNIT ); 
			break;
		}
		case 'VERSENUMBERSTYLES_VALIGN': {
			const styles = {};
			switch(BGET.VERSENUMBERSTYLES_VALIGN) {
				case BGETConstants.VALIGN.SUPERSCRIPT:
					styles['vertical-align'] = 'baseline';
					styles['position'] = 'relative';
					styles['top'] = '-0.6em';
					break;
				case BGETConstants.VALIGN.SUBSCRIPT:
					styles['vertical-align'] = 'baseline';
					styles['position'] = 'relative';
					styles['top'] = '0.6em';
					break;
				case BGETConstants.VALIGN.NORMAL: 
					styles['vertical-align'] = 'baseline';
					styles['position'] = 'static';
					break;
			}
			jQuery('.bibleQuote.results .versesParagraph .verseNum').css(styles);
			break;
		}
	}
}

const handleVerseTextStyles = (BibleGetGlobal,key) => {
	const { BGET } = BibleGetGlobal;
	switch( key ) {
		case 'VERSETEXTSTYLES_BOLD': {
			const fontweight = BGET.VERSETEXTSTYLES_BOLD ? 'bold' : 'normal';
			jQuery('.bibleQuote.results .versesParagraph').css('font-weight', fontweight);
			break;
		}
		case 'VERSETEXTSTYLES_ITALIC': {
			//console.log('we are dealing with the italics styling');
			const fontstyle = BGET.VERSETEXTSTYLES_ITALIC ? 'italic' : 'normal';
			jQuery('.bibleQuote.results .versesParagraph').css('font-style', fontstyle);
			break;
		}
		case 'VERSETEXTSTYLES_UNDERLINE': {
			const idx = vtdecorations.indexOf('underline');
			if(BGET.VERSETEXTSTYLES_UNDERLINE && idx === -1) { 
				vtdecorations.push('underline');
			} else if(!BGET.VERSETEXTSTYLES_UNDERLINE && idx !== -1) {
				vtdecorations.splice(idx,1);
			}
			const textdecoration = vtdecorations.length === 0 ? 'none' : vtdecorations.join(' ');
			jQuery('.bibleQuote.results .versesParagraph').css('text-decoration',textdecoration);
			break;
		}
		case 'VERSETEXTSTYLES_STRIKETHROUGH': {
			const idx = vtdecorations.indexOf('line-through');
			if(BGET.VERSETEXTSTYLES_STRIKETHROUGH && idx === -1) {
				vtdecorations.push('line-through');
			}
			else if(!BGET.VERSETEXTSTYLES_STRIKETHROUGH && idx !== -1 ) {
				vtdecorations.splice(idx,1);
			}
			const textdecoration = vtdecorations.length === 0 ? 'none' : vtdecorations.join(' ');
			jQuery('.bibleQuote.results .versesParagraph').css('text-decoration',textdecoration);
			break;
		}
		case 'VERSETEXTSTYLES_TEXTCOLOR':
			jQuery('.bibleQuote.results .versesParagraph').css('color', BGET[key] );
		break;
		case 'VERSETEXTSTYLES_FONTSIZE':
		//nobreak;
		case 'VERSETEXTSTYLES_FONTSIZEUNIT': {
			const fontsize = BGET.VERSETEXTSTYLES_FONTSIZEUNIT === 'em'
				? BGET.VERSETEXTSTYLES_FONTSIZE / 10
				: BGET.VERSETEXTSTYLES_FONTSIZE;
			jQuery('.bibleQuote.results .versesParagraph').css('font-size', fontsize+BGET.VERSETEXTSTYLES_FONTSIZEUNIT );
			break;
		}
		/*
		case 'VERSETEXTSTYLES_VALIGN':
			//this really only makes sense for verse numbers
		break;
		*/
	}
}


if(
	BibleGetGlobal !== null
	&& typeof BibleGetGlobal === 'object'
	&& BibleGetGlobal.hasOwnProperty('BGETProperties')
	&& BibleGetGlobal.hasOwnProperty('BGETConstants')
	&& BibleGetGlobal.hasOwnProperty('BGET') 
) {
	//console.log('BibleGetGlobal is defined!');
	if(
		typeof BibleGetGlobal.BGETProperties === 'object'
		&& typeof BibleGetGlobal.BGETConstants === 'object'
		&& typeof BibleGetGlobal.BGET === 'object'
	) {
		//console.log('BibleGet has properties BGETProperties, BGETConstants and BGET');
		const { BGETProperties, BGET } = BibleGetGlobal;
		for(const key in BGETProperties ){
			wp.customize( 'BGET['+key+']', (value) => {
				value.bind(function( newval ) {
					//keep our local store of properties/attributes/preferences updated
					BGET[key] = newval; 
					if( key.startsWith('PARAGRAPHSTYLES') ) {
						handleParagraphStyles(BibleGetGlobal,key);
					}
					else if( key.startsWith('VERSIONSTYLES') ) {
						handleVersionStyles(BibleGetGlobal,key);
					}
					else if( key.startsWith('BOOKCHAPTERSTYLES') ) {
						handleBookChapterStyles(BibleGetGlobal,key);
					}
					else if( key.startsWith('VERSENUMBERSTYLES') ) {
						handleVerseNumberStyles(BibleGetGlobal,key);
					}
					else if( key.startsWith('VERSETEXTSTYLES') ) {
						//console.log('we are dealing with a verse text style setting');
						handleVerseTextStyles(BibleGetGlobal,key);
					}
				});
			});
		}
	}
	else{
		alert('Live preview script seems to have been "localized" with BibleGetGlobal object, however the BGETProperties property of the BibleGetGlobal object is not available');
	}
}
else{
	alert('Live preview script does not seem to have been "localized" correctly with BibleGetGlobal object');
}
