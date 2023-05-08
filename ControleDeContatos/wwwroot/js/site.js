// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.




function getDataTable(id) {
    $(id).DataTable({
        "ordering": true,
        "paging": true,
        "searching": true,
        "oLanguage": {
            "sEmptyTable": "Nenhum registro encontrado na tabela",
            "sInfo": "Mostrar _START_ até _END_ de _TOTAL_ registros",
            "sInfoEmpty": "Mostrar 0 até 0 de 0 Registros",
            "sInfoFiltered": "(Filtrar de _MAX_ total registros)",
            "sInfoPostFix": "",
            "sInfoThousands": ".",
            "sLengthMenu": "Mostrar _MENU_ registros por pagina",
            "sLoadingRecords": "Carregando...",
            "sProcessing": "Processando...",
            "sZeroRecords": "Nenhum registro encontrado",
            "sSearch": "Pesquisar",
            "oPaginate": {
                "sNext": "Proximo",
                "sPrevious": "Anterior",
                "sFirst": "Primeiro",
                "sLast": "Ultimo"
            },
            "oAria": {
                "sSortAscending": ": Ordenar colunas de forma ascendente",
                "sSortDescending": ": Ordenar colunas de forma descendente"
            }
        }
    });
}

$(document).ready(function () {
    getDataTable("#table-contatos");
    getDataTable("#table-usuarios");

    $('.btn-total-contatos').click(function () {
        var usuarioId = $(this).attr('usuario-id');
        $('#modalContatosUsuario').modal();
        $.ajax({
            type: 'GET',
            url: '/Usuario/ListarContatosPorUsuarioId/' + usuarioId,
            success: function (result) {
                $("#listaContatosUsuario").html(result);
                getDatatable('#table-contatos-usuario');
            }
        });

    });
})
$('.close-alert').click(function () {
    $('.alert').hide('hide');
})