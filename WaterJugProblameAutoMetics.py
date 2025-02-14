from collections import deque

def bfs(jugA,jugB,targetA,targetB):
    visited=set()
    queue=deque()


    queue.append((0,0,[]))

    while queue:
        a,b,path=queue.popleft()

        if(a,b)==(targetA,targetB):
            print("Steps to reach the goaL.")
            for step in path:
                print(step)
            return
        
        if(a,b) in visited:
            continue
        visited.add((a,b))

        moves=[
            (jugA,b,"Fill Jug A"),
            (a,jugB,"Fill Jug B"),
            (0,b,"Empty Jug A"),
            (a,0,"Empty Jug B"),
            (max(0,a-(jugB-b)),min(jugB,a+b),"Pour A -> B"),
            (min(jugA,a+b),max(0,b-(jugA-a)),"Pour B -> A")
        ]

        for new_a,new_b,action in moves:
            if(new_a,new_b)not in visited:
                queue.append((new_a,new_b,path+[f"({a},{b})->{action}->({new_a},{new_b})"]))

    print("No Solution found.")
jugA=int(input("Enter Jug A Capacity :"))
jugB=int(input("Enter Jug B Capacity :"))
targetA=int(input("Enter Final Water in Jug A :"))
targetB=int(input("Enter Final Water in Jug B :"))

bfs(jugA,jugB,targetA,targetB)




