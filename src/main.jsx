import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Theme, ThemePanel } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

createRoot(document.getElementById('root')).render(
  <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
    <App />
    <ThemePanel />
  </Theme>
);
