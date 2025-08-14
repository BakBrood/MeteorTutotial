import { ConfigProvider, Switch, theme} from 'antd';
import React from 'react';
import { publicRoutes } from '../utils/constants/routes';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
      }}
      >
      Hello World
        <Switch>
          {Object.values(publicRoutes).map(route => (
            <Route>

            </Route>
        ))}
        </Switch>
      </ConfigProvider>
    </>
  )
}

export default App;