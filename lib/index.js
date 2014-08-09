/**
 * Expose.
 */
module.exports = function(moment){
  moment.fn.weekdays = function(){
    var ret = new Plugin(moment, this);
    return ret.weekdays.apply(ret, arguments);
  }
};


/**
 * Apply plugin to `moment`.
 *
 * @param {Object} mod - moment module
 * @param {Object} moment - moment instance
 * @constructor
 */
function Plugin(mod, moment){
  this._mod = mod;
  this._moment = moment;
}


/**
 * Set `weekday`.
 * 
 * @param  {String} weekday   - day of week
 * @param  {Number} magnitude
 * @return {Plugin}           - for chaining
 */
Plugin.prototype.weekdays = function(weekday, magnitude) {
  this._weekday = weekday;

  var localeData = this._mod.localeData();

  if (typeof(this._weekday) !== 'number'){
    this._weekday = localeData.weekdaysParse(this._weekday);
  }

  if (magnitude){
    this._magnitude = magnitude;
    this.manipulate();
  }

  return this;
};


/**
 * Set `magnitude` and manipulate date.
 * 
 * @param  {Number} magnitude - magnitude
 * @return {Plugin}           - for chaining
 */
Plugin.prototype.add = function(magnitude) {
  this._magnitude = magnitude;
  this.manipulate();
  return this;
};


/**
 * Set `magnitude` and manipulate date.
 * 
 * @param  {Number} magnitude - magnitude
 * @return {Plugin}           - for chaining
 */
Plugin.prototype.sub =
Plugin.prototype.subtract = function(magnitude) {
  this._magnitude = 0 - magnitude;
  this.manipulate();
  return this;
};


/**
 * Update moment instance.
 * 
 * @return {Plugin} - for chaining
 */
Plugin.prototype.manipulate = function() {
  var weekday = this._moment.isoWeekday();
  this._moment.isoWeekday(this._weekday);
  if (this._magnitude > 0 && weekday < this._weekday){
    --this._magnitude;
  }
  if (this._magnitude < 0 && weekday !== this._weekday){
    ++this._magnitude;
  }
  this._moment.add((this._magnitude * 7), 'days');
  return this;
};
