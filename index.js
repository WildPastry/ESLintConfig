module.exports = {
  globals: {
    MyGlobal: true,
  },

  rules: {
    semi: [2, 'always'],
  },

  printMsg: function () {
    console.log('This is a message from the demo package');
  },
};
