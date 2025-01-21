 theBoard = {'7':' ','8':' ','9':' ',
            '4':' ','5':' ','6':' ',
            '1':' ','2':' ','3':' '}
board_keys = []

for key in theBoard:
    board_keys.append(key)

def printBoard(board):
    print(board['7']+'|'+board['8']+'|'+board['9'])
    print('-+-+-')
    print(board['4']+'|'+board['5']+'|'+board['6'])
    print('-+-+-')
    print(board['1']+'|'+board['2']+'|'+board['3'])

def check_winner():
    
    win_combinations = [
        ('7', '8', '9'), ('4', '5', '6'), ('1', '2', '3'), 
        ('1', '4', '7'), ('2', '5', '8'), ('3', '6', '9'), 
        ('7', '5', '3'), ('1', '5', '9') 
    ]
    
    for combination in win_combinations:
        if theBoard[combination[0]] == theBoard[combination[1]] == theBoard[combination[2]] != ' ':
            return True
    return False

def game():
    turn = 'X'
    count = 0
    
    for i in range(9): 
        printBoard(theBoard)
        print(f"It's your turn, {turn}. Move to which place?")
        
        move = input()

        if theBoard[move] == ' ':
            theBoard[move] = turn
            count += 1
        else:
            print("That place is already filled. Move to which place?")
            continue

        if count >= 5 and check_winner():
            printBoard(theBoard)
            print("\nGame Over.\n")
            print(f"**** {turn} won! ****")
            break
        
        if count == 9:  
            printBoard(theBoard)
            print("\nGame Over.\n")
            print("It's a tie!")
            break
        

        if turn == 'X':
            turn = 'O'
        else:
            turn = 'X'
    
    for key in board_keys:
        theBoard[key] = ' '
    
    play_again = input("Do you want to play again? (y/n): ").lower()
    if play_again == 'y':
        game()  

if __name__ == "__main__":
    game()
