
/**
 * Example by https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/
 */

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    insert(data) {
        var newNode = new Node(data);

        if (this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode)
    }

    insertNode(node, newNode) {

        // data move left of the tree
        if (newNode.data < node.data) {
            if (node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        }
        // data move rigth of the tree
        else {
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, key) {

        if (node === null)
            return null;
        else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        }
        else {
            //deleting node with no children
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            //deleting node with one children
            if (node.left === null) {
                node = node.right;
                return node;
            }
            else if (node.right === null) {
                node = node.left;
                return node;
            }

            /**
             * Deleting node with two children
             * minimum node of the rigth subtree
             * is stored in aux
             */

            let aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }

    findMinNode(node) {

        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }

    inorder(node) {
        if (node != null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    preorder(node) {
        if (node != null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    postorder(node) {
        if (node != null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    getRootNode() {
        return this.root;
    }

    search(node, data) {

        if (node === null)
            return null;
        else if (data < node.data)
            return this.search(node.left, data);

        else if (data > node.data)
            return this.search(node.rigth, data);

        else
            return node;
    }
}


var BST = new BinarySearchTree();

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);


var root = BST.getRootNode();

console.log("inOrden");
BST.inorder(root);

/* console.log("postOrder");
BST.postorder(root); */

/* console.log("preOrden");
BST.preorder(root); */

BST.remove(15);
console.log("inOrden");
BST.inorder(root);