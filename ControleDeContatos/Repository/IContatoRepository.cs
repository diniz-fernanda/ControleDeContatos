using ControleDeContatos.Models;

namespace ControleDeContatos.Repository
{
    public interface IContatoRepository
    {
        List<ContatoModel> BuscarTodos();
        ContatoModel Adicionar (ContatoModel contato);
    }
}
