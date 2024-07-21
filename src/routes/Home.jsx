import '../css/style.css'
import mainImg from '../assets/img/mainProdList.svg' 

function Home(){

    return(
        <>
            <main className='main-container'>
                <div className="main-content">
                    <div className='main-text'>
                        <h1 className='home-title'>Cadastro e Listagem de Produtos</h1>
                        <h2 className='home-subtitle'>Gerencie seus produtos com facilidade e eficiência</h2>
                        <button className='home-button'>Confira os Produtos</button>
                    </div>
                    <div className='main-image'>
                        <img id='mainImg' src={mainImg} alt='mulher escolhendo produto'/>
                    </div>
                </div>
            </main>
            <section className='product-registration'>
                <h2>Registrar Produto</h2>
                <form className='product-registration-form'>
                    <div className='product-input'>
                        <label htmlFor='product-name'>Produto</label>
                        <input className='product-input-text' type='text' id='product-name' name='product-name' required/>
                    </div>
                    <div className='product-input'>
                        <label htmlFor='product-description'>Descrição</label>
                        <textarea className='product-input-text' 
                        type='text' id='product-description' 
                        name='product-description' 
                        onInput={(e) => {
                            e.target.style.height = 'auto'; // Reseta a altura para calcular corretamente
                            e.target.style.height = e.target.scrollHeight + 'px'; // Ajusta a altura com base no conteúdo
                          }}
                        required/>
                    </div>
                    <div className='product-input'>
                        <label htmlFor='product-price'>Preço</label>
                        <input className='product-input-text' type='text' id='product-price' name='product-price' required/>
                    </div>
                    <div className='product-input'>
                        <label htmlFor='product-quantity'>Quantidade</label>
                        <input className='product-input-text' type='text' id='product-quantity' name='product-quantity' required/>
                    </div>
                    <button type='submit'>Registrar</button>
                </form>
            </section>
            <section className='product-list'>
                <h2>Produtos</h2>
            </section>
        </>
    )
}

export default Home