import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
      add(){
          console.log(this);
          this.get('store').createRecord('shop',{title:"dfs"})
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
