a=int(input("Enter Jug A Capacity :- "))
b=int(input("Enter Jug B Capacity :- "))
ai=int(input("Initially Water in Jug A :- "))
bi=int(input("Initially Water in Jug B :- "))
af=int(input("Final Sate of Jug A :- "))
bf=int(input("Final Sate of Jug B :- "))


print("\n List Of Operation You Can Perform.")
print("1.Fill Jug A Completely")
print("2.Fill Jug B Completely")
print("3.Empty Jug A Completely")
print("4.Fill Jug B Completely")
print("5.Pour From Jug A until Jug B is full or Jug A is empty")
print("6.Pour From Jug B until Jug A is full or Jug B is empty")
print("7.Pour all water from Jug B to Jug A")
print("8.Pour all water from Jug A to Jug B")


while(ai!=af or bi!=bf):
    op=int(input("\Enter The Operation Number :- "))

    if op==1:
        ai=a
    elif op==2:
        bi=b
    elif op==3:
        ai=0
    elif op==4:
        bi=0
    elif op==5:
        transfer=min(ai,b-bi)
        ai-=transfer
        bi+=transfer
    elif op==6:
        transfer=min(bi,a-ai)
        bi-=transfer
        ai+=transfer
    elif op==7:
        ai+=bi
        bi=0
    elif op==8:
        bi+=ai
        ai=0
    else:
        print("Invalid Operation Number")

    print(f"Current State Jug A={ai},Jub B ={bi}")
    
