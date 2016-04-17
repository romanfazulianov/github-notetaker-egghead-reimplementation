var React = require('react');
var ReactDom = require('react-dom');
var Router = require('react-router').Router;
var hashHistory = require('react-router').hashHistory;
var routes = require('./config/routes');

ReactDom.render(<Router  history={hashHistory}>{routes}</Router>,
    document.getElementById('app'));
