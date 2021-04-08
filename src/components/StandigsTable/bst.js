class Node {
    constructor(data, payload) {
        this.data = data;
        this.payload = payload;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.length = 0;
    }

    insert(data, payload) {
        let newNode = new Node(data, payload);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
        this.length++;
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    *inOrderTraverse(node = this.root) {
        if (node != null) {
            yield* this.inOrderTraverse(node.left);
            yield node.payload;
            yield* this.inOrderTraverse(node.right);
        }
    }

    list(node = this.root) {
        return [...this.inOrderTraverse(node)];
    }
}

export {BinarySearchTree};