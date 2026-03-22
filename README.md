# nimrod_kinyanjui-eb3_67237-treesort-ascending
repo on a  tree sorting algorithm  
This is a project on tree sorting algorithm

It implements the  algorithm in JavaScript. 
It includes an iterative insertion method to handle large datasets without triggering recursion stack errors.



How it works
1. Insertion: Elements are inserted iteratively
    The first number becomes the Root of the tree.

    For every subsequent number, the algorithm compares it to the current node:

    If the number is smaller, it moves to the Left child.

    If the number is larger, it moves to the Right child.

    This continues until the algorithm finds an empty spot to create a new TreeNode

   
2. Comparison: Each element is compared against existing nodes to determine its position.

   
3. Traversal:An in-order traversal (Left-Root-Right) outputs the sorted list.

      Left: Recursively visit the left subtree (smallest values).

      Root: Record the value of the current node.

      Right: Recursively visit the right subtree (larger values).
   
The results

PS C:\Users\nimro\Documents\GitHub\projectOne\tree sort> node sort.js
Size | Comparisons | Assignments | Time (ms)
-------------   -----------------   ----------------
1,754      | 20,373       | 1,754        | 4.77ms
685        | 6,852        | 685          | 0.45ms
878        | 9,376        | 878          | 0.31ms
45         | 190          | 45           | 0.02ms
789        | 7,742        | 789          | 0.19ms
23         | 83           | 23           | 0.02ms
4          | 4            | 4            | 0.01ms
88         | 538          | 88           | 0.03ms
4          | 6            | 4            | 0.00ms
56         | 281          | 56           | 0.02ms
56         | 287          | 56           | 0.02ms
67,942     | 1,271,495    | 67,942       | 47.45ms
34         | 162          | 34           | 0.05ms
75         | 380          | 75           | 0.02ms
67         | 394          | 67           | 0.01ms
6          | 9            | 6            | 0.01ms
5          | 8            | 5            | 0.00ms
6,475      | 94,551       | 6,475        | 2.24ms
4          | 6            | 4            | 0.01ms
52         | 296          | 52           | 0.02ms
53         | 276          | 53           | 0.02ms
4,647      | 70,303       | 4,647        | 1.48ms
35         | 132          | 35           | 0.01ms
11         | 23           | 11           | 0.00ms
2,345      | 29,601       | 2,345        | 0.56ms
578        | 5,928        | 578          | 0.10ms
973        | 10,229       | 973          | 0.17ms
56         | 285          | 56           | 0.01ms
570        | 5,864        | 570          | 0.11ms
2,501      | 32,549       | 2,501        | 1.40ms
23         | 75           | 23           | 0.02ms
45,276     | 874,544      | 45,276       | 17.74ms
5,834      | 84,275       | 5,834        | 1.11ms
946        | 10,691       | 946          | 0.17ms
5,912      | 83,073       | 5,912        | 4.00ms
3,546      | 46,986       | 3,546        | 0.85ms
4,549      | 66,628       | 4,549        | 0.86ms
867        | 9,182        | 867          | 0.15ms
69         | 439          | 69           | 0.01ms
89,868     | 1,824,352    | 89,868       | 49.85ms
76         | 402          | 76           | 0.01ms
72         | 374          | 72           | 0.01ms
56,886     | 1,065,635    | 56,886       | 25.81ms
789,216    | 19,937,246   | 789,216      | 861.05ms
5          | 6            | 5            | 0.16ms
42,343     | 795,189      | 42,343       | 23.26ms
657        | 7,362        | 657          | 0.13ms
36,700     | 647,833      | 36,700       | 13.48ms
1,236      | 14,592       | 1,236        | 0.16ms
38         | 159          | 38           | 0.01ms
9,947      | 155,188      | 9,947        | 1.57ms
8,020      | 129,830      | 8,020        | 1.26ms
7,763      | 118,108      | 7,763        | 2.03ms
4,959      | 66,080       | 4,959        | 2.37ms
5,846      | 87,180       | 5,846        | 1.12ms
574        | 5,512        | 574          | 0.08ms
6,523      | 95,580       | 6,523        | 1.25ms
54,798     | 981,331      | 54,798       | 21.28ms
585        | 5,544        | 585          | 0.14ms
638        | 6,062        | 638          | 0.14ms
9,856      | 159,363      | 9,856        | 3.18ms
72         | 371          | 72           | 0.01ms
3,853      | 53,960       | 3,853        | 0.66ms
4,567      | 64,314       | 4,567        | 0.66ms
232        | 1,933        | 232          | 0.05ms
87,578     | 1,725,032    | 87,578       | 54.14ms
456        | 3,963        | 456          | 0.07ms
85,478     | 1,603,892    | 85,478       | 40.40ms
56,756     | 1,089,316    | 56,756       | 24.72ms
565        | 4,899        | 565          | 0.09ms
718,676    | 17,009,802   | 718,676      | 677.43ms
873,947    | 21,250,869   | 873,947      | 915.24ms
86         | 553          | 86           | 0.01ms
79         | 481          | 79           | 0.01ms
5          | 8            | 5            | 0.00ms
882        | 9,408        | 882          | 0.11ms
90,685     | 1,815,743    | 90,685       | 49.64ms
28,494     | 503,534      | 28,494       | 7.15ms
5          | 10           | 5            | 0.00ms
75         | 471          | 75           | 0.02ms
477        | 4,319        | 477          | 0.10ms
6,856      | 98,697       | 6,856        | 1.03ms
876        | 9,327        | 876          | 0.15ms
26,575     | 479,110      | 26,575       | 9.14ms
627,716    | 14,821,848   | 627,716      | 629.80ms
461        | 4,182        | 461          | 0.23ms
3,558      | 52,331       | 3,558        | 0.66ms
435,436    | 9,831,348    | 435,436      | 382.39ms
18         | 55           | 18           | 0.01ms
40,800     | 744,461      | 40,800       | 37.25ms



Best/Average Case Best/Average Case ($O(n \log n)$): My results show that for a list of 789,216 integers, the algorithm performed ~19.9 million comparisons. This aligns with the $n \log n$ model, where each insertion takes approximately $\log n$ steps.

Worst Case ($O(n^2)$): While not explicitly triggered in the random tests, the logic dictates that a pre-sorted list would result in a skewed tree, causing comparisons to grow quadratically. My iterative implementation prevents a stack overflow during these cases.

Space Complexity: Every item in the test (e.g., the 873,947 items test) resulted in a 1:1 ratio of Assignments to Size. This confirms a space complexity of $O(n)$, as every integer requires exactly one TreeNode object in memory.
