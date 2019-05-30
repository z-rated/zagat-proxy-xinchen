import React from 'react';
import ReactDOM from 'react-dom';
import GoogleReviews from '../../zagat-google-reviews/client/src/components/app';
import Gallery from '../../zagat-photos-service/client/components/Gallery';
import Info from '../../zagat-restaurant-info/client/components/App';
import Search from '../../zagat-search/client/Search';
import Reviews from '../../zagat-reviews/client/src/app';

ReactDOM.render(<Search />, document.getElementById('search'));
ReactDOM.render(<Gallery />, document.getElementById('gallery'));
ReactDOM.render(<Reviews />, document.getElementById('reviews'));
ReactDOM.render(<Info />, document.getElementById('info'));
ReactDOM.render(<GoogleReviews />, document.getElementById('googlereviews'));