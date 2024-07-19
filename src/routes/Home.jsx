import '../css/style.css'
import mainImg from '../assets/img/mainProdList.svg' 

function Home(){

    return(
        <>
            <main>
                <div className="main-container">
                    <div>
                        <h1>Home</h1>
                        <p>Home Page</p>
                    </div>
                    <div>
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