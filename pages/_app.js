import '../styles/globals.css';
import Head from 'next/head';
import users from '../reducers/users'

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
 reducer: {users },
});

function App({ Component, pageProps }) {
 return (
   <Provider store={store}>
     <Head>
       <title>HACKATWEET</title>
     </Head>
     <Component {...pageProps} />
   </Provider>
 );
}

export default App;




// import '../styles/globals.css';
// import Head from 'next/head';

// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import { PersistGate } from 'redux-persist/integration/react';
// import storage from 'redux-persist/lib/storage';
// import { combineReducers, configureStore } from '@reduxjs/toolkit';


// const reducers = combineReducers({ });
   
// const persistConfig = { key: 'hackatweet', storage };

// const store = configureStore({
//     reducer: persistReducer(persistConfig, reducers),
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
//    });

// const persistor = persistStore(store);

// function App({ Component, pageProps }) {
//     return (
//       <Provider store={store}>
//         <PersistGate persistor={persistor}>
//         <Head>
//           <title>Hackatweet</title>
//         </Head>
//         <Header />
//         <Component {...pageProps} />
//         </PersistGate>
//       </Provider>
//     );
//   }
  
//   export default App;