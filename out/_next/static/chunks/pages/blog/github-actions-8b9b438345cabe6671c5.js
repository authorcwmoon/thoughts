_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{"4HXd":function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return u})),t.d(a,"default",(function(){return l}));var n=t("wx14"),c=t("Ff2n"),s=t("q1tI"),o=t.n(s),b=t("7ljp"),p=t("ZDfL"),u=(o.a.createElement,{title:"Why I Switched From CircleCI to GitHub Actions",publishedAt:"2019-09-15",summary:"Can GitHub Actions relace CircleCI entirely? Find out why I decided to switch CI/CD providers to GitHub Actions.",image:"/static/images/github-actions/banner.png",wordCount:380,readingTime:{text:"2 min read",minutes:1.89,time:113399.99999999999,words:378},__resourcePath:"blog/github-actions.mdx",__scans:{},layout:"index"}),r={frontMatter:u},m=p.a;function l(e){var a=e.components,t=Object(c.a)(e,["components"]);return Object(b.b)(m,Object(n.a)({},r,t,{components:a,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/static/images/github-actions/banner.png",alt:"GitHub Actions Checks"}))),Object(b.b)("p",null,"I recently switched my Continuous Integration (",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Continuous_integration"}),"CI"),")\nprovider from ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://circleci.com/"}),"CircleCI")," to ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/features/actions"}),"GitHub Actions"),".\nMy primary use for CI is running linting/tests on every pull request. Nothing too crazy."),Object(b.b)("p",null,"I've used CircleCI as my go-to provider for a while now. When I'm trying to get a project off the ground,\nI don't want to worry about reinventing the wheel every time I need to set up CI."),Object(b.b)("p",null,"GitHub recently came out with Actions, which appeared to solve the same problem without relying on an external service.\nThen, there was a ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://support.circleci.com/hc/en-us/articles/360034852194-Security-Incident-on-8-31-2019-Details-and-FAQs-"}),"security incident")," with CircleCI on August 31st.\nI decided to sign up for the beta of GitHub Actions and give it a shot."),Object(b.b)("h2",{id:"circleci"},"CircleCI"),Object(b.b)("p",null,"Here's the CircleCI config I was using. It installs the dependencies and runs ",Object(b.b)("inlineCode",{parentName:"p"},"yarn test"),"."),Object(b.b)("pre",{className:"language-yml"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"version"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token number"}),"2"),"\n",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"jobs"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":"),"\n  ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"build"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":"),"\n    ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"docker"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":"),"\n      ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"-")," ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"image"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," circleci/node",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":"),"10.15.0\n    ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"steps"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":"),"\n      ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"-")," checkout\n      ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"-")," ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"restore_cache"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":"),"\n          ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"name"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," Restoring dependencies\n          ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"keys"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":"),"\n            ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"-")," dependencies",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"-"),"v1",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"-"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),' checksum "yarn.lock" ',Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n      ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"-")," ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"run"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":"),"\n          ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"name"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," Installing dependencies\n          ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"command"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," yarn\n      ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"-")," ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"save_cache"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":"),"\n          ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"name"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," Saving dependencies\n          ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"paths"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":"),"\n            ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"-")," ~/.cache/yarn\n            ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"-")," node_modules\n          ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"key"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," dependencies",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"-"),"v1",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"-"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),' checksum "yarn.lock" ',Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n      ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"-")," ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"run"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":"),"\n          ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"name"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," Running tests\n          ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"command"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," yarn test\n")),Object(b.b)("h2",{id:"github-actions"},"Github Actions"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"GitHub Actions supports Node.js, Python, Java, Ruby, PHP, Go, Rust, .NET, and more. Build, test, and deploy applications in your language of choice.")),Object(b.b)("p",null,"I can achieve the ",Object(b.b)("strong",{parentName:"p"},"exact configuration")," as CircleCI with GitHub Actions \ud83c\udf89"),Object(b.b)("div",{className:"remark-code-title"},".github/workflows/workflow.yml"),Object(b.b)("pre",{className:"language-yml"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"name"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," CI\n",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"on"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," pull_request\n",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"jobs"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":"),"\n  ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"test"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":"),"\n    ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"runs-on"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ubuntu",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"-"),"latest\n    ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"steps"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":"),"\n      ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"-")," ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"uses"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," actions/checkout@v1\n        ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"with"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":"),"\n          ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"fetch-depth"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token number"}),"1"),"\n      ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"-")," ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"name"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," Setup Node.js\n        ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"uses"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," actions/setup",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"-"),"node@v1\n        ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"with"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":"),"\n          ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"node-version"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," 10.15.0\n      ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"-")," ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"name"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," Installing dependencies\n        ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"run"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," yarn install ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"-"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"-"),"frozen",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"-"),"lockfile\n      ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"-")," ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"name"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," Running tests\n        ",Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token key atrule"}),"run"),Object(b.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," yarn test\n")),Object(b.b)("p",null,"After adding this file at ",Object(b.b)("inlineCode",{parentName:"p"},".github/workflows/workflow.yml"),', you\'ll be able to see each run show up under the "Actions" tab.'),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/static/images/github-actions/actions-tab.png",alt:"GitHub Actions Tab"}))),Object(b.b)("p",null,"I've defined my check to happen on every pull request."),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/static/images/github-actions/checks.png",alt:"GitHub Actions Checks"}))),Object(b.b)("h2",{id:"conclusion"},"Conclusion"),Object(b.b)("p",null,"GitHub Actions has been excellent so far. Plus, there's a lot more I could do with Actions.\nYou can run a workflow on any GitHub event (e.g. push, issue creation, releases, etc) and even:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/actions/aws"}),"Deploy to AWS/Kubernetes")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/actions/npm"}),"Publish a package to NPM")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/atlassian/gajira"}),"Create a ticket in JIRA")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/actions/stale"}),"Label and close stale issues and pull requests"))),Object(b.b)("p",null,"I'm looking forward to seeing the adoption of GitHub Actions as it releases to the public."))}l.isMDXComponent=!0},R9vh:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/github-actions",function(){return t("4HXd")}])}},[["R9vh",1,2,0,3,4,5,6,7,8]]]);