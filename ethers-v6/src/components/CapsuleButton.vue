<template>
  <div>
    <h1>I'm a Vue component</h1>
    <my-react-component :appName="appName" />
  </div>
</template>

<script>
  import Capsule, { Button, Environment } from '@usecapsule/web-sdk'
  const BETA_KEY = 'd0b61c2c8865aaa2fb12886651627271';
  const capsule = new Capsule(Environment.DEVELOPMENT, BETA_KEY);

  export default {
    computed: {
      data () {
        appName: 'Vue Example',
      },
    },
    components: { 'my-react-component': Button },
  }
</script>
