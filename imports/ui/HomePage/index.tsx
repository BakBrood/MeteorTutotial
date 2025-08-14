import { Typography } from 'antd';
import React from 'react';

interface HomePageProps {}

const HomePage: React.FC <HomePageProps> = () => {
   return (
      <>
         <Typography.Title level={2}>Hjem</Typography.Title>
      </>
   )
}

export default HomePage;