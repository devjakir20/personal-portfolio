(function(){
function idx(p){p.querySelectorAll('.l').forEach(function(l,i){l.style.setProperty('--i',i)})}
document.querySelectorAll('.pane').forEach(idx);
document.querySelectorAll('.tab[data-t]').forEach(function(t){
t.addEventListener('click',function(){
document.querySelectorAll('.tab[data-t]').forEach(function(x){x.setAttribute('aria-selected',x===t)});
document.querySelectorAll('.pane').forEach(function(p){p.classList.toggle('on',p.id===t.dataset.t)});
});});
})();
