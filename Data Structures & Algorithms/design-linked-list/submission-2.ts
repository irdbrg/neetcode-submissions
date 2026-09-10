type DoubleLinkedList = {
    next: DoubleLinkedList,
    prev: DoubleLinkedList,
    val: number
}
class MyLinkedList {
    doubleLinkedList: DoubleLinkedList;
    tail: DoubleLinkedList;
    counter: number;
    constructor() {
        this.doubleLinkedList = {
            next: null,
            prev: null,
            val: null
        };

        this.tail = {
            next: null,
            prev: null,
            val: null
        };

        this.doubleLinkedList.next = this.tail;
        this.tail.prev = this.doubleLinkedList;

        this.counter = 0;
    }

    getByIndex(index: number): DoubleLinkedList {
        let nextNode = this.doubleLinkedList.next;
        let counter = 0;

        while (nextNode && nextNode !== this.tail) {
            if (counter === index) {
                return nextNode;
            }

            nextNode = nextNode.next;
            counter++;
        }

        return;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        const list = this.getByIndex(index);

        return list?.val ?? -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val: number): void {
         const newRecord = {
            prev: this.doubleLinkedList,
            next: this.doubleLinkedList.next,
            val
        }

        newRecord.next.prev = newRecord;
        newRecord.prev.next = newRecord;

        this.counter++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val: number): void {
        const newRecord = {
            prev: this.tail.prev,
            next: this.tail,
            val
        }

        newRecord.next.prev = newRecord;
        newRecord.prev.next = newRecord;

        this.counter++;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index: number, val: number): void {
        if (index < 0 || index > this.counter) return;

        const list = index === this.counter ? this.tail : this.getByIndex(index);
        if (!list) return;

        const newRecord = {
            prev: list.prev,
            next: list,
            val
        }

        newRecord.next.prev = newRecord;
        newRecord.prev.next = newRecord;

        this.counter++;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index: number): void {
        const list = this.getByIndex(index);
        if (!list) return;

        const prev = list.prev;
        const next = list.next;

        prev.next = next;
        next.prev = prev;

        this.counter--;
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
