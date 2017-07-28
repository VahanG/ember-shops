import Ember from 'ember';
import _find from 'lodash/find';


export default Ember.Controller.extend({
  validateName (name){
      console.log(this.model);
      if(this.model.findBy('name',name)){
        return this.validateName(name+1);
      }else {
        return name;
      }
  },
    actions:{
      add(){
          let shop = {name:this.validateName('name')}
          this.get('store').createRecord('shop',shop)
      },
      remove(v){
        console.log(v);
        v.deleteRecord();
//         this.get('store').findRecord('shop', 2, { backgroundReload: false }).then(function(post) {
//   post.destroyRecord(); // => DELETE to /posts/2
// });
      }
    }
});
