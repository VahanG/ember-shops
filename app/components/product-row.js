import Ember from 'ember';

export default Ember.Component.extend({

    editable:false,
    editBtnText:'Edit',
    init() {
      this._super(...arguments);
      this.editable = false;
      console.log(this.row);
      this.editing = Object.assign({},this.row);
      this.editBtnText ="EDIT";
      //this.errors = [];
    },



    makeEditable() {
      console.log(this.editable);
      this.set('editable', true);
      this.set('editBtnText','save');
    },
    saveChanges(v){
      console.log(v);
      this.set('editBtnText','Edit');

      this.set('editable', false);
      this.set('row.price',this.editing.price);
      this.set('row.name',this.editing.name);
      this.set('row.qty',this.editing.qty);

    },
    actions:{
        cancelEdit(){
          //this.editing = Object.assign({},this.row);
          this.set('editing',Object.assign({},this.get('row'))) ;
          this.set('editable', false);
          this.set('editBtnText','Edit');
        },
        btnClick(value){
          this.trigger('productEdit');

          if(this.editable){
              this.saveChanges(this.row);
          }else{
              this.makeEditable();
          }
        }
    },
});
