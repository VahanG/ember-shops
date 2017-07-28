import Ember from 'ember';

export default Ember.Component.extend({

    editable:false,
    editBtnText:'Edit',
    init() {
      this._super(...arguments);
      this.editable = false;
      console.log(this.row.name);
      this.editing = this.row.toJSON();
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
      this.set('row.name',this.editing)
    },
    actions:{
        cancelEdit(){
          this.set('editing',this.get('row.name')) ;
          this.set('editable', false);
          this.set('editBtnText','Edit');
        },
        btnClick(value){
          if(this.editable){
              this.saveChanges(this.row);
          }else{
              this.makeEditable();
          }


        }


    },
});
