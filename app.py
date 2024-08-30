from boggle import Boggle
from flask import Flask, render_template, redirect, flash, session, request
from flask_debugtoolbar import DebugToolbarExtension


boggle_game = Boggle()

app = Flask(__name__)
app.config['SECRET_KEY'] = ['thow_shall_not_pass']
app.config['testing'] = True
app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-tollbar']

@app.route('/')
def home_page():
    return render_template('home.html')

@app.route('/board')
def board_page():
    game = boggle_game
    board = game.make_board()
    #storing board in a session to prevent complications with other routes
    session['board'] = board
    return render_template('board.html', board = board)

@app.route('/submit_guess', methods=['POST'])
def submit_guess():
    guess = request.form['guess']

    return f'<h1>{guess}</h1>'