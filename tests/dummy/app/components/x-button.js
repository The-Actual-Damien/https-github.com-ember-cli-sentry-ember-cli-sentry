import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({

  tagName: 'button',

  click() {
    this.get('raven').captureMessage('Message captured from test component');

    try {
      this.get('raven').captureException(new Error('Message captured from test component'));
    } catch (error) {
      console.log(error.message);
    }

    this.attrs.afterClick('x-button clicked');
  }
});