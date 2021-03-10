const gp = require("gh-pages");

console.log("准备配置文件");

const OPTIONS = [
  {
    name: "github",
    dir: "public",
    options: {
      repo: "git@github.com:xxwwp/jnet-basic.git",
    },
  },
  {
    name: "gitee",
    dir: "public",
    options: {
      repo: "git@gitee.com:xxwwp/jnet-basic.git",
    },
  },
];

console.log("开始提交：\n");

OPTIONS.forEach(({ name, dir, options, callback = () => {} }) => {
  console.log(`正在提交到 ${name} ......\n`);
  gp.publish(dir, options, () => {
    callback();
    console.log(`已更新到 ${name}。\n`);
  });
});
