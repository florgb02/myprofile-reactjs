var React = require('react');
var RightContent = require('./right_section');


module.exports = React.createClass({
	getInitialState: function(){
		return {
			 
		}
	},
	render: function(){
		return <div className="col-xs-12 rm-padding">
			<RightContent />
			
			<div className="col-xs-12 col-lg-8 right-container">
			{ this.getDescription() }
			{ this.getPortfolioInfo() }
			</div>
		</div>
	}, 
	getDescription: function(){

		return <div className="col-xs-12">
			<p> List of websites!
			</p>
		</div>
	},
	getPortfolioInfo: function(){
		console.log(this.props.projects);
		if(!this.props.projects){
			return <h4>
				No Projects Added.
			</h4>
		}else{
			var list = this.props.projects.map(function(projectsProps){
		      console.log(projectsProps);
		    });
			

		}
		
	},
	renderListProjects: function(){
		
		/*return <div className="col-xs-12">
			<div className="row">
			  <div className="col-sm-6 col-md-4">
			    <div className="thumbnail">
			      <img src="/img/default_post_img.png" alt="..." />
			      <div className="caption">
			        <h3>Thumbnail label</h3>
			        <p>
			        	<a href="#" className="btn btn-primary" role="button">One</a> 
			        </p>
			      </div>
			    </div>
			  </div>
			</div>
		</div>*/
	}
});