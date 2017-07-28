import Ember from 'ember';

export default Ember.Component.extend({


  editable:false,
  editBtnText:'Edit',
  nam:'name',
  init() {
    this._super(...arguments);
    this.editable = false;

    console.log(this.row.toJSON());
  //  Ember.keys(model.toJSON())


    this.editing = this.get('row.name');
    this.editBtnText ="EDIT";
    //this.errors = [];

    if(this.row.edt){
      this.makeEditable();
    }
  },



  makeEditable() {
    console.log(this.editable);
    this.set('editable', true);
    this.set('editBtnText','save');
  },
  saveChanges(v){

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
