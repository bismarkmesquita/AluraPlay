async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos")
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

async function criaVideo(titulo, descricao, url, imagem) {
    await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type:": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })

    if(!conexao.ok) {
        throw new Error("Não foi possível enviar o vídeo")
    }

    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}

async function buscaVideo(termoBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoBusca}`)
    const conexaoConvertida = conexao.json()

    return conexaoConvertida
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}



// usar essa aplicação para colocar uma funcionalidade parecida no projeto "Geek Burguer", com um formulário onde a pessoa possa adicionar novos itens no cardápio direto da aplicação. Mas essa funcionalidade precisa ser exclusiva do estabelecimento.