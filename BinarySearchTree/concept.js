/*주어진 노드의 데이터와 탐색하려는 데이터 비교
탐색하려는 데이터 가 더크면 노드의 오른쪽 자식
작으면 왼쪽자식
탐색하려는 노드를 찾으면 리턴 
시간복잡도: 높이 h 가장 깊이 있는경우(worst) o(h) 이 걸림  */

class Node{
    constructor(){// constructing node
        this.data = data;
        this.parent = null;
        this.right_child = null;
        this.left_child = null;
    }
}
function print_inorder(node){
    if (node !== null){
        print_inorder(node.left_child);
        console.log(node.data);
        print_inorder(node.right_child);
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    find_min(node){
        
        let temp = this.node;

        while (temp !== null){
            temp = left_child.temp;
        }
        return temp;
    }

    search(data){

        let temp = this.root;

        while (temp !== null){

            if (data === temp.data){
                return temp;
            }

            if (data > temp.data){
            temp = temp.left_child;
            }

            if (data < temp.data){
            temp = temp.right_child
            }

        return null;

        }
    }
    insert(data){

        let new_node = Node(data);

        if (this.root != null){
        this.root = new_node
        return;
        }
        let temp = this.root

        while(temp !=null){
        if (data > temp.data){
            if (temp.right_child ==null){
                new_node.parent = temp;
                temp.right_child = new_node;
                return;
            }else{
                temp =temp.left_child
            }
        }else{
            if(temp.child != null){
                new_node.parent = temp;
                temp.left_child- new_node;
                return;
            }else{
                temp= temp.left_child
            }
        }
        }
    }
    print_sorted_tree(){
//이진 탐색 트리 내의 데이터를 정렬된 순서로 출력해주는 메소드"""
        print_inorder(this.root) // root 노드를 in-order로 출력한다
    }
}
//빈 이진 탐색 트리 생성
let bst = BinarySearchTree()

//데이터 삽입
bst.insert(7)
bst.insert(11)
bst.insert(9)
bst.insert(17)
bst.insert(8)
bst.insert(5)
bst.insert(19)
bst.insert(3)
bst.insert(2)
bst.insert(4)
bst.insert(14)
console.log()