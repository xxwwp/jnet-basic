import { NavItem, NavList } from "docs/nav.yaml";
import { ut } from ".";

type DHeaders = Array<{
  depth: number;
  value: string;
}>;

function createArticleList(headers: DHeaders): NavList {
  class Stack<S = any> extends Array<S> {
    constructor(length?: number) {
      ut.isNumber(length) ? super(length as number) : super();
    }
    top() {
      return this[this.length - 1];
    }
  }
  const list = new Stack<NavItem>();

  let stack = new Stack<{ level: number; list: typeof list }>();
  stack.push({
    level: headers[0]?.depth,
    list,
  });

  headers.forEach(({ depth, value }, i) => {
    const item: NavItem = { id: value };

    if (stack.top().level === depth) {
      // 同级标题向后填充
      stack.top().list.push(item);
    } else if (stack.top().level === depth - 1) {
      // 小一级的标题放到上级标题最后一个的 items 中
      const items = new Stack();
      items.push(item);
      stack.top().list.top().items = items;
      stack.push({
        level: stack.top().level + 1,
        list: items,
      });
    } else if (stack.top().level > depth) {
      // 比当前级高的标题回滚到它的同级末尾
      while (stack.top().level > depth) stack.pop();
      stack.top().list.push(item);
    } else {
      console.warn(`存在不合法的 md 标题，第 ${i} 个：`, headers);
    }
  });

  return list;
}

export default createArticleList;
