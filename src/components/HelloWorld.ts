
import { Component, Prop, Vue } from "vue-property-decorator";
import WithRender from './hello-world.html';
import List from "./List";
@WithRender
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
  mounted() {

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

