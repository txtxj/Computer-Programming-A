import{_ as l,c as e,o as i,a}from"./app.02b8ab95.js";const b=JSON.parse('{"title":"C1\uFF1A\u5927\u7D20\u6570\u751F\u6210","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9E\u9A8C\u76EE\u6807","slug":"\u5B9E\u9A8C\u76EE\u6807"},{"level":2,"title":"\u5B9E\u9A8C\u8981\u6C42","slug":"\u5B9E\u9A8C\u8981\u6C42"},{"level":2,"title":"\u7248\u672C\u4E0E\u5206\u6570","slug":"\u7248\u672C\u4E0E\u5206\u6570"}],"relativePath":"labs/c1.md","lastUpdated":1665494835000}'),t={name:"labs/c1.md"},o=a('<h1 id="c1\uFF1A\u5927\u7D20\u6570\u751F\u6210" tabindex="-1">C1\uFF1A\u5927\u7D20\u6570\u751F\u6210 <a class="header-anchor" href="#c1\uFF1A\u5927\u7D20\u6570\u751F\u6210" aria-hidden="true">#</a></h1><p><strong>\u76EE\u524D\u5B9E\u9A8C\u8BE6\u7EC6\u8981\u6C42\u8FD8\u672A\u786E\u5B9A\uFF0C\u4EE5\u4E0B\u5185\u5BB9\u4EC5\u4F5C\u4E3A\u53C2\u8003\uFF0C\u672A\u6765\u53EF\u80FD\u8FDB\u884C\u5C0F\u5E45\u5EA6\u4FEE\u6539\u3002</strong></p><h2 id="\u5B9E\u9A8C\u76EE\u6807" tabindex="-1">\u5B9E\u9A8C\u76EE\u6807 <a class="header-anchor" href="#\u5B9E\u9A8C\u76EE\u6807" aria-hidden="true">#</a></h2><p>\u7F16\u5199\u4E00\u4E2A\u7A0B\u5E8F\uFF0C\u968F\u673A\u4EA7\u751F\u4E00\u4E2A <a href="https://en.wikipedia.org/wiki/Blum_integer" target="_blank" rel="noreferrer">blum \u6570</a>\uFF0C\u5E76\u5BF9\u5176\u8FDB\u884C\u7D20\u6027\u6D4B\u8BD5\u3002</p><blockquote><p>blum \u6570\u662F\u4E24\u4E2A\u5927\u7D20\u6570 p \u548C q \u7684\u4E58\u79EF\uFF0C\u5176\u4E2D p \u548C q \u5747\u662F\u6A21 4 \u4F59 3 \u7684\u5927\u7D20\u6570</p></blockquote><ul><li>\u4F7F\u7528 Miller Rabin \u7B97\u6CD5\u6765\u6D4B\u8BD5\u7D20\u6570\uFF0C\u5728\u5224\u5B9A\u7D20\u6570\u65F6\u8BBE\u5B9A\u968F\u673A\u9009\u53D6 10 \u4E2A\u6570\u6D4B\u8BD5\u901A\u8FC7</li><li>\u4EA7\u751F\u7684 blum \u6570\u4EE5 16 \u8FDB\u5236\u5F62\u5F0F\u5728\u5C4F\u5E55\u663E\u793A</li><li>\u4F7F\u7528 20 \u4E2A\u968F\u673A\u6570\u5BF9\u4EA7\u751F\u7684 blum \u6570\u8FDB\u884C\u7D20\u6027\u6D4B\u8BD5\uFF0C\u7ED9\u51FA 20 \u6B21\u7684\u6D4B\u8BD5\u7ED3\u679C</li><li>\u91CD\u590D\u4E0A\u8FF0\u8FC7\u7A0B\uFF0C\u4EA7\u751F 10000 \u4E2A blum \u6570\uFF0C\u7EDF\u8BA1 blum \u6570\u901A\u8FC7 Miller Rabin \u6D4B\u8BD5\u7684\u6B21\u6570</li></ul><h2 id="\u5B9E\u9A8C\u8981\u6C42" tabindex="-1">\u5B9E\u9A8C\u8981\u6C42 <a class="header-anchor" href="#\u5B9E\u9A8C\u8981\u6C42" aria-hidden="true">#</a></h2><ul><li><span style="color:#b94047;">\u9650\u5B9A\u4F7F\u7528 C99</span></li><li>\u53EA\u5141\u8BB8\u4F7F\u7528 <code>stdio</code> <code>stdlib</code> <code>time</code> \u5E93\uFF0C <code>string</code> \u5E93\u4E2D\u5185\u5BB9\u9700\u81EA\u5DF1\u5B9E\u73B0</li><li>\u5141\u8BB8 O2 \u4F18\u5316</li><li>\u6027\u80FD\u6D4B\u8BD5\u5C06\u4F7F\u7528\u7EDF\u4E00\u7684\u673A\u5668\uFF08\u914D\u7F6E\u672A\u5B9A\uFF09\uFF0C\u6682\u5B9A\u6027\u80FD\u6D4B\u8BD5\u65F6\u4E0D\u5141\u8BB8\u4F7F\u7528\u591A\u7EBF\u7A0B</li><li>\u5355\u4EBA\u5B8C\u6210\uFF0C\u622A\u6B62\u65F6\u95F4\u4E3A11\u67081\u65E5\u665A\u5B9E\u9A8C\u8BFE\u7ED3\u675F\u65F6\u3002</li></ul><h2 id="\u7248\u672C\u4E0E\u5206\u6570" tabindex="-1">\u7248\u672C\u4E0E\u5206\u6570 <a class="header-anchor" href="#\u7248\u672C\u4E0E\u5206\u6570" aria-hidden="true">#</a></h2><ul><li>long \u7248\u672C\uFF1A\u5728 20 \u79D2\u5185\u4EA7\u751F\u4E00\u4E2A 50 \u4F4D\u7684 blum \u6570\uFF08long long \u578B\uFF09\uFF0C\u5176\u4E2D p \u548C q \u5747\u4E3A long \u578B</li><li>\u5927\u6570\u7248\u672C\uFF1A\u5728 2 \u5206\u949F\u5185\u968F\u673A\u4EA7\u751F\u4E00\u4E2A 1024 \u4F4D\u7684 blum \u6570\uFF0C\u5176\u4E2D p \u548C q \u5747\u81F3\u5C11\u957F 500 \u6BD4\u7279</li><li>\u4EC5\u5B8C\u6210 long \u7248\u672C\uFF0C\u6EE1\u5206 5 \u5206</li><li>\u5B8C\u6210 long \u7248\u672C\uFF0C\u5927\u6570\u7248\u672C\u672A\u5B8C\u6210\u529F\u80FD\uFF0C5 ~ 10 \u5206</li><li>\u5B8C\u6210 long \u7248\u672C\uFF0C\u5927\u6570\u7248\u672C\u5177\u5907\u529F\u80FD\uFF0C\u4F46\u8FBE\u4E0D\u5230\u6027\u80FD\uFF0C10 ~ 15 \u5206</li><li>\u5B8C\u6210\u5927\u6570\u7248\u672C\uFF08\u65E0\u9700\u5B8C\u6210 long \u7248\u672C\uFF09\uFF0C\u8FBE\u5230\u6027\u80FD\uFF0C\u6EE1\u5206 15 \u5206</li><li><span style="color:#0095d9;">\u52A9\u6559\u73B0\u573A\u68C0\u67E5\uFF0C\u4E0D\u9700\u8981\u63D0\u4EA4\u62A5\u544A</span></li></ul>',10),r=[o];function n(s,d,c,h,u,_){return i(),e("div",null,r)}const g=l(t,[["render",n]]);export{b as __pageData,g as default};
