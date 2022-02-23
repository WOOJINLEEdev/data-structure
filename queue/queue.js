document.addEventListener("DOMContentLoaded", function () {
  class Queue {
    constructor(array) {
      this.arr = array;
    }

    enqueue(val) {
      return this.arr.push(val);
    }

    dequeue() {
      return this.arr.shift();
    }
  }

  class QueueView {
    constructor(container) {
      this.container = container;
      this.queue = new Queue(array);
    }

    render() {
      return (this.container.innerHTML += `<div class="data ${this.queue.arr.slice(
        -1
      )}">data ${this.queue.arr.slice(-1)}</div>`);
    }

    delete() {
      return this.container.removeChild(container.firstChild);
    }
  }

  const container = document.querySelector(".container");
  const InsertBtn = document.querySelector(".insert");
  const DeleteBtn = document.querySelector(".delete");

  const array = [];
  const queue = new Queue(array);
  const view = new QueueView(container);
  let seq = 0;

  function nextSeq() {
    return ++seq;
  }

  InsertBtn.addEventListener("click", () => {
    if (container.childElementCount === 5) return;
    queue.enqueue(nextSeq());
    view.render();
    console.log(container.childElementCount);
  });

  DeleteBtn.addEventListener("click", () => {
    if (container.childElementCount === 0) return;
    queue.dequeue();
    view.delete();
    console.log(container.childElementCount);
  });
});
