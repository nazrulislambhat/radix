import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './output.css';
import { Theme, ThemePanel } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import Users from './components/Users.jsx';
createRoot(document.getElementById('root')).render(
  <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
    <Users />
  </Theme>
);
