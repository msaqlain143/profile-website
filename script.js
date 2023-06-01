

document.querySelector('.hamburger').addEventListener('click',()=>{
    document.querySelector('.cross').style.dispaly='none'
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.dispaly='none'
        setTimeout(()=>{
            document.querySelector('.cross').style.dispaly='inline' ,350})
    }

    else
{
        
            document.querySelector('.ham').style.dispaly='inline'
            document.querySelector('.cross').style.dispaly='none'
}
})










