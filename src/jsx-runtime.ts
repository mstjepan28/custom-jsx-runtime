declare global {
  namespace JSX {
    type IntrinsicElements = Record<
      keyof HTMLElementTagNameMap,
      Record<string, any>
    >;
  }
}

export type Component = (props: Record<string, any>) => any;

export const jsx = {
  render: (
    component: string | Component,
    props: Record<string, any> | null,
    ...children: any[]
  ) => {
    if (!props) {
      props = {};
    }

    props.children = children.flat(Infinity);

    if (typeof component === "function") {
      return component(props);
    }

    const element = document.createElement(component);

    for (const key in props) {
      if (key === "children") {
        continue;
      }

      if (key === "classList") {
        element.setAttribute("class", props[key]);
      } else {
        element.setAttribute(key, props[key]);
      }
    }

    element.append(...props.children);

    return element;
  },
};
