const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path");
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `docs` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query MyQuery {
      allMdx {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);
  result.data.allMdx.nodes.forEach((node) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/docs.tsx`),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        docs: path.resolve(__dirname, "src/docs/"),
      },
    },
  });
};
