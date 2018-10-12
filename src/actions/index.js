export const eliminarMovimento = (movimentoTitulo) => {
    return {
        type: 'eliminarMovimento',
        payload: movimentoTitulo
    };
};
