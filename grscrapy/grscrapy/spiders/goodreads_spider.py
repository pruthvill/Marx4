import scrapy
import json

class PinterestSpider(scrapy.Spider):
    name = 'goodreads_spider'
    allowed_domains = ['goodreads.com']
    start_urls = ['https://www.goodreads.com/review/list/119837803-pruthvil?shelf=to-read']

    def parse(self, response):
        books = []

        for book in response.css('#booksBody .bookalike.review'):
            title = book.css('.title a[title]::attr(title)').get().strip()
            author = book.css('.author a::text').get().strip()
            cover = book.css('.cover img::attr(src)').get()

            books.append({
                'title': title,
                'author': author,
                'cover': cover
            })

        with open('books.json', 'w') as file:
            json.dump(books, file)

        for book in books:
            yield book
