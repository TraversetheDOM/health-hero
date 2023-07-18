class t{constructor(t,e,i){this.category=t,this.minBmi=e,this.maxBmi=i}}const e=new t("underweight",-1/0,18.5),i=new t("healthy weight",18.5,24.9),s=new t("overweight",25,29.9),n=new t("obese",30,1/0),a=[e,i,s,n];class h{constructor(t,e){this._weight=t,this._height=e,this._calcBMI(),this._getWeightClassification()}_calcBMI(){this.BMI=parseFloat((this._weight/this._height**2).toFixed(1))}_getBmiCategory(){for(let t of a)if((t.minBmi===-1/0||this.BMI>=t.minBmi)&&(t.maxBmi===1/0||this.BMI<=t.maxBmi))return t}_getWeightClassification(){let t=this._getBmiCategory();this.classification=t.category}_getIdealWeightRangesInKgs(){let t=this._getBmiCategory(),e=t.minBMI===-1/0?null:parseFloat((t.minBmi*this._height**2).toFixed(1)),i=parseFloat(t.maxBMI===1/0?null:(t.maxBmi*this._height**2).toFixed(1));return this._idealWeightRangesInKgs=[e,i],this._idealWeightRangesInKgs}}class r extends h{constructor(t,e){super(t,e),this.#t()}#t(){this.classification==e.category?this.idealWeightMessage=`${this._getIdealWeightRangesInKgs()[1]}kgs and below`:this.classification==n.category?this.idealWeightMessage=`${this._getIdealWeightRangesInKgs()[0]}kgs and above`:this.idealWeightMessage=`${this._getIdealWeightRangesInKgs()[0]}kgs - ${this._getIdealWeightRangesInKgs()[1]}kgs`}}class l extends h{#e;#i;#s;constructor(t,e){super(t,e),this.#n(),this.#a(),this.#t()}#n(){let t=3.28084*this._height;this.#e=Math.floor(t),this.#i=Math.round((t-this.#e)*12)}#a(){let t=this._getBmiCategory(),e=12*this.#e+this.#i,i=t.minBmi===-1/0?null:Math.trunc(t.minBmi*Math.pow(e,2)/703%14),s=t.maxBmi===1/0?null:Math.trunc(t.maxBmi*Math.pow(e,2)/703%14),n=t.minBmi===-1/0?null:Math.trunc(t.minBmi*Math.pow(e,2)/703/14),a=t.maxBmi==1/0?null:Math.trunc(t.maxBmi*Math.pow(e,2)/703/14);return this.#s=[n,i,a,s],this.#s}#t(){this.classification==e.category?this.idealWeightMessage=`${this.#a()[2]}st ${this.#a()[3]}lbs and below`:this.classification==n.category?this.idealWeightMessage=`${this.#a()[0]}st ${this.#a()[1]}lbs and above`:this.idealWeightMessage=`${this.#a()[0]}st ${this.#a()[1]}lbs - ${this.#a()[2]}st ${this.#a()[3]}lbs`}}class g{#h=document.getElementById("metric");#r=document.getElementById("imperial");#l=document.getElementById("weight-in-kg");#g=document.getElementById("height-in-cm");#o=document.getElementById("weight-in-stone");#d=document.getElementById("weight-in-pounds");#u=document.getElementById("height-in-feet");#c=document.getElementById("height-in-inches");#m=document.getElementById("metric-inputs");#I=document.getElementById("imperial-inputs");#p=document.querySelector("div[class='display-result']");constructor(){this.#h.addEventListener("change",this.#b.bind(this)),this.#r.addEventListener("change",this.#b.bind(this)),this.#l.addEventListener("input",this.#M.bind(this)),this.#g.addEventListener("input",this.#M.bind(this)),this.#o.addEventListener("input",this.#M.bind(this)),this.#d.addEventListener("input",this.#M.bind(this)),this.#u.addEventListener("input",this.#M.bind(this)),this.#c.addEventListener("input",this.#M.bind(this))}#b(t){let e=t.target.value;"metric"==e&&(this.#m.classList.add("active"),this.#I.classList.remove("active")),"imperial"==e&&(this.#m.classList.remove("active"),this.#I.classList.add("active"))}#M(){let t;if(this.#h.checked){let e=parseFloat(this.#l.value.trim()),i=parseFloat(this.#g.value.trim());if(!isFinite(e)||!isFinite(i)||e<=0||i<=0){this.#v(e,this.#l),this.#v(i,this.#g);return}this.#B(this.#g,""),this.#B(this.#l,""),t=function(t,e){let i=parseFloat(t.toFixed(1)),s=parseFloat((e/100).toFixed(2));return new r(i,s)}(e,i)}if(this.#r.checked){let e=parseFloat(this.#o.value.trim()),i=parseFloat(this.#d.value.trim()),s=parseFloat(this.#u.value.trim()),n=parseFloat(this.#c.value.trim());if(e<0||i<0||s<0||n<0||e<=0&&i<=0||s<=0&&n<=0||!isFinite(e)||!isFinite(i)||!isFinite(s)||!isFinite(n)){this.#v(e,this.#o),this.#v(i,this.#d),this.#v(s,this.#u),this.#v(n,this.#c);return}this.#B(this.#o,""),this.#B(this.#d,""),this.#B(this.#u,""),this.#B(this.#c,""),t=function(t,e,i,s){let n=parseFloat(((14*t+e)*.45359237).toFixed(1)),a=parseFloat(((12*i+s)*.0254).toFixed(2));return new l(n,a)}(e,i,s,n)}this.#E(t)}#B(t,e){t.nextElementSibling.nextElementSibling.innerText=e,t.setAttribute("aria-invalid","false"),t.nextElementSibling.nextElementSibling.setAttribute("hidden","")}#v(t,e){isFinite(t)?t<=0?(this.#y(e,"Must be greater than 0"),this.#f()):this.#B(e,""):(this.#y(e,"Enter a number"),this.#f())}#y(t,e){t.nextElementSibling.nextElementSibling.innerText=e,t.setAttribute("aria-invalid","true"),t.nextElementSibling.nextElementSibling.removeAttribute("hidden")}#f(){this.#p.innerHTML=`
    <p><strong>Welcome!</strong></p>
    <p>
      Enter your height and weight and you’ll see your BMI result here
    </p>`}#E(t){this.#p.innerHTML=`
    <div class="display-result__details">
      <p>Your BMI is... <br/><strong>${t.BMI}</strong></p>
      <p> Your BMI suggests you're ${"healthy weight"==t.classification?"a":""} ${t.classification}. Your ideal weight is between   <strong>${t.idealWeightMessage}</strong>.</p>
    </div> 
  `}}new g;class o{#w;constructor(t){this.#w=t,this.#W()}#x(t,e){for(let i of t)console.log(i),i.isIntersecting&&(i.target.classList.add("visible"),e.unobserve(i.target))}#W(){let t=new IntersectionObserver(this.#x,{root:null,rootMargin:"0px",threshold:.3});t.observe(this.#w)}}!function(){let t=document.querySelectorAll("section");for(let e of t)new o(e)}();
//# sourceMappingURL=index.a2b7eaee.js.map
