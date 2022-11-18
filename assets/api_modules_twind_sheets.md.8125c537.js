import{o as t,c as n,d as s}from"./app.fe45d69b.js";const e='{"title":"Module: twind/sheets","description":"","frontmatter":{},"headers":[{"level":2,"title":"Virtual Sheet","slug":"virtual-sheet"},{"level":3,"title":"Using for Static Extraction a.k.a. Server Side Rendering (SSR)","slug":"using-for-static-extraction-a-k-a-server-side-rendering-ssr"},{"level":3,"title":"Using in tests","slug":"using-in-tests"},{"level":2,"title":"DOM Sheet","slug":"dom-sheet"},{"level":2,"title":"Custom Sheet Implementation","slug":"custom-sheet-implementation"},{"level":2,"title":"Table of contents","slug":"table-of-contents"},{"level":3,"title":"Interfaces","slug":"interfaces"},{"level":2,"title":"Type aliases","slug":"type-aliases"},{"level":3,"title":"StyleTagSheet","slug":"styletagsheet"},{"level":2,"title":"Functions","slug":"functions"},{"level":3,"title":"domSheet","slug":"domsheet"},{"level":3,"title":"getStyleTag","slug":"getstyletag"},{"level":3,"title":"getStyleTagProperties","slug":"getstyletagproperties"},{"level":3,"title":"virtualSheet","slug":"virtualsheet"}],"relativePath":"api/modules/twind_sheets.md","lastUpdated":1668778058702}',a={},o=s('<h1 id="module-twind-sheets"><a class="header-anchor" href="#module-twind-sheets" aria-hidden="true">#</a> Module: twind/sheets</h1><p><a href="https://twind.dev/api/modules/twind_sheets.html" target="_blank" rel="noopener noreferrer"><img src="https://flat.badgen.net/badge/icon/Documentation?icon=awesome&amp;label" alt="Documentation"></a><a href="https://github.com/tw-in-js/twind/tree/v0.16/src/sheets" target="_blank" rel="noopener noreferrer"><img src="https://flat.badgen.net/badge/icon/tw-in-js%2Ftwind%2Fsrc%2Fsheets?icon=github&amp;label" alt="Github"></a><a href="https://unpkg.com/twind/sheets/sheets.js" title="brotli module size" target="_blank" rel="noopener noreferrer"><img src="https://flat.badgen.net/badgesize/brotli/https://cdn.jsdelivr.net/npm/twind/sheets/sheets.min.js?icon=jsdelivr&amp;label&amp;color=blue&amp;cache=10800" alt="Module Size"></a><a href="https://unpkg.com/browse/twind/sheets/sheets.d.ts" target="_blank" rel="noopener noreferrer"><img src="https://flat.badgen.net/badge/icon/included?icon=typescript&amp;label" alt="Typescript"></a></p><p>This module provides <a href="#virtual-sheet">virtualSheet</a> and <a href="#dom-sheet">domSheet</a> which can be used with <code><a href="./twind.html#setup">setup</a>({ <a href="./../interfaces/twind.configuration.html#sheet">sheet</a> })</code>.</p><h2 id="virtual-sheet"><a class="header-anchor" href="#virtual-sheet" aria-hidden="true">#</a> Virtual Sheet</h2><p>The virtual sheet collects style rules into an array. This is most useful during testing and {@page Extract Styles aka SSR | server side rendering (SSR)}.</p><p>Additionally it provides an API to reset the current internal state of its <code>tw</code> function.</p><h3 id="using-for-static-extraction-a-k-a-server-side-rendering-ssr"><a class="header-anchor" href="#using-for-static-extraction-a-k-a-server-side-rendering-ssr" aria-hidden="true">#</a> Using for Static Extraction a.k.a. Server Side Rendering (SSR)</h3><blockquote><p>💡 You can find detailed instructions and example in the {@page Extract Styles aka SSR | Server Side Rendering (SSR) guide}.</p></blockquote><p>The following example assumes your app is using the <code>tw</code> named export from <code>twind</code> but the same logic can be applied to custom instances.</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> setup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;twind&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> virtualSheet<span class="token punctuation">,</span> getStyleTag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;twind/sheets&#39;</span>\n\n<span class="token keyword">const</span> sheet <span class="token operator">=</span> <span class="token function">virtualSheet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>sharedOptions<span class="token punctuation">,</span> sheet <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">function</span> <span class="token function">ssr</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 1. Reset the sheet for a new rendering</span>\n  sheet<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n  <span class="token comment">// 2. Render the app</span>\n  <span class="token keyword">const</span> body <span class="token operator">=</span> <span class="token function">renderTheApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n  <span class="token comment">// 3. Create the style tag with all generated CSS rules</span>\n  <span class="token keyword">const</span> styleTag <span class="token operator">=</span> <span class="token function">getStyleTag</span><span class="token punctuation">(</span>sheet<span class="token punctuation">)</span>\n\n  <span class="token comment">// 4. Generate the response html</span>\n  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;!DOCTYPE html&gt;\n    &lt;html lang=&quot;en&quot;&gt;\n      &lt;head&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>styleTag<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/head&gt;\n      &lt;body&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>body<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/body&gt;\n    &lt;/html&gt;\n  </span><span class="token template-punctuation string">`</span></span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="using-in-tests"><a class="header-anchor" href="#using-in-tests" aria-hidden="true">#</a> Using in tests</h3><blockquote><p>💡 The example below uses <a href="https://github.com/lukeed/uvu" target="_blank" rel="noopener noreferrer">uvu</a>. Please adjust the test code to your testing framework.</p></blockquote><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> suite <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;uvu&#39;</span>\n<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> assert <span class="token keyword">from</span> <span class="token string">&#39;uvu/assert&#39;</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> create <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;twind&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> virtualSheet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;twind/sheets&#39;</span>\n\n<span class="token keyword">const</span> test <span class="token operator">=</span> <span class="token function">suite</span><span class="token punctuation">(</span><span class="token string">&#39;using virtual sheet&#39;</span><span class="token punctuation">)</span>\n\n<span class="token comment">// Setup code to be run once before all tests</span>\ntest<span class="token punctuation">.</span><span class="token function">before</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  context<span class="token punctuation">.</span>sheet <span class="token operator">=</span> <span class="token function">virtualSheet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n  <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    sheet<span class="token operator">:</span> context<span class="token punctuation">.</span>sheet<span class="token punctuation">,</span>\n    <span class="token comment">// Fail tests on unknown rules or theme values</span>\n    mode<span class="token operator">:</span> <span class="token string">&#39;strict&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// Prevent preflight rules to be added into sheet</span>\n    preflight<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token comment">// Do not prefix properties and values</span>\n    prefix<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n  context<span class="token punctuation">.</span>tw <span class="token operator">=</span> instance<span class="token punctuation">.</span>tw\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// Clear the state before each test</span>\ntest<span class="token punctuation">.</span>before<span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> sheet <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  sheet<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;render one rule&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> tw<span class="token punctuation">,</span> sheet <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  assert<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span>tw<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">text(center)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token string">&#39;text-center&#39;</span><span class="token punctuation">)</span>\n  assert<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>sheet<span class="token punctuation">.</span>target<span class="token punctuation">,</span> <span class="token string">&#39;.text-center{text-align:center}&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="dom-sheet"><a class="header-anchor" href="#dom-sheet" aria-hidden="true">#</a> DOM Sheet</h2><p>This sheet uses DOM Text nodes to insert the CSS rules into the stylesheet. Using DOM manipulation makes this way slower than the <a href="./twind.html#cssomsheet">default sheet</a> but allows to see the generated CSS in to DOM. Most modern browser display CSS rules from the speedy default sheet using their CSS inspector.</p><blockquote><p>💡 In production it is advised to use <a href="./twind.html#cssomsheet">speedy default sheet</a>.</p></blockquote><p>If the <code>domSheet</code> is passed no <code>target</code> it looks for an style element with the id <code>__twind</code>. If no such element is found it will create one and append it to the <code>document.head</code>.</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> setup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;twind&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> domSheet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;twind/sheets&#39;</span>\n\n<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>sharedOptions<span class="token punctuation">,</span> sheet<span class="token operator">:</span> <span class="token function">domSheet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="custom-sheet-implementation"><a class="header-anchor" href="#custom-sheet-implementation" aria-hidden="true">#</a> Custom Sheet Implementation</h2><p>In case the builtin sheet implementations do not solve your use case, you can create your own:</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> setup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;twind&#39;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">customSheet</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">target <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n  target<span class="token punctuation">,</span>\n  <span class="token function-variable function">insert</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">rule<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token comment">// rule: the CSS rule to insert</span>\n    <span class="token comment">// index: the rule&#39;s position</span>\n    target<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> rule<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>sharedOptions<span class="token punctuation">,</span> sheet<span class="token operator">:</span> <span class="token function">customSheet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="table-of-contents"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="interfaces"><a class="header-anchor" href="#interfaces" aria-hidden="true">#</a> Interfaces</h3><ul><li><a href="./../interfaces/twind_sheets.hastarget.html">HasTarget</a></li><li><a href="./../interfaces/twind_sheets.storage.html">Storage</a></li><li><a href="./../interfaces/twind_sheets.styletagproperties.html">StyleTagProperties</a></li><li><a href="./../interfaces/twind_sheets.virtualsheet.html">VirtualSheet</a></li></ul><h2 id="type-aliases"><a class="header-anchor" href="#type-aliases" aria-hidden="true">#</a> Type aliases</h2><h3 id="styletagsheet"><a class="header-anchor" href="#styletagsheet" aria-hidden="true">#</a> StyleTagSheet</h3><p>Ƭ <strong>StyleTagSheet</strong>: <a href="./../interfaces/twind_sheets.hastarget.html"><em>HasTarget</em></a> | readonly <em>string</em>[]</p><p>Defined in: <a href="https://github.com/tw-in-js/twind/blob/5ae3e10/src/sheets/index.ts#L98" target="_blank" rel="noopener noreferrer">src/sheets/index.ts:98</a></p><h2 id="functions"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions</h2><h3 id="domsheet"><a class="header-anchor" href="#domsheet" aria-hidden="true">#</a> domSheet</h3><p>▸ <code>Const</code><strong>domSheet</strong>(<code>options?</code>: <a href="./../interfaces/twind.sheetconfig.html"><em>SheetConfig</em></a>&lt;HTMLStyleElement&gt;): <a href="./../interfaces/twind.sheet.html"><em>Sheet</em></a>&lt;HTMLStyleElement&gt;</p><p>Creates an sheet which inserts style rules through the Document Object Model.</p><h4 id="parameters"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters:</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><a href="./../interfaces/twind.sheetconfig.html"><em>SheetConfig</em></a>&lt;HTMLStyleElement&gt;</td><td style="text-align:left;">{}</td></tr></tbody></table><p><strong>Returns:</strong> <a href="./../interfaces/twind.sheet.html"><em>Sheet</em></a>&lt;HTMLStyleElement&gt;</p><p>Defined in: <a href="https://github.com/tw-in-js/twind/blob/5ae3e10/src/sheets/index.ts#L14" target="_blank" rel="noopener noreferrer">src/sheets/index.ts:14</a></p><hr><h3 id="getstyletag"><a class="header-anchor" href="#getstyletag" aria-hidden="true">#</a> getStyleTag</h3><p>▸ <code>Const</code><strong>getStyleTag</strong>(<code>sheet</code>: <a href="./twind_sheets.html#styletagsheet"><em>StyleTagSheet</em></a>, <code>attributes?</code>: <em>Record</em>&lt;string, string&gt;): <em>string</em></p><p>Transforms css rules into a <code>&lt;style&gt;</code> tag string.</p><h4 id="parameters-2"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters:</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>sheet</code></td><td style="text-align:left;"><a href="./twind_sheets.html#styletagsheet"><em>StyleTagSheet</em></a></td></tr><tr><td style="text-align:left;"><code>attributes?</code></td><td style="text-align:left;"><em>Record</em>&lt;string, string&gt;</td></tr></tbody></table><p><strong>Returns:</strong> <em>string</em></p><p>Defined in: <a href="https://github.com/tw-in-js/twind/blob/5ae3e10/src/sheets/index.ts#L111" target="_blank" rel="noopener noreferrer">src/sheets/index.ts:111</a></p><hr><h3 id="getstyletagproperties"><a class="header-anchor" href="#getstyletagproperties" aria-hidden="true">#</a> getStyleTagProperties</h3><p>▸ <code>Const</code><strong>getStyleTagProperties</strong>(<code>sheet</code>: <a href="./twind_sheets.html#styletagsheet"><em>StyleTagSheet</em></a>): <a href="./../interfaces/twind_sheets.styletagproperties.html"><em>StyleTagProperties</em></a></p><p>Transforms css rules into <code>&lt;style&gt;</code> tag properties.</p><h4 id="parameters-3"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters:</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>sheet</code></td><td style="text-align:left;"><a href="./twind_sheets.html#styletagsheet"><em>StyleTagSheet</em></a></td></tr></tbody></table><p><strong>Returns:</strong> <a href="./../interfaces/twind_sheets.styletagproperties.html"><em>StyleTagProperties</em></a></p><p>Defined in: <a href="https://github.com/tw-in-js/twind/blob/5ae3e10/src/sheets/index.ts#L103" target="_blank" rel="noopener noreferrer">src/sheets/index.ts:103</a></p><hr><h3 id="virtualsheet"><a class="header-anchor" href="#virtualsheet" aria-hidden="true">#</a> virtualSheet</h3><p>▸ <code>Const</code><strong>virtualSheet</strong>(): <a href="./../interfaces/twind_sheets.virtualsheet.html"><em>VirtualSheet</em></a></p><p>Creates an sheet which collects style rules into an array.</p><p><strong>Returns:</strong> <a href="./../interfaces/twind_sheets.virtualsheet.html"><em>VirtualSheet</em></a></p><p>Defined in: <a href="https://github.com/tw-in-js/twind/blob/5ae3e10/src/sheets/index.ts#L72" target="_blank" rel="noopener noreferrer">src/sheets/index.ts:72</a></p>',58);a.render=function(s,e,a,p,l,r){return t(),n("div",null,[o])};export default a;export{e as __pageData};
