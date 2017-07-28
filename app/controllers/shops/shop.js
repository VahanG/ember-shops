import Ember from 'ember';

export default Ember.Controller.extend({
  didInsertElement: function () {
      this.get('controller').on('productEdit', function () {
          console.log(444444);
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
         //this.get('model.products')[0].price++;
        //didInsertElement:
        // let products =
         return price;
    },

      aa: Ember.computed('model.products.@each.{price,qty}', function(a) {
          console.log(777777,a);

          return {a:4,p:this.calculate()};
      }),



    actions:{
        add(){
            let products = this.get('model.products').slice();
            products.push({name:'ddd',price:10,qty:2});
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
