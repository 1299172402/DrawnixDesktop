import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Capacitor } from '@capacitor/core';
import App from './app/app';

// 在原生平台上初始化
if (Capacitor.isNativePlatform()) {
  console.log('Running on native platform:', Capacitor.getPlatform());
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
