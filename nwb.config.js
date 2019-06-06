module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'react-popup-message',
      externals: {
        react: 'React'
      }
    }
  }
}
