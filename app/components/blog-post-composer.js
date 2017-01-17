import Ember from 'ember';

export default Ember.Component.extend({
  title: '',
  date: '',
  content: '',

  isDisabled: true,

  actions: {
    submitForm() {
      const result = this.attrs.savePost({
        title: this.get('title'),
        date: this.get('date'),
        content: this.get('content'),
      });

      this.set('title', '');
      this.set('date', '');
      this.set('content', '');
    }
  }
});
