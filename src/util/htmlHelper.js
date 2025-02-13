function removeNode(node) {
  if (node.parentElement !== null) {
    node.parentElement.removeChild(node);
  }
}

function insertNodeAt(fatherNode, node, position) {
  let refNode =
    position === 0
      ? fatherNode.children?.[0]
      : fatherNode.children?.[position - 1]?.nextSibling;

  if (refNode) {
    fatherNode.insertBefore(node, refNode);
  }
}

export { insertNodeAt, removeNode };
