import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    showAddModal:false,
    genres:['Action','Adventure','Satire','Romance'],
    
    changeBooks:computed('genreChange',function(){

    }),
    init(){

    },   
    actions:{
        addBook(){
            this.set('showAddModal',true);
            this.store.createRecord('book',{
                name:"Aswath",
                genre:"Satire"
            }).save();
        },
        filterBooks(genre)
        {
            this.set('displayBooks',[]);
            this.set('displayBooks',[...this.get('displayBooks'),this.get('model').filterBy('genre',genre.selected)]);
            this.set('displayBooks',this.get('displayBooks')[0]);
        }
    }
});
