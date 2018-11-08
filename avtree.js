console.clear();

function addNode(node, value, info) {
  let hDelta;

  if (value < node.value) {
    info.path.push(0);

    if (node.left == null) {
      node.left = new Node(value, null, null);

      node.leftHeight = 1;

      info.height.push(0);
    } else {
      addNode(node.left, value, info);
      info.height.push(0);
      node.leftHeight = info.height.length;

      checkValance(node, info);
    }
  } else {
    info.path.push(1);

    if (node.right == null) {
      node.right = new Node(value, null, null);

      node.rightHeight = 1;

      info.height.push(0);
    } else {
      addNode(node.right, value, info);
      info.height.push(0);
      node.rightHeight = info.height.length;

      checkValance(node, info);
    }
  }
}

function checkValance(node, info) {
  let hDelta = node.rightHeight - node.leftHeight;

  if (hDelta < -1 || hDelta > 1) {
    console.log("Need rotation");
    rotateNodes(node, info);
  }
}

function rotateNodes(node, info) {
  console.log(node);
  console.log(info);
  let root = node;

  if (info.path[0] === 0) {
    console.log(" to the right.");
    if (info.path[1] === 1) {
      console.log("Second form.");
    }

    console.log("First form");
  } else {
    console.log(" to the left.");
    if (info.path[1] === 0) {
      console.log("Second form.");
      let tempNode = node.right;

      node.right = tempNode.left;
      node.right.right = tempNode;
      tempNode.left = null;
      
      node.right.rightHeight += 1;
      node.right.right.left = null;
      node.right.right.leftHeight = 0;
    }

    console.log("First form");
    root = node.right;
    root.left = node;
    node.right = null;
    
    root.leftHeight += 1;
    root.left.rightHeight -= 2;
  }

  info.parent.push(root);
}

function searchNode(node, value) {
  if (node.value === value) {
    return true;
  } else if (value < node.value) {
    if (node.left == null) {
      return false;
    }

    return searchNode(node.left, value);
  } else if (value > node.value && node.right != null) {
    if (node.right == null) {
      return false;
    }

    return searchNode(node.right, value);
  } else {
    return false;
  }
}

function printNode(node, values) {
  if (node.left != null) {
    printNode(node.left, values);
  }

  if (node != null) {
    values.push({
      val: node.value,
      lh: node.leftHeight,
      rh: node.rightHeight
    });
  }

  if (node.right != null) {
    printNode(node.right, values);
  }
}

class Node {
  constructor(value, left, right) {
    this._value = value;
    this._left = left;
    this._right = right;
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
}

class Tree {
  constructor() {
    this._values = [];
  }

  insert(value) {
    let info = {
      path: [],
      height: [],
      parent: []
    };

    if (this._root == null) {
      this._root = new Node(value, null, null);
    } else if (!searchNode(this._root, value)) {
      addNode(this._root, value, info);
      console.log(info.parent);
    } else {
      console.log("Duplicated value: [" + value + "] - discarded");
    }
  }

  search(value) {
    if (searchNode(this._root, value)) {
      console.log("Value [" + value + "] Found :D");
    } else {
      console.log("Value [" + value + "] Not found :(");
    }
  }

  print() {
    this._values = [];

    printNode(this._root, this._values);

    console.log(this._values);
  }
}

let arvolito = new Tree();

arvolito.insert(3);
arvolito.insert(34);
arvolito.insert(23);
//arvolito.insert(18);
//arvolito.insert(4);
//arvolito.insert(2);
//arvolito.insert(16);
//arvolito.insert(6);

//arvolito.insert(3);

//arvolito.search(23);

arvolito.print();
