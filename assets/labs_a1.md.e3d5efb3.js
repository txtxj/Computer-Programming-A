import{_ as s,c as a,o as n,a as o}from"./app.0a4f0d8e.js";const A=JSON.parse('{"title":"A1","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. \u957F\u6570\u636E\u7C7B\u578B","slug":"_1-\u957F\u6570\u636E\u7C7B\u578B"},{"level":2,"title":"2. \u4E0D\u5B9A\u957F\u5EA6\u7684\u6570\u636E\u7C7B\u578B","slug":"_2-\u4E0D\u5B9A\u957F\u5EA6\u7684\u6570\u636E\u7C7B\u578B"},{"level":2,"title":"4. \u4E0D\u540C\u7C7B\u578B\u7684\u6570\u636E\u8868\u793A","slug":"_4-\u4E0D\u540C\u7C7B\u578B\u7684\u6570\u636E\u8868\u793A"}],"relativePath":"labs/a1.md","lastUpdated":1663577210000}'),l={name:"labs/a1.md"},p=o(`<h1 id="a1" tabindex="-1">A1 <a class="header-anchor" href="#a1" aria-hidden="true">#</a></h1><p>\u5B9E\u9A8C\u6307\u5BFC\u4E66 P53-54 1, 2, 4</p><h2 id="_1-\u957F\u6570\u636E\u7C7B\u578B" tabindex="-1">1. \u957F\u6570\u636E\u7C7B\u578B <a class="header-anchor" href="#_1-\u957F\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a></h2><p>\u4F7F\u7528 <code>sizeof</code> \u8FD0\u7B97\u7B26\u83B7\u53D6\u5F53\u524D\u7F16\u7A0B\u73AF\u5883\u4E2D <code>long long</code> \u548C <code>long double</code> \u7C7B\u578B\u6240\u5360\u7528\u5B58\u50A8\u7A7A\u95F4\u7684\u5B57\u8282\u6570\uFF0C\u4EE5\u53CA\u5E38\u91CF <code>1</code> <code>&#39;a&#39;</code> <code>1.0</code> \u6240\u5360\u7528\u7A7A\u95F4\u5B57\u8282\u6570\uFF0C\u4F7F\u7528 <code>printf</code>\u8BED\u53E5\u8F93\u51FA\u5982\u4E0B\u4FE1\u606F\uFF08\u6BCF\u884C\u672B\u5C3E\u7684\u6570\u5B57\u53EF\u80FD\u4E0D\u540C\uFF09\uFF1A</p><div class="language-c"><button class="copy"></button><span class="lang">c</span><pre><code><span class="line"><span style="color:#89DDFF;">sizeof(</span><span style="color:#C792EA;">long</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">long</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span></span>
<span class="line"><span style="color:#89DDFF;">sizeof(</span><span style="color:#C792EA;">long</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">double</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">16</span></span>
<span class="line"><span style="color:#89DDFF;">sizeof(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span></span>
<span class="line"><span style="color:#89DDFF;">sizeof(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span></span>
<span class="line"><span style="color:#89DDFF;">sizeof(</span><span style="color:#F78C6C;">1.0</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span></span>
<span class="line"></span></code></pre></div><h2 id="_2-\u4E0D\u5B9A\u957F\u5EA6\u7684\u6570\u636E\u7C7B\u578B" tabindex="-1">2. \u4E0D\u5B9A\u957F\u5EA6\u7684\u6570\u636E\u7C7B\u578B <a class="header-anchor" href="#_2-\u4E0D\u5B9A\u957F\u5EA6\u7684\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a></h2><p>\u4E86\u89E3\u5F53\u524D\u7F16\u7A0B\u73AF\u5883\u4E2D <code>char</code> <code>unsigned char</code> <code>long</code> <code>double</code> \u7C7B\u578B\u6240\u8868\u793A\u6570\u636E\u7684\u5B58\u50A8\u683C\u5F0F\u4E0E\u8303\u56F4\u3002</p><p>\u5982\u5728 Windows 10 64 \u4F4D\u7CFB\u7EDF\u4E2D\u7684 CodeBlocks 20.03 \u7F16\u8BD1\u73AF\u5883\u548C\u7528 VS Code \u914D\u5408 MinGW-w64 \u7F16\u8BD1\u73AF\u5883\u4E0B\u90FD\u53EF\u4EE5\u83B7\u5F97\u4EE5\u4E0B\u4FE1\u606F\uFF1A</p><div class="language-c"><button class="copy"></button><span class="lang">c</span><pre><code><span class="line"><span style="color:#A6ACCD;">char_max </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">127</span></span>
<span class="line"><span style="color:#A6ACCD;">char_min </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">128</span></span>
<span class="line"><span style="color:#C792EA;">unsigned</span><span style="color:#A6ACCD;"> char_max </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255</span></span>
<span class="line"><span style="color:#A6ACCD;">long_max </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2147483647</span></span>
<span class="line"><span style="color:#A6ACCD;">long_min </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">2147483648</span></span>
<span class="line"><span style="color:#A6ACCD;">double_min </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1.79769e</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">308</span></span>
<span class="line"><span style="color:#A6ACCD;">double_0</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">4.94066e</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">324</span></span>
<span class="line"><span style="color:#A6ACCD;">double_0</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4.94066e</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">324</span></span>
<span class="line"><span style="color:#A6ACCD;">double_max </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.79769e</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">308</span></span>
<span class="line"></span></code></pre></div><h2 id="_4-\u4E0D\u540C\u7C7B\u578B\u7684\u6570\u636E\u8868\u793A" tabindex="-1">4. \u4E0D\u540C\u7C7B\u578B\u7684\u6570\u636E\u8868\u793A <a class="header-anchor" href="#_4-\u4E0D\u540C\u7C7B\u578B\u7684\u6570\u636E\u8868\u793A" aria-hidden="true">#</a></h2><p>\u7528 <code>printf</code> \u51FD\u6570\u7684 <code>%c</code> <code>%d</code> <code>%u</code> <code>%x</code> <code>%o</code> <code>%lld</code> <code>%f</code> <code>%lf</code> \u7B49\u5404\u5F0F\u5206\u522B\u6253\u5370\u5B8F\u5B9A\u4E49\u7684 <code>-1</code> \u7684\u503C\uFF0C\u7136\u540E\u4FEE\u6539\u5B8F\u5B9A\u4E49\u7684\u503C\u5206\u522B\u4E3A <code>255</code> \u548C <code>255.0</code> \u5E76\u6253\u5370\uFF0C\u6700\u540E\u5206\u6790\u6BD4\u8F83\u6253\u5370\u7ED3\u679C\u3002</p><p>\u5982\u5728 Windows 10 64 \u4F4D\u7CFB\u7EDF\u4E2D\u7684 CodeBlocks 20.03 \u7F16\u8BD1\u73AF\u5883\u548C\u7528 VS Code \u914D\u5408 MinGW-w64 \u7F16\u8BD1\u73AF\u5883\u4E0B\u90FD\u53EF\u4EE5\u8F93\u51FA\u4EE5\u4E0B\u4E09\u7EC4\u6570\u636E\uFF1A</p><div class="language-c"><button class="copy"></button><span class="lang">c</span><pre><code><span class="line"><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4294967295</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ffffffff</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">37777777777</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4294967295</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.000000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.000000</span></span>
<span class="line"></span></code></pre></div><div class="language-c"><button class="copy"></button><span class="lang">c</span><pre><code><span class="line"><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ff</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">377</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.000000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.000000</span></span>
<span class="line"></span></code></pre></div><div class="language-c"><button class="copy"></button><span class="lang">c</span><pre><code><span class="line"><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4643176031446892544</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255.000000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255.000000</span></span>
<span class="line"></span></code></pre></div>`,15),e=[p];function c(t,r,C,D,y,F){return n(),a("div",null,e)}const i=s(l,[["render",c]]);export{A as __pageData,i as default};
