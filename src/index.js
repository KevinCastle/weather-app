import React from 'react';
import { render } from 'react-dom';
import AppRouter from './router/AppRouter';
import 'normalize.css/normalize.css'
import './styles/Styles.scss';


render(<AppRouter />, document.getElementById('root'));