using ControleDeContatos.Models;

namespace ControleDeContatos.Repository
{
    public interface IContatoRepository
    {
        ContatoModel Adicionar (ContatoModel contato);
    }
}
