from boggle import Boggle
from flask import Flask, render_template, redirect, flash, session, request, jsonify
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
    guess = request.json['guess_input']
   
    board = session.get('board')
    #set class Boggle to reader variable
    boggle = Boggle()
    #checking if word exists in words lists
    validate_word = boggle.check_valid_word(board,guess)
    print(validate_word)
    return jsonify({'result': validate_word})
    
    
    """ 
    Question for Sonia:

    how do I get the flash message to pup up on board.html form this view function?

         """