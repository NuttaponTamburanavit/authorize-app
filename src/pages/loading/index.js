import React from 'react';
import { Icon } from 'antd';

const Loading = () => {
  return (
    <div className="container" style={{ flexDirection: 'column' }}>
      <Icon type="loading-3-quarters" spin 
        style={{ fontSize: 35 }}
      />
      <span style={{ marginTop: 20 }}>
        Loading
      </span>
    </div>
  );
}

export default Loading;