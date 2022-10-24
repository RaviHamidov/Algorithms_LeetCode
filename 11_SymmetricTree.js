var isSymmetric = function (root) {
  if (root == null) {
    return true;
  }

  return isMirror(root.left, root.right);
};

var isMirror = function (left, right) {
  if (left == null && right == null) {
    return true;
  } else if (left !== null && right !== null) {
    return (
      left.val == right.val &&
      isMirror(left.left, right.right) &&
      isMirror(right.left, left.right)
    );
  }

  return false;
};
