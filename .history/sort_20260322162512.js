const fs = require('fs');

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

function getDataFromFile(filename) {
    try {
        if (!fs.existsSync(filename)) return null;

        const rawContent = fs.readFileSync(filename, 'utf8');

        const matches = rawContent.match(/\d+/g);
        return matches ? matches.map(Number) : [];
    } catch (err) {
        console.error("Error reading file:", err.message);
        return null;
    }
}

const ts = new TreeSort();

const externalData = getDataFromFile('data.txt');

if (externalData) {
    console.log(`--- Running Sort on External File (data.txt) ---`);
    console.log(`Extracted ${externalData.length} numbers.`);
    const start = performance.now();
    ts.sort(externalData);
    const end = performance.now();
    console.log(`Done in ${(end - start).toFixed(2)}ms\n`);
}

const sizes = [1754, 685, 878, 45, 789, 23, 4, 88, 4, 56, 56, 67942, 34, 75, 67, 6, 5, 6475, 4, 52, 53, 4647, 35, 11, 2345, 578, 973, 56, 570, 2501, 23, 45276, 5834, 946, 5912, 3546, 4549, 9996712345645, 867, 69, 89868, 76, 72.34767, 56886, 789216, 5, 42343, 657, 36700, 1236, 38, 9947, 8020, 7763, 4959.354, 5846, 574, 6523.786, 7346572461, 54798, 585, 638, 9856, 72, 3853, 4567232, 87578, 456, 85478, 56756, 565, 718676, 18748674, 873947, 86, 79.829, 5, 882, 90685, 28494, 5.7814, 75, 477.66765, 6856, 876, 26575, 627716, 461, 3558, 2747, 6574, 857, 475, 6247, 486, 47977.6474, 84784, 56867, 9345, 7878, 237, 468574, 67866, 346.6675, 9782, 64578648, 9577, 87698, 75476, 5745, 98564, 583, 657, 834, 5795, 48598, 597, 69585, 706, 98683, 4587, 609, 468.95, 483493, 458734.95, 745.9673, 70589, 19034945, , 970, 574, 5895, 8579, 657758, 7108, 404, 868, 20180, 681, 949150, 96, 435436, 18, 40800];


console.log("Size | Comparisons | Assignments | Time (ms)");
console.log("-------------   -----------------   ----------------");

sizes.forEach(size => {

    const data = Array.from({ length: size }, () => Math.floor(Math.random() * 100000000));

    const start = performance.now();
    ts.sort(data);
    const end = performance.now();

    console.log(`${size.toLocaleString().padEnd(10)} | ${ts.comparisons.toLocaleString().padEnd(12)} | ${ts.assignments.toLocaleString().padEnd(12)} | ${(end - start).toFixed(2)}ms`);
});