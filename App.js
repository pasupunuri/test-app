import React from 'react';
import { StatusBar } from 'react-native';
import styled from '@emotion/native';







const App = () => {


  return (


        <SafeArea>
          <StatusBar barStyle='light-content' />
          <Text> Test App</Text>
        </SafeArea>


  );
};

const SafeArea = styled.SafeAreaView`
  background-color: #262827;
  flex: 1;
`

export default App;
