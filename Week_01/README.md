### 数组、链表
​		链表与数组是两种互补的基础数据结构，工程中经常结合

各自的优势组合出各种复合结构，比如散列表。在redis等大型

应用中有着广泛的应用。

### 跳表

#### 		跳表只能用于元素有序的情况

​		  采用空间换时间的思想，将链表操作时间复杂度

由O(n)降到O(logn)，相当于链表的二分查找版本。

### 栈（FILO）、队列（FIFO）

​		因为栈与队列都是无序的数据结构，查询时间复杂度均为O(n)，

添加删除时间复杂度均为O(1)，一般工程中不直接应用。

### 优先队列、双端队列

​		队列衍生出的高级数据结构，底层具体实现的数据结构

较为多样和复杂。



### 优化的手段

- 空间换时间
- 升维（降维打击）
- 双指针（左右夹逼）