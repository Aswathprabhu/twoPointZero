import DS from 'ember-data';

export default DS.Model.extend({
    name:DS.attr("string"),
    books:DS.hasMany("book"),
    country:DS.attr("string"),
    awards:DS.attr("string")
});
