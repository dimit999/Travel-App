import React from 'react';
import { Player } from 'video-react';
import { connect } from 'react-redux';

import "video-react/dist/video-react.css";

const VideoPlayer = ({currentCountry}) => {
  return (
    <Player
      playsInline
      poster="/assets/poster.png"
      src={`../../../../assets/countries/${currentCountry}/video/video.mp4`}
    />
  );
}

const mapStateToProps = state => ({
  currentCountry: state.switchCountryReducer.country
})

export default connect(mapStateToProps, null)(VideoPlayer);
