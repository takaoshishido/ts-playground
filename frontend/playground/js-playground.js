
const buttons = {
  myButton: {

    content: 'OK',
    click() {
      console.log(this)
      console.log(this.content + ' clicked my button');
    }
  },
  yourButton: {
    content: 'No',
    click() {
      console.log(this)
      console.log(this.content + ' clicked your button')    }
  }
};
const looseClick = buttons.myButton.click.bind(buttons.myButton);
looseClick();
buttons.myButton.click();
buttons.yourButton.click();