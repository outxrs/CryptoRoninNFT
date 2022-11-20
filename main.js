var web3;

async function Connect(){
    await window.web3.currentProvider.enable();
    web3=new Web3(window.web3.currentProvider);
}
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}