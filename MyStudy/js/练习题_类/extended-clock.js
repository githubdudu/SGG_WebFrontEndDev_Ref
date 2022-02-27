// class ExtendedClock extends Clock{
//     constructor({templates},{precision}){
//         super({templates});
//         this.precision = precision;
//     }

//     start(){
//         super.render();
//         this.timer = setInterval(()=>super.render(),this.precision);
//     }

// }


class ExtendedClock extends Clock {
    constructor(options) {
      super(options);
      let { precision = 1000 } = options;
      this.precision = precision;
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), this.precision);
    }
  };