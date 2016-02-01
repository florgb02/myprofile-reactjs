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
			
			<div className="col-xs-12 col-lg-9 right-container">
			{ this.getDescription() }
			<div className="row">
				{ this.getPortfolioInfo() }
			</div>
			</div>
		</div>
	}, 
	getDescription: function(){

		return <div className="col-xs-12">
			<p> List of websites!
			</p>
		</div>
	},
	getProjectList: function(){
		return [
		{
			'title' : 'PuckerMob',
			'url' : 'http://www.puckermob.com',
			'image_name' : 'puckermob.png'
		},
		{
			'title' : 'PuckerMom',
			'url' : 'http://www.puckermom.com',
			'image_name' : 'puckermom.png'
		},
		{
			'title' : 'SimpleDish',
			'url' : 'http://www.simpledish.com',
			'image_name' : 'simpledish.png'
		},
		{
			'title' : 'FashionBuzz',
			'url' : 'http://www.fashionbuzz.com/',
			'image_name' : 'Fashion_Buzz_318px.png'
		},
		
		{
			'title' : 'FitSavvy',
			'url' : 'http://www.fitsavvy.com/',
			'image_name' : 'fitsavvylogo.png'
		},
		{
			'title' : 'PinchOfSugar',
			'url' : 'http://www.pinchofsugar.com/',
			'image_name' : 'pinch_of_sugar_logo.png'
		},
		{
			'title' : 'SpaguettyMob',
			'url' : 'http://www.spaghettimob.com/',
			'image_name' : 'spaguetti.png'
		},
		{
			'title' : 'SequelMediaInternational',
			'url' : 'http://www.sequelmediainternational.com/',
			'image_name' : 'sequel.png'
		},
		
		{
			'title' : 'Vivastreet',
			'url' : 'http://www.vivastreet.com/',
			'image_name' : 'vivastreet.png'
		},
		{
			'title' : 'EasyRoommate',
			'url' : 'http://www.easyroommate.com/',
			'image_name' : 'easyroommate.png'
		},

		];
	},
	getPortfolioInfo: function(){
			var projects = this.getProjectList();
			
			var list = projects.map(function(item){
		      return (
					  <div className="col-sm-6 col-md-4 clear thumbnail-wrapper">
					    <div className="thumbnail">
					    <a href={item.url} target="_blank">
					      <img src={"/img/"+item.image_name} alt="..." className="image-settings"/>
					      </a>
					    </div>
					  </div>				
		     	)
			});

		    return list;
		
		
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