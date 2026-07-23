         </div>
-        <div className="hero-clover"><CloverMark /></div>
       </section>
diff --git a/src/styles.css b/src/styles.css
index d302793..hero001 100644
--- a/src/styles.css
+++ b/src/styles.css
@@ -252,3 +252,147 @@
   }
 }
+
+/* ===== HOME HERO SHOWCASE ===== */
+.hero.hero--home.hero-showcase{
+  min-height:760px;
+  display:flex;
+  align-items:center;
+  padding:76px 28px 72px;
+  background:
+    linear-gradient(90deg, rgba(0,0,0,.96) 0%, rgba(0,0,0,.86) 34%, rgba(0,0,0,.42) 62%, rgba(0,0,0,.18) 100%),
+    linear-gradient(0deg, rgba(0,0,0,.72) 0%, rgba(0,0,0,.18) 40%, rgba(0,0,0,.10) 100%),
+    url('/images/backgrounds/sudor-hero-1.png') center center/cover no-repeat,
+    var(--ink);
+}
+.hero.hero--home.hero-showcase:after{
+  content:"";
+  position:absolute;
+  inset:auto 0 0 0;
+  height:150px;
+  background:linear-gradient(transparent, rgba(19,19,18,.96));
+  pointer-events:none;
+}
+.hero-showcase-inner{
+  width:100%;
+  max-width:1220px;
+  z-index:1;
+}
+.hero-showcase-inner>*{
+  max-width:610px;
+}
+.hero-kicker{
+  color:var(--gold);
+  text-shadow:0 2px 14px rgba(0,0,0,.75);
+}
+.hero-title{
+  display:flex;
+  flex-direction:column;
+  gap:6px;
+  margin:18px 0 18px;
+  font-size:112px;
+  line-height:.88;
+  letter-spacing:0;
+  text-shadow:0 4px 22px rgba(0,0,0,.85);
+}
+.hero-title span{
+  display:block;
+}
+.hero-title .g{
+  color:var(--gold);
+}
+.hero-rule{
+  display:block;
+  width:56px;
+  height:4px;
+  margin:0 0 18px;
+  background:var(--gold);
+}
+.hero-showcase-sub{
+  max-width:520px;
+  font-size:20px;
+  line-height:1.42;
+  color:#f1f0ea;
+  text-shadow:0 2px 14px rgba(0,0,0,.8);
+}
+.hero-trades{
+  display:flex;
+  align-items:flex-start;
+  gap:0;
+  margin:26px 0;
+}
+.hero-trade{
+  width:118px;
+  min-height:76px;
+  display:flex;
+  flex-direction:column;
+  align-items:center;
+  justify-content:flex-start;
+  gap:8px;
+  padding:0 16px;
+  border-right:1px solid rgba(236,235,230,.36);
+  color:var(--bone);
+  font-family:var(--fc);
+  text-transform:uppercase;
+  font-weight:700;
+  font-size:13px;
+  line-height:1.05;
+  text-align:center;
+  text-shadow:0 2px 12px rgba(0,0,0,.9);
+}
+.hero-trade:first-child{
+  padding-left:0;
+}
+.hero-trade:last-child{
+  border-right:0;
+}
+.hero-trade-icon{
+  display:flex;
+  align-items:center;
+  justify-content:center;
+  height:32px;
+  color:var(--gold);
+}
+.hero-trade-icon svg,
+.hero-cta svg{
+  width:28px;
+  height:28px;
+  fill:currentColor;
+}
+.hero-cta .btn{
+  min-height:48px;
+}
+.hero-demo-btn{
+  background:rgba(55,178,77,.08);
+  color:var(--green);
+  border:1px solid rgba(55,178,77,.75);
+  box-shadow:none;
+}
+.hero-demo-btn:hover{
+  background:rgba(55,178,77,.16);
+}
+
+@media(max-width:1100px){
+  .hero-title{font-size:92px;}
+  .hero.hero--home.hero-showcase{background-position:center right 36%;}
+}
+@media(max-width:860px){
+  .hero.hero--home.hero-showcase{
+    min-height:auto;
+    padding:68px 20px 58px;
+    background:
+      linear-gradient(rgba(0,0,0,.78), rgba(0,0,0,.88)),
+      url('/images/backgrounds/sudor-hero-1.png') center center/cover no-repeat,
+      var(--ink);
+  }
+  .hero-title{font-size:64px;}
+  .hero-showcase-sub{font-size:18px;}
+  .hero-trades{
+    display:grid;
+    grid-template-columns:1fr 1fr;
+    gap:10px;
+    max-width:420px;
+  }
+  .hero-trade{
+    width:auto;
+    min-height:72px;
+    padding:12px;
+    border:1px solid rgba(236,235,230,.18);
+    border-radius:10px;
+    background:rgba(0,0,0,.34);
+  }
+  .hero-cta .btn{
+    width:100%;
+    justify-content:center;
+  }
+}
+@media(max-width:520px){
+  .hero.hero--home.hero-showcase{
+    padding:54px 18px 48px;
+    background-position:center;
+  }
+  .hero-title{
+    font-size:48px;
+    gap:4px;
+  }
+  .hero-trades{
+    grid-template-columns:1fr 1fr;
+  }
+  .hero-trade{
+    font-size:12px;
+  }
+}
