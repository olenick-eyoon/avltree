console.clear();

class Node {
    constructor(value) {
        this._value = value;
        this._left = new NullNode();
        this._right = new NullNode();
        this._leftHeight = 0;
        this._rightHeight = 0;
    }

    get left() {
        return this._left;
    }
    set left(left) {
        this._left = left;
    }

    get right() {
        return this._right;
    }
    set right(right) {
        this._right = right;
    }

    get leftHeight() {
        return this._leftHeight;
    }

    set leftHeight(value) {
        this._leftHeight = value;
    }

    get rightHeight() {
        return this._rightHeight;
    }

    set rightHeight(value) {
        this._rightHeight = value;
    }

    get value() {
        return this._value;
    }

    insert(value, info) {
        let hDelta;

        if (value < this.value) {
            info.path.push(0);

            this.left = this.left.insert(value, info);
            info.height.push(0);
            this.leftHeight = info.height.length;
        } else {
            info.path.push(1);

            this.right = this.right.insert(value, info);
            info.height.push(0);
            this.rightHeight = info.height.length;
        }

        return this.checkValance(info, value);
    }

    search(value) {
        if (this.value === value) {
            return true;
        } else if (value < this.value) {
            return this.left.search(value);
        } else if (value > this.value) {
            return this.right.search(value);
        } else {
            return false;
        }
    }

    checkValance(info, value) {
        let self = this;
        let hDelta = this.rightHeight - this.leftHeight;

        if (hDelta < -1 || hDelta > 1) {
            console.log("Need rotation - " + value + ", on " + this.value);  
            self = this.rotateNodes(info);

            info.path.pop();
            info.height.pop();
        }

        return self;
    }

    rotateNodes(info) {
        let root = this;
        let maxHeight = Math.max(this.leftHeight, this.rightHeight);

        if (info.path[info.path.length - maxHeight] === 0) {
            console.log("To the right.");
            if (info.path[info.path.length - maxHeight + 1] === 1) {
                console.log("Second form.");
                let tempNode = this.left;
                this.left = tempNode.right;
                this.left.left = tempNode;
                this.left.left.right = new NullNode();

                this.left.leftHeight = this.left.left.leftHeight + 1;
                this.left.left.rightHeight = 0;
            }

            console.log("First form");
            root = this.left;
            this.left = root.right;
            root.right = this;

            root.rightHeight += 1;
            root.right.leftHeight -= 2;
        } else {
            console.log("To the left.");
            if (info.path[info.path.length - maxHeight + 1] === 0) {
                console.log("Second form.");
                let tempNode = this.right;
                this.right = tempNode.left;
                this.right.right = tempNode;
                this.right.right.left = new NullNode();

                this.right.rightHeight = this.right.right.rightHeight + 1;
                this.right.right.leftHeight = 0;
            }

            console.log("First form");
            root = this.right;
            this.right = root.left;
            root.left = this;

            root.leftHeight += 1;
            root.left.rightHeight -= 2;
        }

        return root;
    }

    //Visitor
    accept(visitor) {
        visitor.visit(this);
    }
}

class NullNode {
    get left() {
        return this;
    }

    get right() {
        return this;
    }

    get leftHeight() {
        return 0;
    }

    get rightHeight() {
        return 0;
    }

    get value() {
        return null;
    }

    insert(value, info) {
        return new Node(value);
    }

    search(value) {
        return false;
    }

    //Visitor
    accept(visitor) {
        visitor.visitNullNode(this);
    }
}

//VISITORS
class StringPrintVisitor {
    constructor() {
        this._build = "";
    }

    visit(node) {
        this._build += "[";

        node.left.accept(this);

        this._build += "," + node.leftHeight + " " + node.value + " " + node.rightHeight + ","

        node.right.accept(this);

        this._build += "]";
    }

    visitNullNode(nullNode) {
        this._build += " X ";
    }

    print() {
        console.log(this._build);
    }
}

class ArrayPrintVisitor {
    constructor() {
        this._build = [];
    }

    visit(node) {
        node.left.accept(this);

        this._build.push({
            val: node.value,
            lh: node.leftHeight,
            rh: node.rightHeight
        });

        node.right.accept(this);
    }

    visitNullNode(nullNode) {
        return;
    }

    print() {
        console.log(this._build);
    }
}

class SearchVisitor {
    constructor(searchValue) {
        this._searchValue = searchValue;
        this._found = false;
    }

    visit(node) {
        if (!this._found) {
            if (node.value === this._searchValue) {
                this._found = true;
            } else if (this._searchValue < node.value) {
                node.left.accept(this);
            } else if (this._searchValue > node.value) {
                node.right.accept(this);
            }
        }
    }

    visitNullNode(value) {
        return;
    }

    wasFound() {
        return this._found;
    }
}

class Tree {
    constructor() {
        this._root = new NullNode();
    }

    insert(value) {
        let info = {
            path: [],
            height: []
        };

        if (!this._root.search(value)) {
            this._root = this._root.insert(value, info);
        } else {
            console.log("Duplicated value: [" + value + "] - discarded");
        }
    }

    //Visitor
    search(value) {
        let searchVisitor = new SearchVisitor(value);

        this._root.accept(searchVisitor);

        return searchVisitor.wasFound();
    }

    stringPrint() {
        let stringPrintVisitor = new StringPrintVisitor();

        this._root.accept(stringPrintVisitor);

        stringPrintVisitor.print();
    }

    arrayPrint() {
        let arrayPrintVisitor = new ArrayPrintVisitor();

        this._root.accept(arrayPrintVisitor);

        arrayPrintVisitor.print();
    }
}

let arvolito = new Tree();

arvolito.insert(0);
arvolito.insert(3);
arvolito.insert(34);
arvolito.insert(23);
arvolito.insert(18);
arvolito.insert(4);
arvolito.insert(2);
arvolito.insert(16);
arvolito.insert(6);

arvolito.insert(3);

let target = 23
if (arvolito.search(target)) {
    console.log("Value [" + target + "] Found :D");
} else {
    console.log("Value [" + target + "] Not found :(");
}

//PRINT VISITORS
arvolito.arrayPrint();
arvolito.stringPrint();
//[[[ X ,0 2 0, X ],1 3 0, X ],2 4 3,[[[ X ,0 6 0, X ],1 16 1,[ X ,0 18 0, X ]],2 23 1,[ X ,0 34 0, X ]]]
