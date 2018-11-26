<template>
  <div class="hello">
   <form @submit.prevent="save" >
     <input type="text" v-model="title">

     <input type="text" v-model="description">
     <button type="submit">save</button>
   </form>
   <list :data="data"></list>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import List from "./List.vue";
@Component({
  components: {
    List
  }
})
export default class HelloWorld extends Vue {
  // @Prop()
  // private msg!: string;
  title: String;
  description: String;
  data: object;
  constructor() {
    super();
    this.title = "";
    this.description = "";
    this.data = {};
  }
  save() {
    if (this.title && this.description) {
      this.data = {
        title: this.title,
        description: this.description
      };
      this.clear();
    } else {
      alert("cannot be empty fields");
    }
  }
  clear() {
    this.title = "";
    this.description = "";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
