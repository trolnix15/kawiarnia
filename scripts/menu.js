function change_darkness(id)
    {
        let darkness=document.getElementById("darkness");
        let info=document.getElementById("info");
        let name=document.getElementById("item_name");
        if(id==0)
        {
            darkness.style.display="none";
            info.style.display="none";
        }
        else
        {
            darkness.style.display="block";
            info.style.display="block";
            name.innerHTML=id;
        }
    }
    window.onload=function addEventListener_to_spans(){
        let obj=document.getElementsByClassName("content")[0];
        obj.childNodes.forEach(element => {
            element.childNodes.forEach((element2,index) => {  
                if(index>1)
                {
                    let p=element2.tagName;
                    if(p == "SPAN")   
                        element2.addEventListener('click', function(){change_darkness(element2.childNodes[1].textContent)});         
                }
            });
        });
    }