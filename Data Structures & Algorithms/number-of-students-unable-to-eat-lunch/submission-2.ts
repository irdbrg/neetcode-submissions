class Solution {
    fillQueue(students: number[]) {
        const head = {
            prev: null,
            next: null,
            val: null
        };
        let tail = head;

        students.forEach(student => {
            const newRecord = {
                prev: tail,
                next: null,
                val: student
            }

            tail.next = newRecord;
            tail = newRecord;
        });

        return { head, tail };
    }
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        let {head: queue, tail} = this.fillQueue(students);
        let queueSize = students.length;
        let failed = 0;
        let currStudent = queue.next;

        while(failed < queueSize) {
            const studentChoice = currStudent.val;
            const sandwicheChoosen = sandwiches[0] === studentChoice;

            currStudent.prev.next = currStudent.next;
            if (currStudent.next) currStudent.next.prev = currStudent.prev;

            if (sandwicheChoosen) {
                sandwiches.splice(0, 1); 
                queueSize--; 
                failed = 0;
            } else {
                failed++;
                tail.next = currStudent;
                currStudent.prev = tail;

                tail = currStudent;
            }

            const next = currStudent.next;
            currStudent = next ?? queue.next;
        }

        return queueSize;
    }
}
