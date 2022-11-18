import{r as e,o as t,c as n,a as l,b as i,t as a,e as r,d as o}from"./app.fe45d69b.js";const s='{"title":"Twind Guide","description":"The official Twind guide","frontmatter":{"title":"Twind Guide","editLink":true,"navbar":true,"sidebar":true,"head":[["meta",{"name":"description","content":"The official Twind guide"}],["meta",{"name":"keywords","content":"twind tailwind css-in-js"}]]},"headers":[{"level":2,"title":"Features","slug":"features"},{"level":2,"title":"Rationale and Inspiration","slug":"rationale-and-inspiration"},{"level":3,"title":"Challenges","slug":"challenges"},{"level":3,"title":"Opportunities","slug":"opportunities"},{"level":3,"title":"Benchmarks","slug":"benchmarks"},{"level":2,"title":"Sponsors","slug":"sponsors"}],"relativePath":"handbook/introduction.md","lastUpdated":1668778015446}',u={},h={id:"frontmatter-title"},d=l("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),c=l("blockquote",null,[l("p",null,"The smallest, fastest, most feature complete Tailwind-in-JS solution in existence")],-1),p=l("p",null,[l("a",{href:"https://github.com/tw-in-js/twind/blob/v0.16/LICENSE",target:"_blank",rel:"noopener noreferrer"},[l("img",{src:"https://flat.badgen.net/github/license/tw-in-js/twind",alt:"MIT License"})]),l("a",{href:"https://www.npmjs.com/package/twind",target:"_blank",rel:"noopener noreferrer"},[l("img",{src:"https://flat.badgen.net/npm/v/twind?icon=npm&label&cache=10800&color=blue",alt:"Latest Release"})]),l("a",{href:"https://bundlephobia.com/result?p=twind",title:"gzip bundle size (including dependencies)",target:"_blank",rel:"noopener noreferrer"},[l("img",{src:"https://flat.badgen.net/bundlephobia/minzip/twind?icon=packagephobia&label&color=blue&cache=10800",alt:"Bundle Size"})]),l("a",{href:"https://unpkg.com/twind/twind.js",title:"brotli package size (without dependencies)",target:"_blank",rel:"noopener noreferrer"},[l("img",{src:"https://flat.badgen.net/badgesize/brotli/https://cdn.jsdelivr.net/npm/twind/twind.min.js?icon=jsdelivr&label&color=blue&cache=10800",alt:"Package Size"})]),l("a",{href:"https://twind.dev",target:"_blank",rel:"noopener noreferrer"},[l("img",{src:"https://flat.badgen.net/badge/icon/Documentation?icon=awesome&label",alt:"Documentation"})]),l("a",{href:"https://github.com/tw-in-js/twind/tree/v0.16",target:"_blank",rel:"noopener noreferrer"},[l("img",{src:"https://flat.badgen.net/badge/icon/tw-in-js%2Ftwind?icon=github&label",alt:"Github"})]),l("a",{href:"https://chat.twind.style",target:"_blank",rel:"noopener noreferrer"},[l("img",{src:"https://flat.badgen.net/badge/icon/discord?icon=discord&label",alt:"Discord"})]),l("a",{href:"https://github.com/tw-in-js/twind/actions?query=workflow%3Aci",target:"_blank",rel:"noopener noreferrer"},[l("img",{src:"https://github.com/tw-in-js/twind/workflows/CI/badge.svg",alt:"CI"})]),l("a",{href:"https://coveralls.io/github/tw-in-js/twind?branch=v0.16",target:"_blank",rel:"noopener noreferrer"},[l("img",{src:"https://flat.badgen.net/coveralls/c/github/tw-in-js/twind/v0.16?icon=codecov&label&cache=10800",alt:"Coverage Status"})])],-1),m=l("div",{class:"tip custom-block"},[l("p",{class:"custom-block-title"},"Nov 18, 2022: Twind v1 is now in stable release!"),l("p",null,[i("Check out the "),l("a",{href:"https://twind.style/migration#from-twind-v016",target:"_blank",rel:"noopener noreferrer"},"Migration Guide"),i(" to upgrade.")])],-1),g=l("p",null,"Twind is a small compiler (~13kB) that converts Tailwind utility classes into CSS at runtime. The goal of this project is to unify the flexibility of CSS-in-JS with the carefully considered constraints of the Tailwind API.",-1),f=l("h2",{id:"features"},[l("a",{class:"header-anchor",href:"#features","aria-hidden":"true"},"#"),i(" Features")],-1),b=i(" No build step"),w=l("p",null,"Get all the benefits of Tailwind without the need for PostCSS, configuration, purging, or autoprefixing.",-1),y=i(" Framework agnostic"),v=l("p",null,"If your app uses HTML and JavaScript, it should work with Twind. This goes for server-rendered apps too.",-1),k=i(" One low fixed cost"),T=l("p",null,"Twind ships the compiler, not the CSS. This means unlimited styles and variants for one low fixed cost of ~13kB.",-1),S=l("p",null,[l("img",{src:"/assets/how-twind-works.gif",alt:"Example showing how Twind injects styles at runtime",title:"How Twind works"})],-1),x=l("p",null,[l("strong",null,"Other features include:")],-1),_=l("div",{class:"tip custom-block"},[l("p",{class:"custom-block-title"},"TIP"),l("p",null,"Click on each summary to show additional details.")],-1),C=i(" Faster than most CSS-in-JS libraries"),j=l("p",null,[i("Twind's advanced caching and specialized optimizations enable it to compile and inject CSS faster than most other CSS-in-JS solutions. "),l("a",{href:"/handbook/benchmarks.html"},"Check out the benchmarks"),i(" to learn more.")],-1),I=i(" Seamless integration with Tailwind"),z=l("p",null,"If it works in Tailwind, it should work in Twind.",-1),A=l("p",null,[i("Class names that are provided by Tailwind will always work with Twind. Further, Twind configuration and theming follow "),l("a",{href:"https://tailwindcss.com/docs/theme",target:"_blank",rel:"noopener noreferrer"},"Tailwind conventions"),i(", meaning you can copy/paste your Tailwind config to the Twind "),l("code",null,"setup"),i(" function. The only difference here is that there is no need to rebuild after changing your theme. Just refresh the page! For more information, check out the "),l("a",{href:"/handbook/configuration.html"},"configuration guide"),i(".")],-1),J=l("p",null,[i("Twind also provides "),l("a",{href:"/handbook/the-shim.html"},"a shim"),i(", which allows for seamless integration with your existing Tailwind styles with no configuration. The shim can improve the development experience and is useful for incremental migration.")],-1),P=i(" Extended variants, directives, and syntax"),E=o('',2),F=i(" Tailwind preflight by default"),B=l("p",null,[i("The "),l("a",{href:"https://tailwindcss.com/docs/preflight",target:"_blank",rel:"noopener noreferrer"},"base reset"),i(" provided by Tailwind is merged with your optional theme configuration and injected in the stylesheet during setup. This guarantees more consistent cross-browser styles out of the box.")],-1),L=l("div",{class:"tip custom-block"},[l("p",{class:"custom-block-title"},"TIP"),l("p",null,[i("It is possible to "),l("a",{href:"/handbook/configuration.html#preflight"},"customize or disable the preflight"),i(".")])],-1),R=i(" Escape hatch for arbitrary CSS"),O=l("p",null,[i("The Twind compiler accepts functions that can return arbitrary CSS-in-JS objects, providing a convenient escape hatch for all those one-off rules which aren't supported by Tailwind. The "),l("code",null,"&"),i(" keyword allows you to write complex rules (like pseudo elements "),l("code",null,"&::before"),i(" and "),l("code",null,"&::after"),i(") that are beyond the scope of inline styles without having to add another dependency.")],-1),D=l("p",null,[i("Twind also provides a "),l("a",{href:"/handbook/css-in-twind.html"},"css helper function"),i(" as a convenience for this case.")],-1),q=i(" Built in support for conditional rule combining"),G=l("p",null,[i("The "),l("a",{href:"./styling-with-twind.html#the-tw-function"},[l("code",null,"tw"),i(" function")]),i(" allows you to represent your styles in arrays, objects, template literals, functions, or any combination of these.The interpreter spec is inspired by and is very similar to "),l("a",{href:"https://github.com/lukeed/clsx",target:"_blank",rel:"noopener noreferrer"},"clsx"),i(" and offers a much more developer friendly API that handles null values gracefully.")],-1),H=i(" Improved readability with multiline styles"),M=l("p",null,"Using template literals, objects, and even arrays allows you to break rules over multiple lines, drastically improving readability and maintainability of complex rules.",-1),N=i(" Optional hashing of class names ensuring no conflicts"),V=l("p",null,"You can optionally configure Twind to hash class names before injecting them into the document. This may be useful in production as it can reduce the down-the-wire size of server-side rendered pages and eliminates any chance of class name conflicts with third-party styles.",-1),K=i(" Language extension via plugins"),U=l("p",null,"You can effortlessly extend the Twind compiler's abilities by creating your own plugins in your Twind configuration.",-1),Q=l("p",null,[i("Check out "),l("a",{href:"/handbook/plugins.html"},"the plugins guide"),i(" for more information.")],-1),X=i(" No runtime overhead with static extraction"),Y=l("p",null,[i("The compiler is not reliant on the DOM, which makes it an ideal candidate for static extraction and removing all runtime overhead. This is possible during "),l("a",{href:"/usage-guides/ssr.html"},"SSR"),i(" or build-time prepass.")],-1),W=l("h2",{id:"rationale-and-inspiration"},[l("a",{class:"header-anchor",href:"#rationale-and-inspiration","aria-hidden":"true"},"#"),i(" Rationale and Inspiration")],-1),$=l("p",null,[i("This project was started by the authors of two similar libraries – "),l("a",{href:"https://github.com/lukejacksonn/oceanwind",target:"_blank",rel:"noopener noreferrer"},"oceanwind"),i(" and "),l("a",{href:"https://github.com/kenoxa/beamwind",target:"_blank",rel:"noopener noreferrer"},"beamwind"),i(" – who chose to collaborate with each other in this space.")],-1),Z=l("blockquote",null,[l("p",null,"Combining efforts has saved us time and resulted in a much more complete and production ready offering.")],-1),ee=l("p",null,"Furthermore we were able to agree upon, and coin, some standards for certain aspects of the implementation based on our collective learnings; things like parsing input, grouping syntax, precedence calculation and plugin API.",-1),te=l("p",null,"Our inspirations for this project come from these fine projects:",-1),ne=l("ul",null,[l("li",null,[l("a",{href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer"},"Tailwind"),i(": Created a wonderfully thought out API on which the compiler's grammar was defined.")]),l("li",null,[l("a",{href:"https://styled-components.com/",target:"_blank",rel:"noopener noreferrer"},"styled-components"),i(": Implemented and popularized the advantages of doing CSS-in-JS.")]),l("li",null,[l("a",{href:"https://github.com/developit/htm",target:"_blank",rel:"noopener noreferrer"},"htm"),i(": A JSX compiler that proved there is merit in doing runtime compilation of DSLs like JSX.")]),l("li",null,[l("a",{href:"https://github.com/cristianbote/goober",target:"_blank",rel:"noopener noreferrer"},"goober"),i(": An impossibly small yet efficient CSS-in-JS implementation that defines critical module features.")]),l("li",null,[l("a",{href:"https://github.com/kripod/otion",target:"_blank",rel:"noopener noreferrer"},"otion"),i(": The first CSS-in-JS solution specifically oriented around handling CSS in an atomic fashion.")]),l("li",null,[l("a",{href:"https://github.com/lukeed/clsx",target:"_blank",rel:"noopener noreferrer"},"clsx"),i(": A tiny utility for constructing class name strings conditionally.")]),l("li",null,[l("a",{href:"https://github.com/kripod/style-vendorizer",target:"_blank",rel:"noopener noreferrer"},"style-vendorizer"),i(": Essential CSS prefixing helpers in less than 1KB of JavaScript.")]),l("li",null,[l("a",{href:"https://github.com/frenic/csstype",target:"_blank",rel:"noopener noreferrer"},"CSSType"),i(": Providing autocompletion and type checking for CSS properties and values.")])],-1),le=l("h3",{id:"challenges"},[l("a",{class:"header-anchor",href:"#challenges","aria-hidden":"true"},"#"),i(" Challenges")],-1),ie=l("p",null,"The core problems we are trying to solve here are as follows:",-1),ae=l("ol",null,[l("li",null,"Parsing Input: taking input and normalizing it to create a comprehendible set of Tailwind rules"),l("li",null,"Compiling Rules: taking a set of Tailwind rules and translating them into appropriate CSS rules"),l("li",null,"Injecting Styles: taking CSS rules and generating classes that get append to a stylesheet in the DOM"),l("li",null,"Merging Themes: combining themes which configure and constrain the compiler"),l("li",null,"Custom Plugins: taking functions and using them to extend the capabilities of the compiler")],-1),re=l("p",null,"This has to happen in a performant way at runtime, whilst adhering to Tailwind V2 as a language specification. All grammars that exist in Tailwind should be covered by this implementation.",-1),oe=l("h3",{id:"opportunities"},[l("a",{class:"header-anchor",href:"#opportunities","aria-hidden":"true"},"#"),i(" Opportunities")],-1),se=l("p",null,[i("Recreating the Tailwind experience at runtime might seem like a futile exercise, but we'd like to believe it opens up the doors to some exciting new possibilities. There is always going to be a tradeoff between compiling at ahead of time and compiling "),l("em",null,"just in time"),i(", however we are confident that the upsides here are significant enough to pursue a runtime implementation. "),l("a",{href:"/handbook/benchmarks.html"},"The results"),i(" have been promising so far.")],-1),ue=l("blockquote",null,[l("p",null,"Note it is still possible to remove all runtime overhead via a prepass either at serve or built time")],-1),he=l("p",null,"The flexible nature of a runtime first approach affords us possibilities like:",-1),de=l("ul",null,[l("li",null,"Dynamic Theming: generating new themes on the fly without the need to rebuilding anything"),l("li",null,"Unlimited Variants: enabling every variant combination by default because unused rules are never generated"),l("li",null,"Enhanced Syntax: taking advantage of macros within template literals to create more terse rules"),l("li",null,"Error Handling: warning the developer about unknown directives and theme values"),l("li",null,"Hashing Classes: reducing the overall output size and eliminating conflicts via deterministic hashing"),l("li",null,[l("a",{href:"https://twind.dev/docs/handbook/advanced/plugins.html#inline-plugins",target:"_blank",rel:"noopener noreferrer"},"Inline Plugins"),i(": extending the capabilities of the compiler with simple functions at runtime")])],-1),ce=l("p",null,"Another big advantage we see of shipping the interpreter compiler itself (rather than pre-compiled output) is that the effective size of the CSS for your whole app is deterministic and fixed. The weight of the compiler itself along with your theme file is all that users will ever download, no matter how many styles you use.",-1),pe=l("p",null,"Currently the compiler weighs around 12KB which is smaller than styled-components and the average tailwind output.",-1),me=l("h3",{id:"benchmarks"},[l("a",{class:"header-anchor",href:"#benchmarks","aria-hidden":"true"},"#"),i(" Benchmarks")],-1),ge=l("p",null,[i("The implementation is tested for speed alongside several popular CSS-in-JS solutions that export general CSS functions. For those that only support a "),l("em",null,"styled component"),i(" approach an equivalent test has been setup. Currently Twind comes in second place behind "),l("a",{href:"https://github.com/cristianbote/goober",target:"_blank",rel:"noopener noreferrer"},"goober"),i(" – a less than 1KB css-in-js solution by Cristian Bote – an awesome library worth checking out.")],-1),fe=l("p",null,[l("strong",null,"CSS Function w/ template literal")],-1),be=l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"Library"),l("th",null,"Results")])]),l("tbody",null,[l("tr",null,[l("td",null,"goober@2.0.30"),l("td",null,"x 632,419 ops/sec ±0.59% (95 runs sampled)")]),l("tr",null,[l("td",null,"twind (tw)"),l("td",null,"x 400,438 ops/sec ±0.35% (84 runs sampled)")]),l("tr",null,[l("td",null,"twind (apply)"),l("td",null,"x 342,725 ops/sec ±0.37% (96 runs sampled)")]),l("tr",null,[l("td",null,"twind (css)"),l("td",null,"x 270,020 ops/sec ±0.53% (95 runs sampled)")]),l("tr",null,[l("td",null,"emotion@11.1.3"),l("td",null,"x 229,990 ops/sec ±0.17% (99 runs sampled)")])])],-1),we=l("p",null,[l("strong",null,"CSS Function w/ object")],-1),ye=l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"Library"),l("th",null,"Results")])]),l("tbody",null,[l("tr",null,[l("td",null,"goober@2.0.30"),l("td",null,"x 842,430 ops/sec ±1.10% (88 runs sampled)")]),l("tr",null,[l("td",null,"twind (css)"),l("td",null,"x 203,990 ops/sec ±0.32% (94 runs sampled)")]),l("tr",null,[l("td",null,"emotion@11.1.3"),l("td",null,"x 162,460 ops/sec ±0.75% (90 runs sampled)")]),l("tr",null,[l("td",null,"otion@0.6.2"),l("td",null,"x 53,592 ops/sec ±0.85% (96 runs sampled)")])])],-1),ve=l("p",null,[l("strong",null,"Styled component w/ template literal")],-1),ke=l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"Library"),l("th",null,"Results")])]),l("tbody",null,[l("tr",null,[l("td",null,"twind"),l("td",null,"x 51,628 ops/sec ±0.63% (89 runs sampled)")]),l("tr",null,[l("td",null,"goober@2.0.18"),l("td",null,"x 40,069 ops/sec ±0.43% (96 runs sampled)")]),l("tr",null,[l("td",null,"emotion@11.0.0"),l("td",null,"x 35,349 ops/sec ±1.01% (93 runs sampled)")]),l("tr",null,[l("td",null,"styled-components@5.2.1"),l("td",null,"x 38,284 ops/sec ±0.48% (93 runs sampled)")])])],-1),Te=l("p",null,[i("For a more detailed testing summary please see the "),l("a",{href:"https://github.com/tw-in-js/twind/blob/v0.16/benchmarks",target:"_blank",rel:"noopener noreferrer"},"benchmarks"),i(" directory.")],-1),Se={id:"sponsors"},xe=l("a",{class:"header-anchor",href:"#sponsors","aria-hidden":"true"},"#",-1),_e=i(),Ce=i(" Sponsors"),je=l("p",null,"Support us with a monthly donation and help us continue our activities.",-1),Ie=l("p",null,[i("["),l("a",{href:"https://github.com/sponsors/tw-in-js",target:"_blank",rel:"noopener noreferrer"},"GitHub Sponsor"),i(" | "),l("a",{href:"https://opencollective.com/twind",target:"_blank",rel:"noopener noreferrer"},"Open Collective"),i("]")],-1),ze=l("p",null,[l("a",{href:"https://github.com/jordwalke",target:"_blank"},[l("img",{class:"avatar-user",src:"https://avatars.githubusercontent.com/u/977348?v=4",width:"64",height:"64",alt:"@jordwalke"})]),l("a",{href:"https://github.com/tylerforesthauser",target:"_blank"},[l("img",{class:"avatar-user",src:"https://avatars.githubusercontent.com/u/1226786?v=4",width:"64",height:"64",alt:"@tylerforesthauser"})]),l("a",{href:"https://github.com/holic",target:"_blank"},[l("img",{class:"avatar-user",src:"https://avatars.githubusercontent.com/u/508855?v=4",width:"64",height:"64",alt:"@holic"})]),l("a",{href:"https://github.com/Andrewnt219",target:"_blank"},[l("img",{style:{"border-radius":"50%!important"},src:"https://avatars.githubusercontent.com/u/52666982?v=4",width:"64",height:"64",alt:"@Andrewnt219"})]),l("a",{href:"https://opencollective.com/twind/backer/0/website",target:"_blank"},[l("img",{src:"https://opencollective.com/twind/backer/0/avatar.svg",alt:""})]),l("a",{href:"https://opencollective.com/twind/backer/1/website",target:"_blank"},[l("img",{src:"https://opencollective.com/twind/backer/1/avatar.svg",alt:""})]),l("a",{href:"https://opencollective.com/twind/backer/2/website",target:"_blank"},[l("img",{src:"https://opencollective.com/twind/backer/2/avatar.svg",alt:""})])],-1),Ae=l("p",null,[l("a",{href:"https://opencollective.com/twind/sponsor/0/website",target:"_blank"},[l("img",{src:"https://opencollective.com/twind/sponsor/0/avatar.svg",alt:""})]),l("a",{href:"https://opencollective.com/twind/sponsor/1/website",target:"_blank"},[l("img",{src:"https://opencollective.com/twind/sponsor/1/avatar.svg",alt:""})])],-1);u.render=function(o,s,u,Je,Pe,Ee){const Fe=e("Emoji");return t(),n("div",null,[l("h1",h,[d,i(" "+a(o.$frontmatter.title),1)]),c,p,m,r(" Hmmm?... "),r(" <Quote author=\"Adam Wathan (creator of Tailwind)\">I've wanted to do a CSS-in-JS flavor of Tailwind for over 2 years because of all the neat benefits you get there so it's cool to see projects like this!</Quote> "),g,f,l("p",null,[l("strong",null,[l(Fe,{symbol:"⚡️"}),b])]),w,l("p",null,[l("strong",null,[l(Fe,{symbol:"🚀"}),y])]),v,l("p",null,[l("strong",null,[l(Fe,{symbol:"😎"}),k])]),T,S,x,_,l("details",null,[l("summary",null,[l(Fe,{symbol:"🚅"}),C]),j]),l("details",null,[l("summary",null,[l(Fe,{symbol:"🎨"}),I]),z,A,J]),l("details",null,[l("summary",null,[l(Fe,{symbol:"🎯"}),P]),E]),l("details",null,[l("summary",null,[l(Fe,{symbol:"✈️"}),F]),B,L]),l("details",null,[l("summary",null,[l(Fe,{symbol:"🚓"}),R]),O,D]),l("details",null,[l("summary",null,[l(Fe,{symbol:"🤖"}),q]),G]),l("details",null,[l("summary",null,[l(Fe,{symbol:"🧐"}),H]),M]),l("details",null,[l("summary",null,[l(Fe,{symbol:"❄️"}),N]),V]),l("details",null,[l("summary",null,[l(Fe,{symbol:"🔌"}),K]),U,Q]),l("details",null,[l("summary",null,[l(Fe,{symbol:"🎩"}),X]),Y]),W,$,Z,ee,te,ne,le,ie,ae,re,oe,se,ue,he,de,ce,pe,me,ge,fe,be,we,ye,ve,ke,Te,l("h2",Se,[xe,_e,l(Fe,{symbol:"🙏🏾"}),Ce]),je,Ie,ze,Ae])};export default u;export{s as __pageData};
