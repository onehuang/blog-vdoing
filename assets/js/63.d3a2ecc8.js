(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{541:function(s,t,a){"use strict";a.r(t);var n=a(20),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"git分支的新建与合并-分支操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git分支的新建与合并-分支操作"}},[s._v("#")]),s._v(" Git分支的新建与合并-分支操作")]),s._v(" "),a("p",[s._v("文档："),a("a",{attrs:{href:"https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%9A%84%E6%96%B0%E5%BB%BA%E4%B8%8E%E5%90%88%E5%B9%B6",target:"_blank",rel:"noopener noreferrer"}},[s._v("Git 分支 - 分支的新建与合并"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"创建分支并切换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建分支并切换"}},[s._v("#")]),s._v(" 创建分支并切换")]),s._v(" "),a("p",[s._v("此时有一个需求需要在新的分支"),a("code",[s._v("iss53")]),s._v("上工作：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b iss53  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# b表示branch")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("它是下面两条命令的简写：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch iss53\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout iss53\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"切换分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#切换分支"}},[s._v("#")]),s._v(" 切换分支")]),s._v(" "),a("p",[s._v("突然有一个紧急问题要解决，需要在原来的"),a("code",[s._v("master")]),s._v("分支进行修复：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在切换到"),a("code",[s._v("master")]),s._v("之前，需要"),a("code",[s._v("iss53")]),s._v("分支保持好一个干净的状态（修改都已提交）。")]),s._v(" "),a("p",[a("strong",[s._v("注意：切换分支Git 会重置你的工作目录。")])]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("checkout")]),s._v(" 中文含义 “检出”，"),a("code",[s._v("checkout <branch>")]),s._v(" 检出分支 => 检出指定分支的代码 => 重置工作目录并切换分支。")])]),s._v(" "),a("p",[s._v("接下来，你要修复这个紧急问题。 建立一个 "),a("code",[s._v("hotfix")]),s._v(" 分支，在该分支上工作直到问题解决：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b hotfix\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 中间过程在hotfix上修改了代码并提交")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ./hotfix.txt\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fixed'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"合并分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并分支"}},[s._v("#")]),s._v(" 合并分支")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout master "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 首先切回master分支")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge hotfix "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把 hotfix 分支合并过来")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"删除分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除分支"}},[s._v("#")]),s._v(" 删除分支")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -d hotfix "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# d表示delete")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 然后切回iss53继续工作")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout iss53\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("注意删除分支是在 "),a("code",[s._v("branch")]),s._v(" 命令上")]),s._v(" "),a("h3",{attrs:{id:"多次提交之后合并分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多次提交之后合并分支"}},[s._v("#")]),s._v(" 多次提交之后合并分支")]),s._v(" "),a("p",[s._v("假设你已经修正了 #53 问题，打算合并到"),a("code",[s._v("master")]),s._v("分支：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout master\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merga iss53\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("这看似和之前的合并区别不大。此时你的开发历史从一个更早的地方开始分叉开来（diverged）。 因为，"),a("code",[s._v("master")]),s._v(" 分支所在提交并不是 "),a("code",[s._v("iss53")]),s._v(" 分支所在提交的直接祖先，Git 不得不做一些额外的工作。 出现这种情况的时候，Git 会使用两个分支的末端所指的快照以及这两个分支的公共祖先，做一个简单的"),a("strong",[s._v("三方合并")]),s._v("。")]),s._v(" "),a("p",[s._v("和之前将分支指针向前推进所不同的是，"),a("strong",[s._v("Git 将此次三方合并的结果做了一个新的快照并且自动创建一个新的提交指向它")]),s._v("。 这个被称作一次合并提交，它的特别之处在于他有不止一个父提交。")]),s._v(" "),a("h3",{attrs:{id:"遇到冲突时的分支合并"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遇到冲突时的分支合并"}},[s._v("#")]),s._v(" 遇到冲突时的分支合并")]),s._v(" "),a("p",[s._v("如果你在两个不同的分支中，"),a("strong",[s._v("对同一个文件的同一个部分进行了不同的修改")]),s._v("，Git 就没法干净的合并它们，就产生了冲突。")]),s._v(" "),a("p",[s._v("合并过程中出现"),a("code",[s._v("CONFLICT")]),s._v("提升，表示有冲突")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge iss53\nAuto-merging index.html\nCONFLICT "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": Merge conflict "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" index.html\nAutomatic merge failed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" fix conflicts and "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" commit the result.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("使用"),a("code",[s._v("git status")]),s._v("查看未合并状态。")]),s._v(" "),a("p",[s._v("任何因包含合并冲突而有待解决的文件，都会以未合并状态标识出来。 "),a("strong",[s._v("Git 会在有冲突的文件中加入标准的冲突解决标记，这样你可以打开这些包含冲突的文件然后手动解决冲突。")]),s._v(" 出现冲突的文件会包含一些特殊区段，看起来像下面这个样子：")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[s._v("<<<<<<< HEAD:index.html\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("footer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("contact : email.support@github.com"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n=======\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("footer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n please contact us at support@github.com\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n>>>>>>> iss53:index.html\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("你需要"),a("strong",[s._v("手动解决冲突")]),s._v("，解决了所有文件里的冲突之后，对每个文件"),a("strong",[s._v("使用 "),a("code",[s._v("git add")]),s._v(" 命令")]),s._v("来将其标记为冲突已解决。 "),a("strong",[s._v("一旦暂存这些原本有冲突的文件，Git 就会将它们标记为冲突已解决")]),s._v("。")]),s._v(" "),a("p",[s._v("如果你对结果感到满意，并且确定之前有冲突的的文件都已经暂存了，这时你可以输入 "),a("code",[s._v("git commit")]),s._v(" 来完成合并提交。")])])}),[],!1,null,null,null);t.default=e.exports}}]);