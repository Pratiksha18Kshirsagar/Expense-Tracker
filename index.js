 let btn = document.querySelector("#btn");
        let amt = document.querySelector("#amt");
        let des = document.querySelector("#des");
        let cat = document.querySelector("#cat");
        let ul = document.querySelector("#ul");
        btn.addEventListener("click", () => {
              let li = document.createElement("li");
            
              li.innerHTML = `${amt.value}-${des.value}-${cat.value} <button onclick="this.parentElement.remove()">Delete</button> <button onclick="editItem(this)">Edit</button>`;
              
              ul.append(li);
        })
        function editItem(e){
            let li = e.parentElement;
            let details = li.firstChild.textContent.split("-");
            amt.value = details[0];
            des.value = details[1];
            cat.value = details[2];
            li.remove();
        }