"use client"
import React from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

const Chatbot = () => {
  return (
    <FacebookProvider appId="922715902413711" chatSupport>
      <CustomChat pageId="119677734443488" minimized={true} />
    </FacebookProvider>
  );
};

export default Chatbot;