import React, { useState, useCallback, Component } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

export default class FrontendGallery extends Component {
  state = {
    currentImage: 0,
    viewerIsOpen: false
  };

  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      viewerIsOpen: true
    });
  };
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      viewerIsOpen: false
    });
  };
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  };
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  };
  
  render() {
    let currentImage = this.state.currentImage;
    let viewerIsOpen = this.state.viewerIsOpen;

    const photos = this.props.photos;

    return (
      <div>
        <Gallery
          photos={photos}
          direction={this.props.direction}
          margin = {this.props.margin}
          onClick={this.openLightbox}
        />

        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={this.closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>

        {/* {this.props.islightboxenabled == "true" && (
          <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={this.props.photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
        )} */}
      </div>
    );
  }
}
