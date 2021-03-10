declare module "docs/nav.yaml" {
  export type NavItem = {
    id?: string;
    title?: string;
    items?: NavItem[];
  };
  export type NavList = Array<NavItem>;
  const data: NavList;
  export default data;
}
