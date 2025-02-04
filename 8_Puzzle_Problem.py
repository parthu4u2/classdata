# 8 Puzzle BFS Algoritham
import numpy as np 
import os 


class Node:
    def __init__(self,node_no,data,parent,act,cost):
        self.data=data
        self.parent=parent
        self.act=act
        self.node_no = node_no
        self.cost = cost
    
    def get_initial():
        print("Please enter number from 0-8,no number should repeated :")
        initial_state=np.zeros(9)
        for i in range(9):
            states=int(input(f"Enter the{i+1} number:"))
            if states<0 or states>8:
                print("Invalid input! enter number betwwen 0-8")
                exit(0)
            initial_state[i]=np.array(states)
        return np.reshape(initial_state,(3,3))
    
    def find_index(puzzle):
        i,j=np.where(puzzle==0)
        return int(i),int(j)

    def move_left(data):
        i,j=find.find_index(data)
        if j==0:
            return None 
        temp_arr=np.copy(data)
        temp_arr[i,j],temp_arr[i,j-1]=temp_arr[i,j-1],temp_arr[i,j]
        return temp_arr

    def move_right(data):
        i,j=find.find_index(data)
        if j==2:
            return None 
        temp_arr=np.copy(data)
        temp_arr[i,j],temp_arr[i,j+1]=temp_arr[i,j+1],temp_arr[i,j]
        return temp_arr

    def move_up(data):
        i,j=find.find_index(data)
        if i==0:
            return None 
        temp_arr=np.copy(data)
        temp_arr[i,j],temp_arr[i-1,j]=temp_arr[i-1,j],temp_arr[i,j]
        return temp_arr
    
    def move_down(data):
        i,j=find.find_index(data)
        if i==2:
            return None 
        temp_arr=np.copy(data)
        temp_arr[i,j],temp_arr[i+1,j]=temp_arr[i+1,j],temp_arr[i,j]
        return temp_arr
    
    def move_tile(action,data):
        moves={"up":move_up,"down":move_down,"left":move_left,"right":move_right}
        return moves[action](data) if action in moves else None

    def solve_puzzle(start):
        goal=np.array([[1,2,3],[4,5,6],[7,8,9]])
        queue=deque([Node(0,start,None,None,0)])
        visited=set()

    while queue:
        node = queue.popleft()
        if np.array_equal(node,data,goal):
    return get.solution.path(node)
        
        visited.add(tuple(map(tuple,node.data)))

        for move in ["up","down","left","right"]:
            new_state=move_title(move,node.data)
            if new_state is not None and tuple(map(tuple,new_state)) not in visited:
                queue.apped(Node(0,new_state,node,move,0))
            return None
        
        def get_solution_path(node):
            path=[]
            while node.parent:
                path.apped((node.act,node.data))
                node=node.parent
            return path[::-1]

        initial_state=get_initial()
        solution=solve_puzzle(initial_state)

        if solution:
            print("\nSolution Found :")
            for move,state in solution:
                print(f"\nMove: {move}\n{state}")
            else:
                print("\nNo solution exists")

        
