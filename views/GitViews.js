class GitViews{
    constructor(){
        this._titulo = document.getElementById("repo-owner");
        this._tabela = document.getElementById("repo-view");
    
    }
    adicionarRepositorios(model){
        let trs ="";
    
     model.repositories.forEach((i)=>{
        
         trs +=`<tr> 
                <td class="td">${i.nome}</td>
                <td class="td">${i.linguagem}</td>
                <td class="td"><a href="${i.link}">${i.link}</a></td>
                </tr>
                `;
              
     }   
    )

    return `<table id="table-repo">
        <thead>
            <th class="td">Nome</th>
            <th class="td">Linguagem</th>
            <th class="td">Link</th>
        </thead>
        <tbody id="tbody-repo">
           ${trs}
        </tbody>


    </table>`
    }
    
    jogaNaTela(model){
        this._titulo.innerText = model.user;
        this._tabela.innerHTML = this.adicionarRepositorios(model);
    }
}