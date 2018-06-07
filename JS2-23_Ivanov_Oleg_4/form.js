const app = new Vue({
  el: "#app",
  data: {
    name: "name",
    send: "send",
    phone: "+7(000)000-0000",
    email: "mymail@mail.ru",
    text: "text",
    dinamicClassName: "validate",
    dinamicClassPhone: "validate",
    dinamicClassEmail: "validate",
    dinamicClassText: "validate"
  },
  methods: {
    validateAndSend: function() {
      let flag = true;
      const checkName = () => this.name.search(/\s+|\d+/) !== -1;
      checkName()
        ? ((this.dinamicClassName = "invalidate"),
          alert(`oops... error! in the name: ${this.name}`),
          (flag = false))
        : (this.dinamicClassName = "validate");

       if (this.name.search(/\s+|\d+/) !== -1) {
        this.dinamicClassName = "invalidate";
        alert(`oops... error! in the name: ${this.name}`);
        flag = false;
       } else {
       this.dinamicClassName = "validate";
       }
      if (this.email.search(/[\w+]?(.)?(\w+?)@\w+?.\w+?/)) {
        this.dinamicClassEmail = "invalidate";
        alert(`oops... error! in the e-mail: ${this.email}`);
        flag = false;
      } else {
        this.dinamicClassEmail = "validate";
      }
      if (this.phone.search(/\+\d{1}\(\d{3}\)\d{3}-\d{4}/)) {
        this.dinamicClassPhone = "invalidate";
        alert(`oops... error! in the phone: ${this.phone}`);
        flag = false;
      } else {
        this.dinamicClassPhone = "validate";
      }
      if (this.text.search(/\s+|\d+/) !== -1) {
        this.dinamicClassText = "invalidate";
        alert(`oops... error! in the text: ${this.text}`);
        flag = false;
       } else {
       this.dinamicClassText = "validate";
       }
      if (flag) alert("all good");
    }
  }
});
