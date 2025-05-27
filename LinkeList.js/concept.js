class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor(data){
        this.head = null;
        this.tail = null;
    }

    append(data){
        /******** append the node *********/
        let new_node = new Node(data);

        if (new_node.data === this.tail){
            this.head = new_node;
            this.tail = new_node;

        }else{
            this.head.next = new_node;
            this.head = new_node;
        }
    }

    find_node_with_data(data){

        let iterator = new Node(data);

        while (iterator.data !== null){
            if (iterator.data === data){
                return iterator;
            
            }else{
                iterator = iterator.next;
            }
        return null;
        }

    }
    
    insertAfter(prev_node,data){

        let new_node = new Node(data);

        if(prev_node === this.tail){
            prev_node.next = new_node;
            prev_node = new_node;
        }else{
            prev_node.next = new_node;
            new_node.next = prev_node.next.next
        }

    }

    prepend(data){}

    deleteAfter(prev_node){}
}