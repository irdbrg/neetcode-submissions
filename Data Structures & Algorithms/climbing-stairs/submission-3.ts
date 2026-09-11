class Solution {
    climbStairs(n: number): number {
        const memo = new Map<number, number>();
        function ways(k: number): number {
            if (k <= 2) return k;
            if (memo.has(k)) return memo.get(k)!;
            const result = ways(k - 1) + ways(k - 2);
            memo.set(k, result);
            return result;
        }
        return ways(n);
    }
}

// 4

