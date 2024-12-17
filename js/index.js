document.addEventListener('DOMContentLoaded',()=>{
    const list=document.getElementById('list')
    const btn=document.getElementById('btn')
    const inp=document.getElementById('inp')
    const error=document.getElementById('error')

    btn.addEventListener('click',()=>{
        if(inp.value===""){
            error.textContent="Enter Something..."
        }
        else{
            error.textContent=""
            var li=document.createElement('li')
            li.innerHTML=`<button class='com'>Complete</button><span>${inp.value}</span><button class='del'>Delete</button>`
            list.appendChild(li)
            inp.value=""
        }


        const del=document.querySelectorAll('button.del')

        del.forEach((item)=>{
            item.addEventListener('click',()=>{
                const parent=item.parentElement
                parent.remove()
            })
        })



        const com=document.querySelectorAll('button.com')

        com.forEach((item)=>{
            item.addEventListener('click',()=>{
                const parent=item.parentElement
                parent.classList.add('com')
            })
        })

        

        
    })


   

})