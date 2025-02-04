import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const el = document.getElementById('root') as HTMLDivElement;
const root = ReactDOM.createRoot(el);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
