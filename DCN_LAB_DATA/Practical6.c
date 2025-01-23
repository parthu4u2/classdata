#include<stdio.h>
#include<ctype.h>

int main()
{
char text[1000];
int char_count=0;
int alpha=0;
int digit=0;
int space=0;
int special_char=0;

printf("Enter Text To Analyze :- ");
fgets(text,sizeof(text),stdin);

for(int i=0;text[i]!='\0';i++)
{
	if(text[i]=='\n'){
		continue;
	}
	char_count++;
	
	if(isalpha(text[i])){
	alpha++;
	}
	else if(isdigit(text[i])){
	digit++;	
	}
	else if(isspace(text[i])){
	space++;
	}
	else{
	special_char++;
	}
}
printf("\nCharacter analysis result \n");
printf("-----------------------------------\n");
printf("total character is :- %d\n",char_count);
printf("Alphabets is :- %d\n",alpha);
printf("Digits is :- %d\n",digit);
printf("Space is :- %d\n",space);
printf("Special Character is :- %d\n",special_char);

return 0;
}
