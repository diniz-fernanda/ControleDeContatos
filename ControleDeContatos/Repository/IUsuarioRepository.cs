using ControleDeContatos.Models;

namespace ControleDeContatos.Repository
{
    public interface IUsuarioRepository
    {
        UsuarioModel BuscarPorLogin(string login);
        UsuarioModel BuscarPorEmailLogin(string email, string login);
        UsuarioModel ListarPorId(int id);
        List<UsuarioModel> BuscarTodos();
        UsuarioModel Adicionar(UsuarioModel contato);
        UsuarioModel Atualizar(UsuarioModel contato);
        UsuarioModel AlterarSenha(AlterarSenhaModel alterarSenhaModel);
        bool Apagar(int id);
    }
}