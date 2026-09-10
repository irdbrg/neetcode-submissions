class MyStack {
    queue: number[];
    temp: number[];
    constructor() {
        this.queue = [];
        this.temp = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        this.temp.push(x);
        while (this.queue.length) {
            this.temp.push(this.queue.shift()!); 
        }
        this.queue = this.temp;
        this.temp = [];
    }

    /**
     * @return {number}
     */
    pop(): number {
        return this.queue.shift()!;
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.queue[0];
    }

    /**
     * @return {boolean}
     */
    empty(): boolean {
        return !this.queue.length;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
