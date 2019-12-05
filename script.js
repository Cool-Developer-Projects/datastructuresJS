/* 
    A stack:
    Last in first out service
    In javascript you wouldn't need to implement a stack as the array object already has the methods a stack has(ustilizes)
    Chrome back button is an example of a stack. As you click back you pop off the top most url revealing the previous
    as tack of books. The book ontop of the stack was the last to be put on the stack
*/

var Stack = function () {
    this.count = 0; //represents the size or length of the stack.
    this.storage = {}; //represents the the object which will store the values/items of the stack{A key value pair, the key being it's(the value's) position in the stack}

    //this method returns the item at the top of the stack
    this.peek = function () {
        return this.storage[this.count - 1];
    }

    //this method removes the item at the top of the stack and returns it.
    this.pop = function () {
        if (this.count === 0) {
            return undefined;
        }
        let value = this.storage[this.count - 1];
        delete this.storage[this.count - 1];
        this.count--;
        return value;
    }

    //this function returns the size of the stack
    this.size = function () {
        return this.count;
    }

    //this function allows you to add/push an item to the top of the stack
    this.push = function (item) {
        this.storage[this.count] = item;
        this.count++;
    }

    //this function allows you to add an item to the bottom of the stack. Recieves an argument
    this.add = function (item) {
        let reIndexedObject = {};
        let count2 = this.count+1;
        if (this.count === 0) {
            this.storage[0] = item;
            return;
        }
        for (let i = 0; i < count2; i++) {
            if(i === 0) {
                reIndexedObject[i] = item;
                continue;
            }
            reIndexedObject[i] = this.storage[i-1];
        }
        this.storage = reIndexedObject;
        this.count++;
    }

    //this method returns the item at the bottom of the stack
    this.dig = function () {
        return this.storage[0];
    }

    //this method returns a stringified format of the stack
    this.describe = function () {
        return JSON.stringify(this.storage);
    }

    //this function allows you to remove an item to the bottom of the stack.
    this.snip = function (item) {
        let reIndexedObject = {};
        if (this.count === 0) {
            return undefined;
        }
        let value = this.storage[0];
        delete this.storage[0];
        this.count--;
        for (let i = 0; i < this.count; i++) {
            reIndexedObject[i] = this.storage[i+1];
        }
        this.storage = reIndexedObject;
        return value;        
    }
}

let st = new Stack();

console.log("stack size :" + st.size() + ", top of stack: " + st.peek() + ", bottom of stack: " + st.dig());

st.push(1);
console.log("stack size :" + st.size() + ", top of stack: " + st.peek() + ", bottom of stack: " + st.dig());

st.push(2);
console.log("stack size :" + st.size() + ", top of stack: " + st.peek() + ", bottom of stack: " + st.dig());

st.push("three");
console.log("stack size :" + st.size() + ", top of stack: " + st.peek() + ", bottom of stack: " + st.dig());

st.add("ping")
console.log("stack size :" + st.size() + ", top of stack: " + st.peek() + ", bottom of stack: " + st.dig());

console.log("popping");
st.pop();
console.log("after pop: "+st.describe());
console.log("stack size :" + st.size() + ", top of stack: " + st.peek() + ", bottom of stack: " + st.dig());

console.log("before snip");
console.log(st.describe());
st.snip();
console.log("stack size :" + st.size() + ", top of stack: " + st.peek() + ", bottom of stack: " + st.dig());
console.log("after snipping: "+st.describe());

// console.log("Adding to bottom of stack!");
// console.log("STACK:");
// console.log(st.describe());
// console.log("addition");
// st.add("addition");
// console.log("stack size :" + st.size() + ", top of stack: " + st.peek() + ", bottom of stack: " + st.dig());
// console.log(st.describe());
