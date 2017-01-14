import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  rawTitle: null,
  rawDate: null,
  rawContent: null,

  title: Ember.computed.readOnly('rawTitle'),
  date: Ember.computed('rawDate', function() {
    return moment(this.get('rawDate'), "YYYY-MM-DD").format('LL');
  })
});
