/**
 * Module dependencies.
 */
var should = require('chai').should();
var moment = require('moment');
try {
  require('../lib')(moment);
} catch (e){
  require('moment-weekdays')(moment);
}

describe('moment', function(){

  beforeEach(function(){
    this.date = moment('2014-08-09T01:00:00.000Z');
  });

  describe('weekdays#add', function(){
    
    it('should add weekdays on the same week', function(){
      this.date.weekdays('Sunday').add(1);
      this.date.toISOString().should.equal('2014-08-10T01:00:00.000Z');
    });

    it('should add weekdays on next weeks', function(){
      this.date.weekdays('Sunday').add(2);
      this.date.toISOString().should.equal('2014-08-17T01:00:00.000Z');
    });

    it('should add weekdays if same weekday', function(){

      this.date.weekdays('Saturday').add(1);
      this.date.toISOString().should.equal('2014-08-16T01:00:00.000Z');

      this.date.weekdays('Saturday').add(2);
      this.date.toISOString().should.equal('2014-08-30T01:00:00.000Z');

    });

    it('should work if weekday is before', function(){

      this.date.weekdays('Thurday').add(1);
      this.date.toISOString().should.equal('2014-08-14T01:00:00.000Z');

      this.date.weekdays(4, 1);
      this.date.toISOString().should.equal('2014-08-21T01:00:00.000Z');

      this.date.weekdays(4).add(1);
      this.date.toISOString().should.equal('2014-08-28T01:00:00.000Z');

    });

  });

  describe('weekdays#sub', function(){

    it('should subtract weekdays on the same week', function(){
      this.date.weekdays('Wednesday').sub(1);
      this.date.toISOString().should.equal('2014-08-06T01:00:00.000Z');
    });

    it('should subtract weekdays if same weekday', function(){
      this.date.weekdays('Saturday').sub(1);
      this.date.toISOString().should.equal('2014-08-02T01:00:00.000Z');
    });

    it('should work if weekday is after', function(){

      this.date.weekdays('Sunday').sub(1);
      this.date.toISOString().should.equal('2014-08-03T01:00:00.000Z');

      this.date.weekdays('Sunday').sub(1);
      this.date.toISOString().should.equal('2014-07-27T01:00:00.000Z');

      this.date.weekdays('Sunday').sub(2);
      this.date.toISOString().should.equal('2014-07-13T01:00:00.000Z');

    });

  });

});