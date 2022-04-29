import{_ as n,c as s,o as a,a as p}from"./app.e4eeda92.js";const m='{"title":"@obewds/obewds-tw-config Component","description":"","frontmatter":{"head":[["link",{"rel":"icon","href":"favicon.ico"}]]},"headers":[{"level":2,"title":"Vue Component Code","slug":"vue-component-code"},{"level":2,"title":"ES Module Version","slug":"es-module-version"},{"level":2,"title":"UMD Version","slug":"umd-version"},{"level":2,"title":"CJS Version","slug":"cjs-version"},{"level":2,"title":"IIFE (Browser) Code","slug":"iife-browser-code"}],"relativePath":"component.md"}',t={},o=p(`<div class="danger custom-block"><p class="custom-block-title">WARNING</p><p>This is an example GitHub Pages site and is NOT intended for actual use in real projects/products!</p></div><h1 id="obewds-obewds-tw-config-component" tabindex="-1">@obewds/obewds-tw-config Component <a class="header-anchor" href="#obewds-obewds-tw-config-component" aria-hidden="true">#</a></h1><h2 id="vue-component-code" tabindex="-1">Vue Component Code <a class="header-anchor" href="#vue-component-code" aria-hidden="true">#</a></h2><p>Pure Vue.js version</p><div class="language-vue line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

    type ObewdsTwConfigProps <span class="token operator">=</span> <span class="token punctuation">{</span>
        text<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">undefined</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">withDefaults</span><span class="token punctuation">(</span>
        defineProps<span class="token operator">&lt;</span>ObewdsTwConfigProps<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            {{ text }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-else</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span>ObewdsTwConfig<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="es-module-version" tabindex="-1">ES Module Version <a class="header-anchor" href="#es-module-version" aria-hidden="true">#</a></h2><p>ESM version</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> openBlock<span class="token punctuation">,</span> createElementBlock<span class="token punctuation">,</span> Fragment<span class="token punctuation">,</span> createTextVNode<span class="token punctuation">,</span> toDisplayString<span class="token punctuation">,</span> renderSlot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> _hoisted_1 <span class="token operator">=</span> <span class="token comment">/* @__PURE__ */</span> <span class="token function">createTextVNode</span><span class="token punctuation">(</span><span class="token string">&quot;ObewdsTwConfig&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> _sfc_main <span class="token operator">=</span> <span class="token comment">/* @__PURE__ */</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">__props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">_ctx<span class="token punctuation">,</span> _cache</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">openBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">createElementBlock</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
        __props<span class="token punctuation">.</span>text <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token function">openBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">createElementBlock</span><span class="token punctuation">(</span>Fragment<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
          <span class="token function">createTextVNode</span><span class="token punctuation">(</span><span class="token function">toDisplayString</span><span class="token punctuation">(</span>__props<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">renderSlot</span><span class="token punctuation">(</span>_ctx<span class="token punctuation">.</span>$slots<span class="token punctuation">,</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
          _hoisted_1
        <span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> _sfc_main <span class="token keyword">as</span> ObewdsTwConfig <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="umd-version" tabindex="-1">UMD Version <a class="header-anchor" href="#umd-version" aria-hidden="true">#</a></h2><p>Version used by Node.js (Universal version for Common.js/AMD)</p><div class="language-js line-numbers-mode"><pre><code><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">t<span class="token punctuation">,</span>e</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">typeof</span> exports<span class="token operator">==</span><span class="token string">&quot;object&quot;</span><span class="token operator">&amp;&amp;</span><span class="token keyword">typeof</span> module<span class="token operator">!=</span><span class="token string">&quot;undefined&quot;</span><span class="token operator">?</span><span class="token function">e</span><span class="token punctuation">(</span>exports<span class="token punctuation">,</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">typeof</span> define<span class="token operator">==</span><span class="token string">&quot;function&quot;</span><span class="token operator">&amp;&amp;</span>define<span class="token punctuation">.</span>amd<span class="token operator">?</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;exports&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;vue&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>e<span class="token punctuation">)</span><span class="token operator">:</span><span class="token punctuation">(</span>t<span class="token operator">=</span><span class="token keyword">typeof</span> globalThis<span class="token operator">!=</span><span class="token string">&quot;undefined&quot;</span><span class="token operator">?</span>globalThis<span class="token operator">:</span>t<span class="token operator">||</span>self<span class="token punctuation">,</span><span class="token function">e</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>ObewdsTwConfig<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>t<span class="token punctuation">.</span>Vue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">t<span class="token punctuation">,</span>e</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span><span class="token keyword">const</span> o<span class="token operator">=</span>e<span class="token punctuation">.</span><span class="token function">createTextVNode</span><span class="token punctuation">(</span><span class="token string">&quot;ObewdsTwConfig&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>i<span class="token operator">=</span>e<span class="token punctuation">.</span><span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token keyword">default</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span><span class="token punctuation">(</span><span class="token parameter">d<span class="token punctuation">,</span>s</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">openBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>e<span class="token punctuation">.</span><span class="token function">createElementBlock</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token punctuation">[</span>n<span class="token punctuation">.</span>text<span class="token operator">?</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">openBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>e<span class="token punctuation">.</span><span class="token function">createElementBlock</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>Fragment<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">key</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span>e<span class="token punctuation">.</span><span class="token function">createTextVNode</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">toDisplayString</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">:</span>e<span class="token punctuation">.</span><span class="token function">renderSlot</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>$slots<span class="token punctuation">,</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">key</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">[</span>o<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>t<span class="token punctuation">.</span>ObewdsTwConfig<span class="token operator">=</span>i<span class="token punctuation">,</span>Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">__esModule</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token operator">!</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>toStringTag<span class="token punctuation">]</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token string">&quot;Module&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="cjs-version" tabindex="-1">CJS Version <a class="header-anchor" href="#cjs-version" aria-hidden="true">#</a></h2><p>CommonJS version</p><div class="language-js line-numbers-mode"><pre><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span>exports<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">__esModule</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token operator">!</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>toStringTag<span class="token punctuation">]</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token string">&quot;Module&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">var</span> e<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">const</span> n<span class="token operator">=</span>e<span class="token punctuation">.</span><span class="token function">createTextVNode</span><span class="token punctuation">(</span><span class="token string">&quot;ObewdsTwConfig&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>r<span class="token operator">=</span>e<span class="token punctuation">.</span><span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token keyword">default</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">t</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span><span class="token punctuation">(</span><span class="token parameter">o<span class="token punctuation">,</span>l</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">openBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>e<span class="token punctuation">.</span><span class="token function">createElementBlock</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token punctuation">[</span>t<span class="token punctuation">.</span>text<span class="token operator">?</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">openBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>e<span class="token punctuation">.</span><span class="token function">createElementBlock</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>Fragment<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">key</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span>e<span class="token punctuation">.</span><span class="token function">createTextVNode</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">toDisplayString</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">:</span>e<span class="token punctuation">.</span><span class="token function">renderSlot</span><span class="token punctuation">(</span>o<span class="token punctuation">.</span>$slots<span class="token punctuation">,</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">key</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>exports<span class="token punctuation">.</span>ObewdsTwConfig<span class="token operator">=</span>r<span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="iife-browser-code" tabindex="-1">IIFE (Browser) Code <a class="header-anchor" href="#iife-browser-code" aria-hidden="true">#</a></h2><p>Version used for browser instances</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">var</span> <span class="token function-variable function">ObewdsTwConfig</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">t<span class="token punctuation">,</span>e</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span><span class="token keyword">const</span> o<span class="token operator">=</span>e<span class="token punctuation">.</span><span class="token function">createTextVNode</span><span class="token punctuation">(</span><span class="token string">&quot;ObewdsTwConfig&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>l<span class="token operator">=</span>e<span class="token punctuation">.</span><span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token keyword">default</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span><span class="token punctuation">(</span><span class="token parameter">r<span class="token punctuation">,</span>c</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">openBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>e<span class="token punctuation">.</span><span class="token function">createElementBlock</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token punctuation">[</span>n<span class="token punctuation">.</span>text<span class="token operator">?</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">openBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>e<span class="token punctuation">.</span><span class="token function">createElementBlock</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>Fragment<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">key</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span>e<span class="token punctuation">.</span><span class="token function">createTextVNode</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">toDisplayString</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">:</span>e<span class="token punctuation">.</span><span class="token function">renderSlot</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>$slots<span class="token punctuation">,</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">key</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">[</span>o<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">return</span> t<span class="token punctuation">.</span>ObewdsTwConfig<span class="token operator">=</span>l<span class="token punctuation">,</span>Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">__esModule</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token operator">!</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>toStringTag<span class="token punctuation">]</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token string">&quot;Module&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>t<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>Vue<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,17),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var g=n(t,[["render",c]]);export{m as __pageData,g as default};
