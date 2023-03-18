import ReactDOM from 'react-dom/client';
import { GlobalStateWrapper } from './context/appContext';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './assets/reset.css'
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <GlobalStateWrapper>
        <App />
      </GlobalStateWrapper>
    </BrowserRouter>
  // </React.StrictMode>
);

