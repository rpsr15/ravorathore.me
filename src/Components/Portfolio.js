import React, { Component } from 'react';
import {navigate} from '@reach/router'
import ProjectDetails from './ProjectDetails'
class Portfolio extends Component {

  state ={
    selectedProject : 0,
    projects : []
  }
  componentWillReceiveProps(props)
  {
    this.setState({
      projects: props.data.projects
    })

  }

  updateCurrentProject(index)
  {
    this.setState({
      selectedProject: index
    })
  }
  render() {
   if(this.props.data === undefined)
   {
     return(<p>loading</p>)
   }
    if (this.props.data) {
      
      var projects = this.props.data.projects.map(function (projects,index) {
        let className = this.state.selectedProject === index? "overlay selected":"overlay"
        var projectImage = 'images/portfolio/' + projects.image[0];
        
        return (
          <div key={projects.title} className="columns portfolio-item" onClick={()=>{
            this.updateCurrentProject(index)
          }}>
            <div className="item-wrap">
             
                <img style={{height:'100%',width:'100%', objectFit:'cover'}} alt={projects.title} src={projectImage} />
                <div className={className}>
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
             
            </div>
          </div>
        )
      },this)
    }
    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
            <ProjectDetails project = {this.props.data.projects[this.state.selectedProject]} />
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
