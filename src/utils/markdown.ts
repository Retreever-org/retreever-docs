import MarkdownIt from "markdown-it";
import anchor from "markdown-it-anchor";
import hljs from "highlight.js";

export const md = new MarkdownIt({
  html: true,
  linkify: true,
  highlight(code, _lang) {
    return `<pre class="hljs"><code>${hljs.highlightAuto(code).value}</code></pre>`;
  },
}).use(anchor);
