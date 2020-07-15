new Vue({
  el: "#app",
  data: {
    state: true,
    inputName: "",
    names: [],
    showError: false,
    result: "",
  },
  methods: {
    addNameToList() {
      if (this.validate(this.inputName)) {
        this.names.push(this.inputName);
        this.inputName = "";
        this.showError = false;
        console.log(this.names);
      } else {
        this.showError = true;
      }
    },
    removeName(index) {
      this.names.splice(index, 1);
    },
    validate(value) {
      return value ? true : false;
    },
    showResults() {
      let loser = this.names[Math.floor(Math.random() * this.names.length)];
      this.result = loser;
      this.state = false;
    },
    reset() {
      this.state = true;
      this.inputName = "";
      this.names = [];
      this.result = "";
    },
  },
});
