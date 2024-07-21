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
                <form>
                    <h2>Product Registration</h2>
                    <label htmlFor='product-name'>ID</label>
                    <input type='text' id='product-name' name='product-name' required/>
                    <label htmlFor='product-name'>Produto</label>
                    <input type='text' id='product-name' name='product-name' required/>
                    <label htmlFor='product-price'>Preço</label>
                    <input type='text' id='product-price' name='product-price' required/>
                    <label htmlFor='product-quantity'>Quantidade</label>
                    <input type='text' id='product-quantity' name='product-quantity' required/>
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