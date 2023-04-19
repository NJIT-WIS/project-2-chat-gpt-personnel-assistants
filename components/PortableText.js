import React from 'react';
import { PortableText } from '@portabletext/react';

// Define your custom serializers
import styles from './PostBody.module.css'
const PortableTextComponent = ({content }) => {
    return (
        <div className={`mx-auto max-w-2xl ${styles.portableText}`}>
          <PortableText value={content} />
        </div>
      )
};

export default PortableTextComponent;
