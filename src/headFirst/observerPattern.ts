// define a class
class Observable {
  // instances of observer class start with an ampty array of observers that react to state changes
  observers: Array<Function>;
  constructor() {
    this.observers = [];
  }

  // adds the ablity to subscribe to a new object, add and observers

  subscribe(f: Function) {
    this.observers.push(f);
  }

  // adds the ability to unsubscribe

  unsubscribe(f: Function) {
    this.observers = this.observers.filter(subscriber => subscriber !== f);
  }

  // update all subscibed objects
  // and pass some data to each of them

  notify(data: string) {
    console.log("I am notitfing every one :) ");
    this.observers.forEach(observer => observer(data));
  }
}

// the observable listens to data changes and notifyis all observer functions that in turn will update

const input = document.querySelector(".js-input");
const p1 = document.querySelector(".js-p1");
const p2 = document.querySelector(".js-p2");
const p3 = document.querySelector(".js-p3");

// actions to add to the observers array
const updateP1 = (text: string) => (p1.textContent = text);
const updateP2 = (text: string) => (p2.textContent = text);
const updateP3 = (text: string) => (p3.textContent = text);

const headingsObserver = new Observable();

headingsObserver.subscribe(updateP1);
headingsObserver.subscribe(updateP2);
headingsObserver.subscribe(updateP3);

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
  // probably you might want to add the currentTarget as well
  // currentTarget: T;
};

// use it instead of Event
let e: HTMLElementEvent<HTMLTextAreaElement>;

input.addEventListener("keyup", (e: HTMLElementEvent<HTMLTextAreaElement>) => {
  headingsObserver.notify(e.target.value);
});
