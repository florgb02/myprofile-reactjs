var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Main = require('./components/main');
var About = require('./components/about');
var Portfolio = require('./components/portfolio');

module.exports = (
	<Router>
		<Route path="/" component={Main}>
			<Route path="about" component={About} />
			<Route path="portfolio" component={Portfolio} />
		</Route>
	</Router>
);