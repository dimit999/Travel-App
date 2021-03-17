import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { connect } from 'react-redux';

const Slider = ({currentCountry}) => {
  const images = new Array(6).fill('').map((image, index) => ({
    original: `../../../../assets/countries/${currentCountry}/photo/0${index + 1}.jpg`,
    thumbnail: `../../../../assets/countries/${currentCountry}/photo/0${index + 1}.jpg`,
  }))

  return <ImageGallery
    items={images}
    showBullets={true}
    showIndex={true}
    autoPlay={true}
    slideOnThumbnailOver={true}
  />;
}

const mapStateToProps = state => ({
  currentCountry: state.switchCountryReducer.country
})

export default connect(mapStateToProps, null)(Slider);
