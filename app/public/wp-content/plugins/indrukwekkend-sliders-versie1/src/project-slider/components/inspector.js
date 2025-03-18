// Internationalization
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

// import Block component
const { InspectorControls, Fragment } = wp.blockEditor;

// import Inspector components
const { QueryControls, PanelBody,  RangeControl, ToggleControl, RadioControl, TextControl } = wp.components;

/**
 * Module Constants
 */
const CATEGORIES_LIST_QUERY = {
	per_page: -1,
};

export default class Inspector extends Component {

    render() {
        const { attributes, 
                setAttributes, 
                postTypes
        } = this.props;

        const { categoriesList } = this.state;

        const { 
            displayButtonContentRadio,
            displayPostPaginateRadio,
            displayPostContent,
            displayCategories, // dit is voor de frontend navigatie
            displayThumbnail, 
            displayPijltje,
            textLink,
            displayIntro,
            displaySoort,
            displayOpdrachtgever,
            displayRealisatie,
            displayLocatie, 
            displayFrontend, 
			columns,
			autoScroll,
			scrollSpeed,
            slidesToScroll, 
			order, 
			orderBy, 
			categories, // dit is de gekozen categorie voor de lijst met pr.
            postLayout,
			postsToShow, 
			excerptLength 
		} = attributes;

        // var postTypesFiltered = postTypes.filter(function (pilot) {
        //     return pilot.slug === "post";
        // });

        const pagineringLabel = (postLayout != 'slides') ? 'Paginering' : 'Bullets (slider navigatie)';

        return (
            <InspectorControls key="inspector">
                <PanelBody title={ __( 'Post Content Settings' ) } >
                    <ToggleControl
                        label={ __( 'Thumbnail' ) }
                        checked={ displayThumbnail }
                        onChange={ ( value ) => setAttributes( { displayThumbnail: value } ) }
                    />
                    <ToggleControl
                        label={ __( 'Post Content' ) }
                        checked={ displayPostContent }
                        onChange={ ( value ) => setAttributes( { displayPostContent: value } ) }
                    />
                
                 
                    { displayPostContent &&
                        <RangeControl
                            label={ __( 'Max number of words in excerpt' ) }
                            value={ excerptLength }
                            onChange={ ( value ) => setAttributes( { excerptLength: value } ) }
                            min={ 10 }
                            max={ 100 }
                        />
                    }
                    <ToggleControl
                        label={ __( 'Vervolg link tonen' ) }
                        checked={ displayPijltje }
                        onChange={ ( value ) => setAttributes( { displayPijltje: value } ) }
                    />
                    { displayPijltje && 
                    <TextControl
                        label={ __( 'Vervolg link tekst' ) }
                        value={ textLink }
                        onChange={ ( value ) => setAttributes( {textLink: value}  ) }
                    />
                    }
                    <ToggleControl
                        label={ __( 'Diplay Meta Content' ) }
                        checked={ displayFrontend }
                        onChange={ ( value ) => setAttributes( { displayFrontend: value } ) }
                    />
                </PanelBody>

                { displayFrontend &&
                    <PanelBody title={__("Meta Instellingen")}>
                            <ToggleControl
                                label={ __( 'Toon Soort' ) }
                                checked={ displaySoort }
                                onChange={ ( value ) => setAttributes( { displaySoort: value } ) }
                            />
                            <ToggleControl
                                label={ __( 'Intro Tekst' ) }
                                checked={ displayIntro }
                                onChange={ ( value ) => setAttributes( { displayIntro: value } ) }
                            />
                            <ToggleControl
                                label={ __( 'Opdrachtgever' ) }
                                checked={ displayOpdrachtgever }
                                onChange={ ( value ) => setAttributes( { displayOpdrachtgever: value } ) }
                            />
                            <ToggleControl
                                label={ __( 'Realisatie (jaar)' ) }
                                checked={ displayRealisatie }
                                onChange={ ( value ) => setAttributes( { displayRealisatie: value } ) }
                            />
                            <ToggleControl
                                label={ __( 'Locatie' ) }
                                checked={ displayLocatie }
                                onChange={ ( value ) => setAttributes( { displayLocatie: value } ) }
                            />
   
                    
                    </PanelBody>
                }

                <PanelBody title={__("Navigatie instellingen")} initialOpen={ false } >
                    { postLayout != 'slides' &&
                        <ToggleControl
                            label={ __( 'Categorieen filter' ) }
                            checked={ displayCategories }
                            onChange={ ( value ) => setAttributes( { displayCategories: value } ) }
                        />
                    }

                    <RadioControl
                        label={ __( 'Show:' ) }
                        selected={ displayPostPaginateRadio }
                        
                        options={ [
                            { label: pagineringLabel, value: 'paginate' },
                            { label: 'Knop', value: 'button' },
                            { label: 'Niets', value: '' },
                        ] }
                        onChange={ ( value ) => setAttributes( { displayPostPaginateRadio: value } ) }
                    />

                    { displayPostPaginateRadio === 'button' && 
                        <RadioControl
                            label={ __( 'Show:' ) }
                            selected={ displayButtonContentRadio }
                            options={ [
                                { label: __( 'Standaard Knop' ), value: '' },
                                {
                                    label: __( 'Outline' ), value: 'is-style-outline',
                                },
                            ] }
                            onChange={ ( value ) =>
                                setAttributes( {
                                    displayButtonContentRadio: value,
                                } )
                            }
                        />
                    }
                </PanelBody>

                <PanelBody title={ __( 'Sorting and Filtering' ) } initialOpen={ false } >
                {console.log(categoriesList)}
                    <QueryControls
                        
                        { ...{ order, orderBy } }
                        numberOfItems={ postsToShow }
                        categoriesList={ categoriesList ? categoriesList : [] }						
                        selectedCategoryId={ categories }
                        onCategoryChange={ ( value ) => setAttributes( {
                            categories: '' !== value ? value : undefined
                        }) }
                        onOrderChange={ ( value ) => setAttributes( { order: value } ) }
                        onOrderByChange={ ( value ) => setAttributes( { orderBy: value } ) }
                        
                        onNumberOfItemsChange={ ( value ) => setAttributes( { postsToShow: value } ) }
                    />

                    { postLayout === 'grid' &&
                        <RangeControl
                                label={__('Number of columns')}
                                value={columns}
                                onChange={(value) => setAttributes({columns: value})}
                                min={1}
                                max={6}
                        />
                    }
                </PanelBody>

                { postLayout === 'slides' &&
                    <PanelBody title={ __( 'Slider settings' ) } initialOpen={false} >    

                        <ToggleControl
                            label={ __( 'Automatisch scrollen' ) }
                            checked={ autoScroll }
                            onChange={ ( value ) => setAttributes( { autoScroll: value } ) }
                        />

                        <RangeControl
                                label={__('Number of columns')}
                                value={columns}
                                onChange={(value) => setAttributes({columns: value})}
                                min={1}
                                max={6}
                        />
                        
                        <RangeControl
                                label={__('Aantal scrollen')}
                                value={slidesToScroll}
                                onChange={(value) => setAttributes({slidesToScroll: value})}
                                min={1}
                                max={6}
                        />

                        <RangeControl
                            label={ __( 'Scroll Snelheid (Ms)' ) }
                            value={ scrollSpeed }
                            onChange={ ( value ) => setAttributes( { scrollSpeed: value } ) }
                            min={ 500 }
                            max={ 5000 }
                            step={ 100 }
                        />
                    
                    </PanelBody>
                }
            </InspectorControls>
        ); 
    } 
}