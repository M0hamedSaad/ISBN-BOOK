import React from "react";
import Navigator from "./navigation/Navigator";
import { QueryClient, QueryClientProvider } from "react-query";
import { StatusBar } from 'react-native';
console.disableYellowBox = true;

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigator />
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
    </QueryClientProvider>
  );
};
export default App;
