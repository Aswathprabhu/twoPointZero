import Component from '@ember/component';


export default Component.extend({
    didRender()
    {
        this._super(...arguments);
        if(this.get('showModal'))
        $('#exampleModalCenter').modal('show');
        this.set('showModal',false);
    }
});
