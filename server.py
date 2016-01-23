from jinja2 import StrictUndefined

from flask import Flask, render_template, make_response, redirect, request, flash, session

app = Flask(__name__)
app.secret_key = "HyrVFG2jcVlpN0qH"

app.jinja_env.undefined = StrictUndefined

# @app.route('/', methods=["GET"])
# def index():
#     """
#     Renders the main page, index.html, from which all routes are 
#     served using Angular.js
#     """
#     return render_template("index.html")

@app.route('/')
@app.route('/about')
@app.route('/projects')
@app.route('/contact')
def render_pages(**kwargs):
    return make_response(open('templates/index.html').read())


if __name__ == "__main__":
    

    app.run(debug = True)