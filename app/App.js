import React from 'react';
import ReactDom from 'react-dom';
import {Router} from 'react-router';
import {browserHistory} from 'react-router';
import routes from './config/routes';

ReactDom.render(<Router history={browserHistory}>{routes}</Router>,
    document.getElementById('app'));
