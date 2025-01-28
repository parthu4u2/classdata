def print_in_format(matrix):
    for io in range(9):
      if i%3==0 and i >0:
        print("")
      print(str(matrix[i])+" ",end="")

def count(s):
  c=0
  ideal=[1,2,3,4,5,6,7,8,0]
  
  for i in range(9):
    if s[i]!=0 and s[i]!=ideal[i]:
      c+=1
  return c

def move(ar,p,st):
  rh=9999
  store_st=st.copy()
  
  for i in range(len(ar)):
    dupl_st=st.copy()
    
    