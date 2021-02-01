class GitController{
    cria(user){
        let model = new GitModel(user);
        model.criarRepositorios();
        let view = new GitViews();
        view.jogaNaTela(model);

    }
    
}