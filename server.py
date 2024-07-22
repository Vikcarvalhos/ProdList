from flask import Flask, request, jsonify
from flask import send_from_directory
from flask_cors import CORS
import pandas as pd
import json
import os

app = Flask(__name__)
CORS(app)

@app.route('/download-template', methods=['GET'])
def download_template():
    directory = r'.\ProdList\src\assets'  # Caminho do diretório onde o arquivo está localizado
    filename = 'Modelo para envio.xlsx'  # Nome do arquivo para download
    return send_from_directory(directory, filename, as_attachment=True)

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'message': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'message': 'No selected file'}), 400
    if file:
        # Lê o arquivo xlsx para um DataFrame
        df = pd.read_excel(file)
        
        # Adiciona a coluna Visibility
        df['Visibility'] = 'Enabled'
        
        # Define o caminho correto para o product.json
        product_json_path = r'.\ProdList\data\product.json'
        
        # Carrega o product.json atual
        if os.path.exists(product_json_path):
            with open(product_json_path, 'r') as f:
                data = json.load(f)
            last_id = int(data['products'][-1]['ID']) if data['products'] else 0
        else:
            data = {'products': []}
            last_id = 0
        
        # Atualiza o product.json com os novos produtos
        for _, row in df.iterrows():
            last_id += 1
            product = row.to_dict()
            product['ID'] = str(last_id)
            data['products'].append(product)
        
        with open(product_json_path, 'w') as f:
            json.dump(data, f, indent=4)
        
        return jsonify({'message': 'File processed successfully'}), 200

if __name__ == '__main__':
    app.run(debug=True)