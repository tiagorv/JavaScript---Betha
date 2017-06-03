function consultaBanco(sql, trataRegistro){
    db.query(sql, function(err, data){
        if (err){
            trataRegistro(err);
        }else{
            trataRegistro(null, data);
        }
    });
}

var lista = [];

consultaBanco("SELECT * FROM CIDADES", function(err, data){
    if (!err){
        lista.push({
            nome: data.get("nome"),
            estado: data.get("estado")
        })
    }
})