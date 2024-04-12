from flask import Flask, jsonify, request
from flask_cors import CORS
import subprocess
import json
import os

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})  # Allow CORS for all origins on /api routes

@app.route('/api/trigger-scrape', methods=['GET'])
def trigger_scrape():
    try:
        subprocess.run(['scrapy', 'crawl', 'goodreads_spider'])
        return jsonify({'status': 'success', 'message': 'Scraping triggered'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})

@app.route('/api/books', methods=['GET'])
def get_books():
    try:
        file_path = '/home/vil/code/walmart/grscrapy/scraped_data.json'
        if not os.path.exists(file_path):
            return jsonify({'status': 'error', 'message': 'File not found'})
        
        with open(file_path, 'r') as file:
            books = json.load(file)
        return jsonify(books)
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})

@app.route('/api/start-scraping', methods=['POST'])
def start_scraping():
    try:
      

        # Run the Flask app
        app_path = '/path/to/my_project/flask_app/app.py'  # Update with your Flask app path
        flask_command = f'python {app_path}'
        flask_process = subprocess.Popen(flask_command, shell=True, executable='/bin/bash')

        # Run the Scrapy spider
        scrapy_path = '/path/to/my_project/scrapy_project'
        os.chdir(scrapy_path)
        scrapy_command = 'scrapy crawl goodreads_spider'
        scrapy_process = subprocess.Popen(scrapy_command, shell=True, executable='/bin/bash')

        return jsonify({'status': 'success', 'message': 'Flask app and Scrapy spider started'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
