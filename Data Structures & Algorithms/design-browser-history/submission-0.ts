type LinkedList = {
    prev: LinkedList,
    next: LinkedList,
    val: string
}

class BrowserHistory {
    history: LinkedList;
    tail: LinkedList;
    current: LinkedList;
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage: string) {
        this.history = {
            val: null,
            prev: null,
            next: null
        };

         this.tail = {
            val: null,
            prev: null,
            next: null
        };


        this.history.next = {
            val: homepage,
            prev: this.history,
            next: this.tail
        }
        this.tail.prev = this.history.next;
        this.current = this.history.next
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        const newUrl = { 
            val: url,
            next: this.tail,
            prev: this.current
        }
        
        this.current.next = newUrl;
        this.tail.prev = newUrl;

        this.current = newUrl;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        let counter = 0;
        let curr = this.current;
        while(steps > counter && curr.prev !== this.history) {
            curr = curr.prev;
            counter++;
        }

        this.current = curr;
        return this.current.val;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        let counter = 0;
        let curr = this.current;
        while(steps > counter && curr.next !== this.tail) {
            curr = curr.next;
            counter++
        }

        this.current = curr;
        return this.current.val;
    }
}
