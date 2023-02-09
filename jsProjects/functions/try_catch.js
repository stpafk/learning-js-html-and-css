
const main = () => {
    try {
        codigo = 1
    } catch (error){
        console.error(`Deu este erro: ${error}`)
    } finally {
        console.info('esse valor sempre aparecerá')
    }
}

main()