import { GlobalStyles } from '@bigcommerce/big-design';
import { theme } from '@bigcommerce/big-design-theme';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AlertsManager, AppGlobalStyles } from './components';
import { queryClient } from './queryClient';
import { TodosPage } from './TodosPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppGlobalStyles />
      <AlertsManager />

      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename="/">
          <Routes>
            <Route element={<TodosPage />} index />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img alt="logo" className="App-logo" src={logo} />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         rel="noopener noreferrer"
  //         target="_blank"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
