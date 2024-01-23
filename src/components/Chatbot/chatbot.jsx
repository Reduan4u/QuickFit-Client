import React from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

const chatbot = () => {
    return (
        <FacebookProvider appId="123456789" chatSupport>
        <CustomChat pageId="123456789" minimized={false}/>
      </FacebookProvider>    
    );
};

export default chatbot;