<template>
  <div class="hello">
    <hr />
    <div>Title :<input type="text" v-model="title" /></div>
    <div>Price:<input type="number" v-model="price" /></div>
    <div>Image: <input type="file" @change="onSelect">
    <img v-if="tmpImage" :src="tmpImage" class="img">
    </div>
    
    <button @click="onSave">{{ buttonTitle }}</button>
    <hr />
    <table border="2px">
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.title }}</td>
        <td>{{ product.price }}</td>
        <td><img v-if="product.img" :src="product.img" class="img"></td>
        <td>
          <button @click="onDelete(product.id)">Delete</button>
          <button @click="onEdit(product)">Edit</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "MyTest",

  data() {
    return {
      products: [],
      title: null,
      price: null,
      curtrentProductId: null,
      img:null,
      tmpImage:null
    };
  },

  computed: {
    buttonTitle() {
      return this.curtrentProductId ? "Save" : "Add";
    }
  },

  methods: {
    loadData() {
      const db = this.$firebase.firestore();
      db.collection("products")
        .get()
        .then(snap => {
          const products = [];
          snap.forEach(doc => {
            products.push({ id: doc.id, ...doc.data() });
          });
          this.products = products;
        });
    },
    clearData() {
      this.curtrentProductId = null;
      this.title = null;
      this.price = null;
    },
    onSave() {
      const db = this.$firebase.firestore();
      if (!this.curtrentProductId) {
        // Add a new document in collection
        db.collection("products")
          .doc()
          .set({
            title: this.title,
            price: this.price,
            img:this.tmpImage
          })
          .then(function() {
            console.log("Document successfully written!");
          })
          .catch(function(error) {
            console.error("Error writing document: ", error);
          });
      } else {
        // Change a document in collection
        db.collection("products")
          .doc(this.curtrentProductId)
          .set({
            title: this.title,
            price: this.price,
            img:this.tmpImage
          })
          .then(function() {
            console.log("Document successfully written!");
          })
          .catch(function(error) {
            console.error("Error writing document: ", error);
          });
      }
      this.clearData();
      this.loadData();
    },
    onDelete(id) {
      // Delete a document from collection
      const db = this.$firebase.firestore();
      db.collection("products")
        .doc(id)
        .delete()
        .then(function() {
          console.log("Document successfully deleted!");
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
      this.loadData();
    },
    onEdit(product) {
      this.title = product.title;
      this.price = product.price;
      this.curtrentProductId = product.id;
      this.tmpImage=product.img
    },

    onSelect(e){
      console.log(e);
      
      const reader =new FileReader()
      const self=this
      reader.onloadend = function (e) {
        self.tmpImage = e.target.result;
      }
       reader.readAsDataURL(e.target.files[0]);

    }
  },

  mounted() {
    this.loadData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img{
  width:64px
}
</style>
