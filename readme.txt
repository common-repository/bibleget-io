=== BibleGet I/O ===
Contributors: Lwangaman
Author URI: https://www.johnromanodorazio.com
Plugin URI: https://www.bibleget.io
Donate link: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=HDS7XQKGFHJ58
Tags: bible, block, shortcode, quote, citation, verses, bibbia, citazione, versetti, biblia, cita, versiculos, versets, citation
Requires at least: 5.6
Tested up to: 6.4
Requires PHP: 7.4
Stable tag: 8.3
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Insert Bible quotes in your articles or pages using the "Bible quote" block or the [bibleget] shortcode; uses the BibleGet I/O API.

== Description ==

Once the plugin is installed, you will find a `Bible quote` block in the **widgets** section of the **block editor**. 
Also available is a shortcode `[bibleget]` that you can use to insert Bible quotes in articles or pages from different versions of the Bible in different languages.

The text of the Bible quotes is retrieved from the BibleGet API *[https://query.bibleget.io](https://query.bibleget.io "BibleGet API endpoint")*.

**Sample usage of the shortcode:**

  * `[bibleget query="Exodus 19:5-6,8;20:1-17" version="CEI2008"]`
  * `[bibleget query="Matthew 1:1-10,12-15" versions="NVBSE,NABRE"]` 

It is also possible to place the reference for the desired Bible quote in the contents of the shortcode:

  * `[bibleget version="NABRE"]John 3:16;1 John 4:7-8[/bibleget]`

The Plugin also has a settings page **“BibleGet I/O”** under **“Settings”** in the Administration area, where you can choose your preferred Bible versions from those available on the BibleGet server so that you don’t have to use the `version` or `versions` parameter every time. 
After you have made your choices in the settings area, remember to click on **“Save”**! 
Once the preferred version is set you can simply use:

  * `[bibleget query="1 Cor 13"]`

Other parameters available to the shortcode are:

  * `popup`: can have a value of `true` or `false`. Will determine whether the text of the Bible quote will show in a full block, or instead in a popup window upon clicking the Bible quote. Example: `[bibleget query="Romans 8:28" popup="true"]`
  * `preferorigin`: can have a value of `GREEK` or `HEBREW`, useful in those cases where there are multiple texts for the same book, chapter or verse in the same Bible edition, such as in the Book of Esther where both versions are included, one based on the original Greek text, and the other based on the original Hebrew text. Example: `[bibleget query="Esther 1:1" preferorigin="HEBREW"]`
  * `layoutprefs_showbibleversion`: can have a value of `true` or `false`. Example: `[bibleget query="Ezekiel 25:17" layoutprefs_showbibleversion="false"]`
  * `layoutprefs_bibleversionalignment`: can have a value of `LEFT`, `CENTER`, `RIGHT` or `JUSTIFY`. Example: `[bibleget query="Psalm 149:3" layoutprefs_bibleversionalignment="LEFT"]`
  * `layoutprefs_bibleversionposition`: can have a value of `TOP`, `BOTTOM` or `BOTTOMINLINE`. Example: `[bibleget query="2 Samuel 6:14" layoutprefs_bibleversionposition="BOTTOM"]`
  * `layoutprefs_bibleversionwrap`: can have a value of `NONE`, `PARENTHESES` or `BRACKETS`. Example: `[bibleget query="Ecclesiastes 3:1-4" layoutprefs_bibleversionwrap="BRACKETS"]`
  * `layoutprefs_bookchapteralignment`: can have a value of `LEFT`, `CENTER`, `RIGHT` or `JUSTIFY`. Example: `[bibleget query="Galatians 5:7-10" layoutprefs_bookchapteralignment="RIGHT"]`
  * `layoutprefs_bookchapterposition`: can have a value of `TOP`, `BOTTOM` or `BOTTOMINLINE`. Example: `[bibleget query="Mark 13:35-37" layoutprefs_bookchapterposition="BOTTOMINLINE"]`
  * `layoutprefs_bookchapterwrap`: can have a value of `NONE`, `PARENTHESES` or `BRACKETS`. Example: `[bibleget query="John 8:12" layoutprefs_bookchapterwrap="PARENTHESES"]`
  * `layoutprefs_bookchapterformat`: can have a value of `USERLANG`, `BIBLELANG`, `USERLANGABBREV` or `BIBLELANGABBREV`. Example: `[bibleget query="Psalms 144:1-2" layoutprefs_bookchapterformat="USERLANGABBREV"]`
  * `layoutprefs_bookchapterfullquery`: can have a value of `true` or `false`. Example: `[bibleget query="Isaiah 6:8" layoutprefs_bookchapterfullquery="true"]`
  * `layoutprefs_showversenumbers`: can have a value of `true` or `false`. Example: `[bibleget query="1 John 2:15-17" layoutprefs_showversenumbers="false"]`

The style settings are customizable using the **Wordpress Customizer**, so you can make the Bible quotes fit into the style of your own blog / WordPress website.

The **Bible quote** block also has a number of customizable options in the **block editor** which allow you to set not only the style but also the layout of the elements that make up the Bible quote.

https://youtu.be/KWd_q6e8A2w

https://youtu.be/zqJqU_5UZ5M

_________

[BibleGet Website](https://www.bibleget.io/ "BibleGet Project Website")
[Subscribe to the Youtube channel!](https://www.youtube.com/channel/UCDt6zo7t6q0oE3ZRyY0YVOw?sub_confirmation=1 "BibleGet Youtube channel")
[Follow on Facebook!](https://www.facebook.com/BibleGetIO/ "BibleGet Facebook Page")
[Follow on Twitter!](https://twitter.com/biblegetio "@BibleGetIO")

== Installation ==

1. Go to `Administration Area -> Plugins -> Add new` and search for `bibleget`, click on `Install Now`
2. `Activate` the plugin once installation is complete
3. Set the preferred Bible version or versions for your Bible quotes from the settings page `Administration Area -> Settings -> BibleGet I/O`
4. Set your preferred styling in the `WordPress Customizer -> BibleGet I/O` or when you add a `Bible quote` block in the block editor
5. Add Bible quotes to your articles and pages either with the `Bible quote` block or with the `[bibleget]` shortcode
6. Check out the [WordPress playlist on youtube](https://www.youtube.com/watch?v=KWd_q6e8A2w&list=PLakrDoGwcHgaqviULNtbIlBmmdmAQS1hp)! 

== Frequently Asked Questions ==

= How do I formulate a Bible citation? =
The `query` parameter must contain a Bible reference formulated according to the standard notation for Bible citations (see [Bible citation](http://en.wikipedia.org/wiki/Bible_citation "http://en.wikipedia.org/wiki/Bible_citation") on Wikipedia).
Two different notations can be used, the English (Chicago Manual of Style) notation and the International style notation.

**ENGLISH NOTATION:**

  * “:” is the chapter – verse separator. “15:5” means “chapter 15, verse 5”.

  * “-” is the from – to separator, and it can be used in one of three ways:

    * from chapter to chapter: “15-16″ means “from chapter 15 to chapter 16”.
    * from chapter,verse to verse (of the same chapter): “15:1-5” means “chapter 15, from verse 1 to verse 5”.
    * from chapter,verse to chapter,verse “15:1-16:5” means “from chapter 15,verse 1 to chapter 16,verse 5”.

  * “,” is the separator between one verse and another. “15:5,7,9” means “chapter 15,verse 5 then verse 7 then verse 9”.

  * “;” is the separator between one query and another. “15:5-7;16:3-9,11-13” means “chapter 15, verses 5 to 7; then chapter 16, verses 3 to 9 and verses 11 to 13”.

**INTERNATIONAL NOTATION:**

  * “,” is the chapter - verse separator. “15,5” means “chapter 15, verse 5”.
   
  * “-” same as English notation
   
  * “.” is the separator between one verse and another. “15,5.7.9” means “chapter 15,verse 5 then verse 7 then verse 9”.
   
  * “;” same as English notation
   
Either notation can be used, however they cannot be mixed within the same query.

MLA style notation (which uses a “.” dot as the chapter verse separator, and only supports verse ranges, not non-consecutive verses) is not supported.

At least the first query (of a series of queries chained by a semi-colon) must indicate the name of the book to quote from; the name of the book can be written in full in more than 20 different languages, or written using the abbreviated form.
See the page [List of Book Abbreviations](https://www.bibleget.io/how-it-works/list-of-book-abbreviations/ "List of Book Abbreviations").
When a query following a semi-colon does not indicate the book name, it is intended that the same book as the previous query will be quoted.
So “Gen1:7-9;4:4-5;Ex3:19” means “Genesis chapter 1, verses 7 to 9; then again Genesis chapter 4, verses 4 to 5; then Exodus chapter 3, verse 19”.

= I am requesting a long Bible quote but I'm only getting 30 verses =
If you are using a version of the Bible that is covered by copyright, you will not be able to quote more than 30 verses at once. So if you request for example “Gen1” using the NABRE version, you might expect to get back Gen1:1-31 but instead you will only get back Gen1:1-30. This is a limit imposed by the legal agreements for usage of these versions, it's not a bug, it's by design. If you need more than 30 verses when requesting a version covered by copyright, formulate the request as multiple quotes split up into no more than 30 verses each, for example “Gen1:1-30;1:31”.

= What happens if I add a Google Fonts API key? =
If you add a Google Fonts API key, the BibleGet plugin will immediately test it's validity. If valid, it will remember that you have a key and that it's valid for 3 months. Every three months starting from this moment the BibleGet plugin will talk with the Google Fonts API to get the latest list of available Google Fonts, and will download to the plugin folders a local compressed copy of each of those fonts for the purpose of previewing them in the customizer interface.  
You will need to be a bit patient the first time as it will take a couple minutes to complete the download process. A progress bar will let you know how the download is progressing. If you have a slow connection, the progress might stall for a few seconds every now an then (around 25%, 50%, and 75%), just be patient and it should continue to progress to the end. In the future, whenever the plugin talks with the Google Fonts API, the process should go a lot faster as it will only need to download new fonts. 
It will also generate a css file that will load the preview of the fonts when you open the customizer interface. This does have a bit of a performance impact, and especially the first time you open the customizer it might take a minute to load. After this it should go a little faster as the fonts previews should be cached by the browser. If you are not happy with the performance impact, I would suggest to delete the Google Fonts API key.

= I have added the Google Fonts API key but the list of available fonts isn't updated =
The BibleGet plugin will remember that your key is valid for 3 months. This means that it will not fetch the list of fonts from the Google Fonts API until the relative transient expires. If a new font has come out that you would like to see and use in the customizer interface for the BibleGet plugin, and you don't want to have to wait until the transient expires in that 3 month time slot, then you can click on the "force refresh" option below your API key. 

= I added the Google Fonts API key but while it was processing the download it stopped with a 504 http status error =
If you receive a 504 http status error it means that the connection with the Google Fonts API timed out for some reason. The BibleGet plugin tries to handle this situation by forcing the process to start again, but if instead the process comes to a halt please let the plugin author know at admin@bibleget.io in order to look further into the handling of this situation. In any case you can reload the page and use the "force refresh" option below your API key and the process will pick up where it left off.

= I updated the plugin to version 5.4 or later, but the new 'Bible quote' block doesn't seem to be cooperating =
In order to allow for new layout options, the BibleGet I/O API itself was slightly updated, and there is a little more information in the response from the server.
However Bible quotes are cached by the BibleGet plugin for a seven day period, which means that from the time of the update until about a week later the cached Bible quotes will not have the necessary information for them to work with the 'Bible quote' block.
If you do not want to wait seven days or until the cache expires, there is a new option in the BibleGet Settings page since version 5.7 which allows to flush the cache.
A word of caution however: the more recent updates to the BibleGet service endpoint have started imposing hard limits on the number of requests that can be issued from any given domain, IP address or referer. No more than 30 requests for one same Bible quote can be issued in a two day period, and no more than 100 requests for different Bible quotes can be issued in a two day period. If you have many Bible quotes on your website and you risk hitting the limit, it may be best not to flush the cache all at once but rather wait out the seven days until the cache expires.  

= I'm not able to use some options in the Gutenberg block such as positioning of the Bible version =
There was recently an update to the BibleGet I/O API which slightly changed the structure of the html that comprises the Bible quotes. It is necessary to update the plugin to v5.9 in order to be compatible with these changes. 

== Screenshots ==

1. Inserting a Bible quote block into an article or page
2. Bible quote block: choose Bible version and insert Bible reference
3. Search results for search verses by keyword
4. Layout options for Bible version, Book and chapter reference...
5. Styling options with the WordPress Customizer
# REMEMBER: screenshots are stored in the project assets folder. The extension doesn't matter, what matters is the file name
# must be lowercase "screenshot-#.ext" where # corresponds to the list number above

== Changelog ==

= 8.3 =
* Fix: Google Fonts preview data was not persisting between updates

= 8.2 =
* Fix: focus lost from block controls making it almost impossible to use them
* Enhancement: create fallback for Google Fonts when API key not used, and which works for the Font select control both in the Customizer and the Block editor
* Enhancement: clean up js code using more arrow functions

= 8.1 =
* Fix: Font Select in Customizer was still broken after modernizing the plugin's javascript

= 8.0 =
* Fix: bug when downloading previews for Google Fonts (typo in curl variables)
* Fix: bug in using popup option for Bible quotes (incorrect loading of external javascripts)

= 7.9 =
* Fix: newer parameters such as `preferorigin` not working correctly for the shortcode
* Better organized codebase, better readability and maintainability
* Spaces to tabs in codebase as per WP coding convention
* Use composer on plugin build step to include external scripts while excluding unnecessary files
  (getting this to behave correctly with the github to svn actions is the reason why there's a jump from v7.5 to v7.9)
* Load external javascript scripts from cdn rather than checking into the repo
* verified compatibility with WordPress 6.4

= 7.8 =
* see v7.9

= 7.7 =
* see v7.9

= 7.6 =
* see v7.9

= 7.5 =
* Fix: check `GFonts` for null value (like when Google Fonts previews are not installed or updated)

= 7.4 =
* Fix: recent updates to the Block editor gave a fixed height to all select inputs, whether they had the `multiple` attribute or not, needed to override it for `select[multiple]` until it's fixed in the Gutenberg repo
* Enhancement: Bible versions are now grouped into option groups organized by language in the multiselect
* Enhancement: functional font-picker added to the General Styles in the gutenberg block options, which also works with Google Fonts API key and font previews
* Enhandement: add option for preferring Greek / Hebrew origin for those Bible texts that offer a choice
* Enhancement: highlight accented search results matched against non accented keywords
* Enhancement: allow for any kind of dash in formulation of the Bible citation query string
* This is a duplicate of 7.3, required by the new Github to SVN workflow...

= 7.3 =
* Fix: recent updates to the Block editor gave a fixed height to all select inputs, whether they had the `multiple` attribute or not, needed to override it for `select[multiple]` until it's fixed in the Gutenberg repo
* Enhancement: Bible versions are now grouped into option groups organized by language in the multiselect
* Enhancement: functional font-picker added to the General Styles in the gutenberg block options, which also works with Google Fonts API key and font previews
* Enhandement: add option for preferring Greek / Hebrew origin for those Bible texts that offer a choice
* Enhancement: highlight accented search results matched against non accented keywords
* Enhancement: allow for any kind of dash in formulation of the Bible citation query string

= 7.2 =
* Fix: styling of poetic verses in NABRE version
* Fix: error table not hidden to end user 

= 7.1 =
* Use `POST` requests for the ServerSideRender component if available (Gutenberg 8.8 plugin required)

= 7.0 =
* Compatibility with WordPress 5.5

= 6.9 =
* Fix regression in shortcode function: version attribute not working correctly

= 6.8 =
* Fix color picker icons that weren't showing
* Fix positioning of search button next to search input field on first load of gutenberg block

= 6.7 =
* Fix search for Bible verses to work with the latest updates to the BibleGet search endpoint
* Add filter and order functionality to the search results window
* Add possibility of inserting Bible verses from the search results into the Gutenberg block directly from the search results window

= 6.6 =
* Fix sanitization function which was failing in some cases

= 6.5 =
* Fix error message : Illegal string offset 'PARAGRAPHSTYLES_FONTFAMILY' in options.php
* Fix typo in PHP get_option function

= 6.4 =
* Ensure "version" attribute is preserved during transform bibleget shortcode to Bible quote block
* Ensure Bible versions set in settings will become default and stay such, even when Bible version is changed in the Bible quote block options

= 6.3 =
* Fix typo in PHP function

= 6.2 =
* Better type checks on saved options when building default options
* Ensure shortcodes will be rendered same as Gutenberg blocks

= 6.1 =
* Fix typo in PHP update_option function

= 6.0 =
* Ensure that default options are defined on activation

= 5.9 =
* Gutenberg block now has all possible options in the sidebar, which are in synchronized to Customizer options
* Customizer has better UI, even though it doesn't have all the layout options that the Gutenberg block has
* An update to the html output from the BibleGet server requests required an update to the plugin handling logic of the html structure
* Better handling both from the BibleGet endpoint and from the plugin for rendering of Bible book names in WP interface language when using non catholic versions with different book numbering

= 5.8 =
* once a traditional shortcode is transformed into a block shortcode, allow transforming the block shortcode into a 'Bible quote' block 

= 5.7 =
* better handling of bible quotes cache by prefixing the transients
* added option to flush bible quotes cache from settings page

= 5.6 =
* turn off PHP error reporting!

= 5.5 =
* Bugfix: fixed a cleanup error on removal of the plugin

= 5.4 =
* created Gutenberg block

= 5.3 =
* Cleaner interface for the Google Fonts API key and better handling of different scenarios with more control in the admin interface

= 5.2 =
* Small bugfix where a stray javascript debugging line was throwing an error
* Small fix to new html elements and their styling on the page

= 5.1 =
* verified compatibility with Wordpress 5.4
* Bugfix: uninstall was not taking into account the newer ajax requests and could have prevented the plugin from being uninstalled
* Updated translations

= 5.0 =
* verified compatibility with Wordpress 5.3.2
* added option for Google Fonts API key

= 4.9 =
* Bugfix: corrected evaluation of shortcode parameters for correct implementation of versions and popup functionality
* verified compatibility with Wordpress 4.9

= 4.8 =
* Enhancement: added "popup" parameter to shortcode, to allow hiding the contents of the bible quote and show it only on click in a popup

= 4.7 =
* Minor bugfix: the jQuery Fontselect dropdown was not always opening in correspondance with the last selected font
* Minor bugfix: the jQuery Fontselect plugin was not processing italic or bold styled fonts
* Bugfix: typo in a PHP variable was causing an error 

= 4.6 =
* Enhancement: freely modified and implemented the jQuery Fontselect plugin by Tom Moor with it's hardcoded list of Google WebFonts to accomodate both regular websafe fonts and google fonts 

= 4.5 =
* Enhancement: further check for incorrect server environments where a recent version of curl does not however have a correct cainfo path set with a certificate bundle
* Enhancement: font-family selection now previews the font itself in the dropdown

= 4.4 =
* Compatibility with Wordpress 4.8
* Minor bugfix: fixed defaults for Bible version indicator styling settings in customizer

= 4.3 =
* Enhancement: add newline before verse number of specific formatted poetic verses in the NABRE version
* Enhancement: add option in the Wordpress Customizer for styling the Version Indicator
* Enhancement: re-organize styling options in the customizer into subsections

= 4.2 =
* Added check for compatibility of curl and openssl version on each website's server with TLS v1.2 protocol for secure communications,
  also in the case of metadata updates when refreshing server data from the BibleGet server

= 4.1 =
* Added check for compatibility of curl and openssl version on each website's server with TLS v1.2 protocol for secure communications;
  if not compatible fall back to http request when fetching bible verses, otherwise https request to the BibleGet server will be made
* Added ajax spinner for better user feedback when renewing metadata from the BibleGet server

= 4.0 =
* Another bugfix, the fix that made the spacing better between verse number and verse text was also removing the specific formatting for the NABRE text 

= 3.9 =
* Remove leftover dependencies on external jquery-ui

= 3.8 =
* Fix Portuguese language translation after 3.6

= 3.7 =
* Fix main language translations after 3.6 overhaul (Italian, French, Spanish, German)

= 3.6 =
* Complete overhaul of the style settings to use the Wordpress customizer
* Fix bug that prevented the favourite versions option from being used when "versions" option not used in shortcode
* Change internal function names to be more specific, avoiding any possible conflicts with other plugins 
* Better rendering of spacing in Bible Book names and between verse numbers and verse text
* Update language files

= 3.5 =
* Fix possible vulnerability in the script that saves the custom css file

= 3.4 =
* Better error handling: server errors from the BibleGet server will only be shown in backend notifications, and will not be saved in any transients. (this update is thanks to user feedback from Mr. D.N., user feedback is very helpful!)

= 3.3 =
* Fix languages array's German translation

= 3.2 =
* Further enhancements on CSS styling, especially for the NABRE text
* Added a few more localized button images
* Small bugfix in url-encoding of parameters

= 3.1 =
* Further enhancements on CSS styling, especially for the NABRE text

= 3.0 =
* Updated for compatibility with Wordpress 4.3
* Added Greek translation thanks to a user contribution on the translation project website
* Added French and German translations using automatic translation tools with a minimum quality check (probably can be made better)
* Enhancement: cache query results locally for 24 hours using the Wordpress Transients API
* Bugfix: some code that was used for debugging in the testing process, and that created a debug file 'debug.txt', had not been commented out, and debug.txt file was ending up in the current theme folder (can be deleted if present!)
* A few enhancements on CSS styling, especially for the now released NABRE text  

= 2.9 =
* Updated for compatibility with latest Wordpress 4.2.2
* Fixed small bug in css file

= 2.8 =
* Added specific functionality for parsing NABRE text and applying NABRE specific styles

= 2.7 =
* Added Polish translation thanks to Ula Gnatowska <ula.gnatowska@gmail.com> [Community of the Beatitudes](http://beatitudini.it/ "community of the beatitudes")

= 2.6 =
* Minor bugfix undeclared variable on options page
* Added Serbian translation thanks to Ogi Djuraskovic <ognjend@firstsiteguide.com> [firstsiteguide](http://firstsiteguide.com "firstsiteguide") 

= 2.5 =
* Bugfix for older versions of PHP that require a third parameter in preg_match_all

= 2.4 =
* Bugfix for older versions of PHP that don't seem to work correctly with mb_substr
* Initialize default values for when options haven't been set yet

= 2.3 =
* Bugfix for versions of PHP < 5.4 that don't support short array syntax

= 2.2 =
* Bugfix for jquery-ui dependencies on certain Wordpress installations

= 2.1 =
* Fix missing images that weren't included correctly in 2.0 release

= 2.0 =
* Major version release
* Use the new engine of the BibleGet I/O service, which supports multiple versions, dynamic indexes, multiple languages both western and eastern
* Store locally the index information for the versions, for local integrity checks on the queries
* Better and more complete local integrity checks on the queries, using the index information for the versions and supporting both western and eastern languages
* Better and more complete interface for the settings page

= 1.5 =
* Compatible with Wordpress 4.0 "Benny"
* Added local checks for the validity and integrity of the queries
* Corrected a bug that created an error on preg_match_all for versions of PHP < 5.4
* Use the new and definitive domain for the BibleGet I/O service https://query.bibleget.io

= 1.4 =
* Corrected a bug that created an error when the server has safe_mode or open_basedir set (such as some servers with shared hosting)

= 1.3 =
* trying to figure out the update process...

= 1.2 =
* trying to figure out the update process...

= 1.1 =
* Corrected a bug that created an error when there is a space in the query

= 1.0 =
* Plugin created


== Upgrade Notice ==

= 8.3 =
Allow Google Fonts preview data to persist between plugin updates

= 8.2 =
Bugfix for controls in the Block editor which were losing focus as soon as a change was made

= 8.1 =
Bugfix for Font Select in Customizer

= 8.0 =
Bugfixes for Google Fonts previews and Bible quote popups

= 7.9 =
Fix newer parameters not working with the shortcode, and update Readme with info about these parameters

= 7.5 =
Version 7.5 brings all the latest functionality from the BibleGet API. Update today!

= 7.4 =
Fixes botched styling of the multiselect in the block editor after recent WordPress/Gutenberg updates, adds a few enhancements to the block editor options

= 7.3 =
Fixes botched styling of the multiselect in the block editor after recent WordPress/Gutenberg updates, adds a few enhancements to the block editor options

= 7.2 =
Better styling of poetic verses in NABRE version, fix for error table being shown to end user

= 7.1 =
Fixes some possible problems with the Bible quote block by changing the API method from GET to POST. Requires Gutenberg plugin v8.8

= 7.0 =
Compatibility with WordPress 5.5

= 6.9 =
Fixes regression in shortcode version attribute. Versions prior to 6.7 must update in order to maintain compatibility with the BibleGet search endpoint

= 6.8 =
Aesthetic fixes for icons and buttons. Versions prior to 6.7 must update in order to maintain compatibility with the BibleGet search endpoint

= 6.7 =
Must update in order to maintain compatibility with the BibleGet search endpoint

= 6.6 =
Versions prior to 5.9 must be updated to maintain compatibility with the BibleGet endpoint

= 6.5 =
Versions prior to 5.9 must be updated to maintain compatibility with the BibleGet endpoint

= 6.4 =
Versions prior to 5.9 must be updated to maintain compatibility with the BibleGet endpoint

= 6.3 =
Versions prior to 5.9 must be updated to maintain compatibility with the BibleGet endpoint

= 6.2 =
Versions prior to 5.9 must be updated to maintain compatibility with the BibleGet endpoint

= 6.1 =
Versions prior to 5.9 must be updated to maintain compatibility with the BibleGet endpoint

= 6.0 =
Versions prior to 5.9 must be updated to maintain compatibility with the BibleGet endpoint

= 5.9 =
Must update to maintain compatibility with the BibleGet endpoint

= 5.8 =
Versions prior to 5.1 must be updated. v5.4 adds a Gutenberg block

= 5.7 =
Versions prior to 5.1 must be updated. v5.4 adds a Gutenberg block

= 5.6 =
Versions prior to 5.1 must be updated. v5.4 adds a Gutenberg block

= 5.5 =
Versions prior to 5.1 must be updated. v5.4 adds a Gutenberg block

= 5.4 =
Versions prior to 5.1 must be updated. v5.4 adds a Gutenberg block

= 5.3 =
Versions prior to 5.1 must be updated. v5.3 brings a better interface and admin controls for the Google Fonts API

= 5.2 =
Versions prior to 3.6 must be updated. v5.2 verifies compatibility with Wordpress 5.4 and fixes a bug that was preventing a correct uninstallation of the plugin

= 5.1 =
Versions prior to 3.6 must be updated. v5.1 verifies compatibility with Wordpress 5.4 and fixes a bug that was preventing a correct uninstallation of the plugin

= 5.0 =
Versions prior to 3.6 must be updated. v5.0 verifies compatibility with Wordpress 5.3.2 and adds Google Fonts API option

= 4.9 =
Versions prior to 3.6 must be updated. v4.9 corrects evaluation of shortcode parameters for correct implementation of "popup" parameter functionality

= 4.8 =
Versions prior to 3.6 must be updated. v4.8 adds a parameter "popup" to the [bibleget] shortcode, to allow hiding the contents of the bible quote and show it only on click in a popup

= 4.7 =
Versions prior to 3.6 must be updated. v4.7 has a couple of minor bugfixes on the jQuery Fontselect plugin

= 4.6 =
Versions prior to 3.6 must be updated. v4.6 incorporates hard-coded list of Google WebFonts.

= 4.5 =
Versions prior to 3.6 must be updated, style settings now using Wordpress Customizer. 4.5 presents a couple of small enhancements from 4.4

= 4.4 =
Versions prior to 3.6 must be updated, style settings now using Wordpress Customizer. 4.4 presents compatibility with Wordpress 4.8

= 4.3 =
Versions prior to 3.6 must be updated, style settings now using Wordpress Customizer. 4.3 presents enhancements in text formatting and styling options

= 4.2 =
Versions prior to 3.6 must be updated, style settings now using Wordpress Customizer. 4.2 adds another ssl compatibility check.

= 4.1 =
Versions prior to 3.6 must be updated, style settings now using Wordpress Customizer. 4.1 adds ajax spinner and ssl compatibility check.

= 4.0 =
Complete overhaul porting the style settings from the Settings Page to the Wordpress Customizer since 3.6 plus bugfixes

= 3.9 =
Please update, complete overhaul of style settings now using Wordpress Customizer and other bugfixes

= 3.8 =
While 3.6 was a Major update with complete overhaul of style settings and other bugfixes, this update fixes some language translations

= 3.7 =
While 3.6 was a Major update with complete overhaul of style settings and other bugfixes, this update fixes some language translations

= 3.6 =
Major update with complete overhaul of style settings and other bugfixes, update is mandatory

= 3.5 =
This is a minor update with a bugfix for a possible vulnerability

= 3.4 =
Minor update with better error handling, errors from the bibleget server will only show in backend

= 3.3 =
Minor update with bugfix for incorrect entries in languages array for German language

= 3.2 =
Minor update with further CSS styling enhancements especially for the NABRE text plus small bugfix

= 3.1 =
Minor update from v3.0 with CSS styling enhancements especially for the NABRE text

= 3.0 =
Bugfixes (please read changelog), compatibility with WordPress 4.3, caching enhancements

= 2.9 =
Minor update for compatibility with WordPress 4.2.2

= 2.8 =
Added specific functionality for parsing NABRE text and applying NABRE specific styles.

= 2.7 =
Added Serbian and Polish translations

= 2.6 =
Minor bugfix from version 2.5, added Serbian translation

= 2.5 =
v2.0 is a major release which uses the new and upgraded BibleGet I/O API engine. Must update. (plus Bugfixes)

= 2.4 =
v2.0 is a major release which uses the new and upgraded BibleGet I/O API engine. Must update. (plus Bugfixes)

= 2.3 =
v2.0 is a major release which uses the new and upgraded BibleGet I/O API engine. Must update. (plus Bugfixes)

= 2.2 =
v2.0 is a major release which uses the new and upgraded BibleGet I/O API engine. Must update.

= 2.1 =
v2.0 is a major release which uses the new and upgraded BibleGet I/O API engine. Must update.

= 2.0 =
v2.0 is a major release which uses the new and upgraded BibleGet I/O API engine. Must update.

= 1.5 =
Compatibility with WordPress 4.0

= 1.4 =
Update for bugfixes (possible errors on servers that have `safe_mode` activated or the `open_basedir` directive set)

= 1.3 =

= 1.2 =

= 1.1 =
Update for bugfixes (errors with whitespaces)

= 1.0 =
Inital release, not fully tested
