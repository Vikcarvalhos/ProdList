import React, { useEffect, useState } from 'react';
import '../css/style.css';
import mainImg from '../assets/img/mainProdList.svg';
import axios from 'axios';

function Home(){
    const [products, setProducts] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        // Carrega os produtos
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => setProducts(data.products))
            .catch(error => console.error("Erro ao carregar produtos:", error));
    
        // Verifica se o usuário é Admin
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (userInfo && userInfo.Type === 'Admin') {
            setIsAdmin(true);
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault(); // Previne o comportamento padrão do formulário

        // Coleta os dados do formulário
        const formData = new FormData(event.target);
        const productData = {
            Title: formData.get('product-name'),
            Description: formData.get('product-description'),
            Price: formData.get('product-price'),
            Quantity: formData.get('product-quantity')
        };

        // Usa o Axios para enviar os dados para a API
        axios.post('http://localhost:3000/products', productData)
            .then(response => {
                console.log(response.data.message);
                // Atualiza a lista de produtos após o cadastro
                setProducts([...products, productData]);
            })
            .catch(error => console.error("Erro ao cadastrar produto:", error));
    };

    const handleRemove = (productId) => {
        axios.delete(`http://localhost:3000/products/${productId}`)
            .then(() => {
                setProducts(products.filter(product => product.ID !== productId));
            })
            .catch(error => console.error("Erro ao remover produto:", error));
    };

    const handleDownloadTemplate = () => {
        window.location.href = 'http://localhost:5000/download-template';
    };

    const handleFileUpload = (event) => {
        const fileInput = document.querySelector('#file');
        const formData = new FormData();
        formData.append('file', fileInput.files[0]);
    
        axios.post('http://localhost:5000/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then(response => {
            console.log(response.data.message);
            // Atualize a lista de produtos aqui, se necessário
        })
        .catch(error => console.error("Erro ao enviar arquivo:", error));
    };

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
                <form className='product-registration-form' onSubmit={handleSubmit}>
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
                    <div className='product-registration-buttons-1'>
                        <button type='submit'>Registrar</button>
                        <button className='download-template-button' onClick={handleDownloadTemplate}>Baixe Modelo Para Cadastro</button>
                    </div>
                    <div className='product-registration-buttons-2'>
                        <input type="file" name="file" id="file" />
                        <button type="button" onClick={handleFileUpload}>Enviar Arquivo</button>
                    </div>
                </form>
            </section>
            <section className='product-list'>
                <h2>Produtos</h2>
                <div className='product-grid'>
                    {products.map(({ ID, Visibility, ...product }) => (
                        <div key={ID} className='product-card'>
                            <h3>{product.Title}</h3>
                            <p>{product.Description}</p>
                            <div className='product-price-container'>
                                <p className='product-price'>${product.Price}</p>
                                {isAdmin ? (
                                    <button className='product-buy-button' onClick={() => handleRemove(ID)}>Remover</button>
                                ) : (
                                    <button className='product-buy-button'>Comprar</button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Home