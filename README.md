# nimrod_kinyanjui-eb3_67237-treesort-ascending
repo on a  tree sorting algorithm  
This is a project on tree sorting algorithm

It implements the  algorithm in JavaScript. 
It includes an iterative insertion method to handle large datasets without triggering recursion stack errors.

 Complexity Analysis

How it works
1. Insertion: Elements are inserted iteratively 
2. Comparison: Each element is compared against existing nodes to determine its position.
3. Traversal:An in-order traversal (Left-Root-Right) outputs the sorted list.
   
The results

PS C:\Users\nimro\Documents\GitHub\projectOne\tree sort> node sort.js
Size | Comparisons | Assignments | Time (ms)
-------------   -----------------   ----------------
1          | 0            | 1            | 0.38ms
2          | 1            | 2            | 0.02ms
3          | 3            | 3            | 0.03ms
4          | 6            | 4            | 0.03ms
5          | 6            | 5            | 0.04ms
10         | 21           | 10           | 0.04ms
250        | 2,292        | 250          | 0.30ms
999        | 10,662       | 999          | 2.21ms
9,999      | 151,240      | 9,999        | 16.68ms
89,786     | 1,735,549    | 89,786       | 82.45ms
789,300    | 19,265,211   | 789,300      | 1239.91ms
1,780,000  | 49,220,521   | 1,780,000    | 3633.50ms
