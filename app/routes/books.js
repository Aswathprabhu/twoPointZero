import Route from '@ember/routing/route';

export default Route.extend({
    model()
    {
        return this.store.findAll('book').then((res)=>{
             
             return res.content;
        });
    },
    setupController:function(controller,model){
    var tempModel= model.map((res)=>{
        
         return res._data;
    });
    
    controller.set('model',tempModel);
    controller.set('displayBooks',tempModel);
    console.log(tempModel);
    }
});
