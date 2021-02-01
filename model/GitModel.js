class GitModel{
    constructor(user){
        this._user = user;
        this._repositories = [];

    }
    get user(){
        return this._user;
    }
    get repositories(){
        return [].concat(this._repositories);
    }
    criarRepositorios(){
        let request = new XMLHttpRequest();

        request.open("GET",`https://api.github.com/users/${this._user}/repos`,false);

        request.addEventListener("load",()=>{

           if(request.status == 200){ 
                let response = request.responseText;
                response = JSON.parse(response);
                response.forEach((objeto) => {
                    let repositorio = {
                        nome:objeto.name,
                        login:objeto.owner.login,
                        link:objeto.html_url,
                        linguagem:objeto.language
                    }
                    
                    this._repositories.push(repositorio);
                    
                })
            }
            else if(request.status == 404){
                throw alert("404 - User not Found");
            }
            else{
                throw alert("Unknown error - please verify the user anda try again.");
            }    
        });
        request.send();

    }
}