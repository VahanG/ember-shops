import Ember from 'ember';
import _find from 'lodash/find';

export default Ember.Controller.extend({
  didInsertElement: function () {
      this.get('controller').on('productEdit', function () {
      });
  },


    calculate(){
         let price = 0;
         let products = this.get('model.products');
         if(products.length==0){
           return price;
         }
         console.log(products);
         for(let p of products){
            price += p.qty*p.price;
         }

         return price;
    },

      total: Ember.computed('model.products.@each.{price,qty}', function(a) {
          return {p:this.calculate()};
      }),



    actions:{
        add(){
            let products = this.get('model.products').slice();
            products.push({name:'ddd',price:10,qty:2,edt:true});
            this.get('model').set('products',products);
            //this.set('totalPrice',this.calculate())
        },
        remove(i){
            console.log(i);
            let products = this.get('model.products').slice();
            products.splice(i,1)
            this.get('model').set('products',products);
            this.set('aa.p',this.calculate());
        }
    }

});
