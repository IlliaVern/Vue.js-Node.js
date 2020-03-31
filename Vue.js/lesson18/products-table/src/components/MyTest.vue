<template>
  <div class="hello">
    <hr />
    <div>Title :<input type="text" v-model="title" /></div>
    <div>Price:<input type="number" v-model="price" /></div>
    <button @click="onSave">{{ buttonTitle }}</button>
    <hr />
    <table border="2px">
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.title }}</td>
        <td>{{ product.price }}</td>
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
      curtrentProductId: null
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
            price: this.price
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
          .doc(this.currentProductId)
          .set({
            title: this.title,
            price: this.price
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

    }
  },

  mounted() {
    this.loadData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
