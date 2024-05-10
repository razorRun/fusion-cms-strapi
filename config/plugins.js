module.exports = {
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 25,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
};
