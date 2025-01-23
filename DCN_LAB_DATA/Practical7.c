#include<stdio.h>
#include<string.h>

int main(){
char bitStream[1000];
int zeros=0;
int ones=0;
int totalBits=0;
int isValid=1;

printf("Enter the bit stream (Containing only 0s and 1s) : ");
scanf("%s",bitStream);

for(int i=0;bitStream[i]!='\0';i++)
{
	if(bitStream[i]=='0'){
	zeros++;
	totalBits++;
	}	
	else if(bitStream[i]=='1')
	{
	ones++;
	totalBits++;
	}
	else
	{
	isValid=0;
	break;
	}
}

if(isValid)
{
	printf("Bit Stream Analysis Results :\n");
	printf("-----------------------------\n");
	printf("total number of bits :- %d\n",totalBits);
	printf("total number of zeros :- %d\n",zeros);
	printf("total number of ones :- %d\n",ones);
	printf("percentages of zeros :- %.2f%%\n",(float)zeros/totalBits*100);	
	printf("percentages of ones :- %.2f%%\n ",(float)zeros/totalBits*100);
}
else
{
	printf("\n Invalid Input ! Plese Enter Only One & Zeros ... ");
}

return 0;
}
