import React from 'react';
import PropTypes from 'prop-types';
import AliceCarousel from 'react-alice-carousel'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
const ProjectDetails = props => {
    const handleOnDragStart = (e) => e.preventDefault()

    const slideImages = [
        'images/portfolio/smartbin-project.png',
        'images/portfolio/smartwaste2.png',
        'images/portfolio/smartwaste3.png',
        'images/portfolio/smartwaste4.png',
        'images/portfolio/smartwaste5.png',
    ]
    console.log(props)
    const projectGallery = () => {
        return (
            <Slide>
                {
                    props.project.image.map((image) => {
                        return (<div className="each-slide">
                        <div style={{'backgroundImage': `url(images/portfolio/${image})`}}>
                        </div>
                      </div>)
                    })
                }
                {/* <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div> */}
            </Slide>
        )
        
    }
    return (
        
        <React.Fragment>
          <div className="project-description">
            <h1>{props.project.title}</h1>
    <p>{props.project.category}</p>
          </div>
          {props.project.image.length > 0? projectGallery() : ''}
            {/* <AliceCarousel mouseTrackingEnabled>
      <img src="images/portfolio/ozfooty-project.png" onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src="/mages/portfolio/smartbin-project.png" onDragStart={handleOnDragStart} className="yours-custom-class" />
    </AliceCarousel> */}
        </React.Fragment>
    );
};

ProjectDetails.propTypes = {
    
};

export default ProjectDetails;