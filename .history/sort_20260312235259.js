class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class TreeSort {
    constructor() {
        this.comparisons = 0;
        this.assignments = 0;
    }
    insert(root, val) {
        const newNode = new TreeNode(val);
        this.assignments++;

        if (!root) return newNode;

        let current = root;
        while (true) {
            this.comparisons++;
            if (val < current.val) {
                if (!current.left) {
                    current.left = newNode;
                    break;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    break;
                }
                current = current.right;
            }
        }
        return root;
    } sort(arr) {
        this.comparisons = 0;
        this.assignments = 0;
        if (arr.length === 0) return [];

        let root = null;
        for (let x of arr) {
            root = this.insert(root, x);
        }

        const result = [];
        // In-order traversal (recursive is usually fine for traversal unless tree is very deep)
        const traverse = (node) => {
            if (node) {
                traverse(node.left);
                result.push(node.val);
                traverse(node.right);
            }
        };
        traverse(root);
        return result;
    }
}

// --- EXPERIMENT RUNNER ---
const sizes = [1, 2, 3, 4, 5, 10, 250, 999, 9999, 89786, 789300, 1780000];
const ts = new TreeSort();

console.log("Size | Comparisons | Assignments | Time (ms)");
console.log("----------------------------------------------");

sizes.forEach(size => {
    // Generate random integers for the test
    const data = Array.from({ length: size }, () => Math.floor(Math.random() * 1000000));

    const start = performance.now();
    ts.sort(data);
    const end = performance.now();

    console.log(`${size.toLocaleString().padEnd(10)} | ${ts.comparisons.toLocaleString().padEnd(12)} | ${ts.assignments.toLocaleString().padEnd(12)} | ${(end - start).toFixed(2)}ms`);
});