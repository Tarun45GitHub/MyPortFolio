const sidebar=document.querySelector(".sidebar");
    function showsidebar(){
        sidebar.style.display='flex';
    }
    function closesidebar(){
         sidebar.style.display='none';
    }

const section=document.querySelectorAll('section');
const navlist=document.querySelectorAll(".a");

window.onscroll=()=>{
    section.forEach((sec)=>{
        const top=window.scrollY;
        const offset=sec.offsetTop -170;
        const height=sec.offsetHeight;
        const id=sec.getAttribute('id');

        if(top>=offset && top< offset+height){
            navlist.forEach((link)=>{
                link.classList.remove('active');
                document.querySelector('.a[href*=' +id+ ']').classList.add('active')
            })
        }
    })
}