let cart=[];
fetch('products.json').then(r=>r.json()).then(data=>{
window.products=data;
const cats=[...new Set(data.map(x=>x.categoria))];
cat.innerHTML='<option>Todas</option>'+cats.map(c=>`<option>${c}</option>`).join('');
render();
});
function render(){
const q=search.value.toLowerCase();
const c=cat.value||'Todas';
products.innerHTML='';
document.getElementById('products').innerHTML=window.products.filter(p=>(c==='Todas'||p.categoria===c)&&p.nombre.toLowerCase().includes(q)).map(p=>`<div class="card"><h3>${p.nombre}</h3><p>${p.categoria}</p><p>$${p.precio}</p><button onclick="add(${p.id})">Agregar</button></div>`).join('');
}
function add(id){cart.push(window.products.find(x=>x.id===id));updateCart();}
function updateCart(){items.innerHTML=cart.map(x=>`<div>${x.nombre}</div>`).join(''); total.textContent=cart.reduce((a,b)=>a+b.precio,0);}
search.oninput=render; cat.onchange=render;
