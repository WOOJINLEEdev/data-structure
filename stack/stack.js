document.addEventListener("DOMContentLoaded", function () {
  class Stack {
    constructor(arr) {
      this.arr = arr;
    }

    push(val) {
      return this.arr.push(val);
    }

    pop() {
      return this.arr.pop();
    }
  }

  class StackView {
    constructor(container) {
      this.container = container;
      this.stack = new Stack(array);
    }

    render() {
      return (this.container.innerHTML += `<div class="data ${this.stack.arr.slice(
        -1
      )}">data ${this.stack.arr.slice(-1)}</div>`);
    }

    delete() {
      return this.container.removeChild(container.lastChild);
    }
  }

  const container = document.querySelector(".container");
  const pushBtn = document.querySelector(".push");
  const popBtn = document.querySelector(".pop");

  const array = [];
  const stack = new Stack(array);
  const view = new StackView(container);
  let seq = 0;

  function nextSeq() {
    return ++seq;
  }

  pushBtn.addEventListener("click", () => {
    if (container.childElementCount === 5) return;
    stack.push(nextSeq());
    view.render();
    console.log(container.childElementCount);
  });

  popBtn.addEventListener("click", () => {
    if (container.childElementCount === 0) return;
    stack.pop();
    view.delete();
    console.log(container.childElementCount);
  });
});
