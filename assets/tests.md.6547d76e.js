import{_ as n,c as s,o as a,a as t}from"./app.0a89c418.js";const m='{"title":"@obewds/obewds-tw-config Tests","description":"","frontmatter":{"head":[["link",{"rel":"icon","href":"favicon.ico"}]]},"headers":[{"level":2,"title":"Testing Status","slug":"testing-status"},{"level":2,"title":"Vitest Tests","slug":"vitest-tests"}],"relativePath":"tests.md"}',p={},e=t(`<h1 id="obewds-obewds-tw-config-tests" tabindex="-1">@obewds/obewds-tw-config Tests <a class="header-anchor" href="#obewds-obewds-tw-config-tests" aria-hidden="true">#</a></h1><h2 id="testing-status" tabindex="-1">Testing Status <a class="header-anchor" href="#testing-status" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">CURRENT STATUS</p><p><strong>100%</strong> Coverage<br><strong>100%</strong> Passing</p></div><h2 id="vitest-tests" tabindex="-1">Vitest Tests <a class="header-anchor" href="#vitest-tests" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// ./tests/ObewdsTwConfig.test.js</span>

<span class="token keyword">import</span> ObewdsTwConfig <span class="token keyword">from</span> <span class="token string">&#39;@/data/obewds-tw-config&#39;</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;ObewdsTwConfig component imports successfully&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>ObewdsTwConfig<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;ObewdsTwConfig can be modified with a new bg default palette color primary value&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">let</span> config <span class="token operator">=</span> ObewdsTwConfig
    <span class="token keyword">let</span> testClass <span class="token operator">=</span> <span class="token string">&#39;test-class another-class&#39;</span>
    
    config<span class="token punctuation">.</span>bg<span class="token punctuation">.</span>palettes<span class="token punctuation">.</span>default<span class="token punctuation">.</span>colors<span class="token punctuation">.</span>primary <span class="token operator">=</span> testClass

    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toContain</span><span class="token punctuation">(</span>testClass<span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;ObewdsTwConfig can be extended with a new default bg palette color&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">let</span> config <span class="token operator">=</span> ObewdsTwConfig
    <span class="token keyword">let</span> testKey <span class="token operator">=</span> <span class="token string">&#39;testKey&#39;</span>
    <span class="token keyword">let</span> testClass <span class="token operator">=</span> <span class="token string">&#39;test-class&#39;</span>

    config<span class="token punctuation">.</span>bg<span class="token punctuation">.</span>palettes<span class="token punctuation">.</span>default<span class="token punctuation">.</span>colors<span class="token punctuation">[</span>testKey<span class="token punctuation">]</span> <span class="token operator">=</span> testClass

    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toContain</span><span class="token punctuation">(</span>testKey<span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toContain</span><span class="token punctuation">(</span>testClass<span class="token punctuation">)</span>
    
<span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;ObewdsTwConfig can be extended with a new bg palette and color&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">let</span> config <span class="token operator">=</span> ObewdsTwConfig
    <span class="token keyword">let</span> testPalette <span class="token operator">=</span> <span class="token string">&#39;test-palette&#39;</span>
    <span class="token keyword">let</span> testKey <span class="token operator">=</span> <span class="token string">&#39;test-key&#39;</span>
    <span class="token keyword">let</span> testClass <span class="token operator">=</span> <span class="token string">&#39;test-class another-class&#39;</span>
    <span class="token keyword">let</span> palette <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">colors</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    palette<span class="token punctuation">.</span>colors<span class="token punctuation">[</span>testKey<span class="token punctuation">]</span> <span class="token operator">=</span> testClass
    config<span class="token punctuation">.</span>bg<span class="token punctuation">.</span>palettes<span class="token punctuation">[</span>testPalette<span class="token punctuation">]</span> <span class="token operator">=</span> palette

    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toContain</span><span class="token punctuation">(</span>testPalette<span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toContain</span><span class="token punctuation">(</span>testKey<span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toContain</span><span class="token punctuation">(</span>testClass<span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div>`,5),o=[e];function c(l,u,i,r,k,b){return a(),s("div",null,o)}var f=n(p,[["render",c]]);export{m as __pageData,f as default};
