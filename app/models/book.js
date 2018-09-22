import DS from 'ember-data';

export default DS.Model.extend({
    name:DS.attr("string"),
    author:DS.belongsTo("author"),
    genre:DS.attr("string"),
    publisher:DS.attr("string"),
    publication_date:DS.attr("date"),
    language:DS.attr("string")
});
