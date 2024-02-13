// Import Vue, React, and ReactDOM
import { defineComponent, onMounted, onBeforeUnmount, h } from 'vue';
import React from 'react';
import ReactDOM from 'react-dom';
// Import the React component you want to use
import Capsule, { Button, Environment } from '@usecapsule/web-sdk';

const appName = 'Vue Example';

export default defineComponent({
  name: 'ReactInVue',
  props: {
    // Define any props your React component needs
    appName,
    capsule: new Capsule(Environment.DEVELOPMENT, 'YOUR_APP_ID'),
  },
  setup(props) {
    // Setup function for using Composition API features

    // Mount React component on component mount
    onMounted(() => {
      console.log('hello world');
      console.log(props);
      const element = document.getElementById('react-root');
      console.log(element);
      ReactDOM.render(
        <h1>Hello planet</h1>,
        // <Button {...props} />,
        // In Vue 3, the instance's DOM tree is mounted on `ctx.$el`
        // But since setup doesn't provide direct access to `this`, we need a different approach to access the root element
        element // See note below about this ID
      );
    });

    // // Clean up on component unmount
    // onBeforeUnmount(() => {
    //   ReactDOM.unmountComponentAtNode(document.getElementById('react-root')); // Same note as above
    // });

    // return () => h(<Button {...props} />, 'id'); // Render the React component
    return () => h('div', { id: 'react-root' }); // Render a div that will contain the React component
  },
});